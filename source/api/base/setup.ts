import axios, { AxiosError } from 'axios'

import { env } from 's/config'

export type SetupApiHeadersType = {
  Authorization?: string
}

let isRefreshing = false
let failedRequestsQueue: any[] = []

class AuthTokenError extends Error {
  constructor() {
    super('Error with authentication token')
  }
}

export function SetupApi(headers: SetupApiHeadersType) {
  const api = axios.create({
    baseURL: env.baseURL,
    headers,
  })

  api.interceptors.response.use(
    response => response,
    (error: AxiosError<any>) => {
      if (error.response?.status === 401) {
        if (error.response.data.code === 'token.expired') {
          const originalRequestConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true

            api
              .post('/refresh')
              .then(res => {
                console.log('access_token', res.data.access_token)
                // store.dispatch(login())
                // setToken(res.data.access_token)

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(res.data.access_token)
                )
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err))
              })
              .finally(() => {
                isRefreshing = false
                failedRequestsQueue = []
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalRequestConfig.headers!.Authorization = `Bearer ${token}`

                resolve(api(originalRequestConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              },
            })
          })
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }

      // se for um erro direfente de 401 então será tratado no retorno
      return Promise.reject(error.toJSON())
    }
  )

  return api
}
