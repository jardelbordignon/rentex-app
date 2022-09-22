import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface IApiErrorMeta {
  request: {
    baseURL: string
    url: string
    method: string
    params: any
    data: any
    headers: any
  }
  response?: {
    status: number
    data?: any
  }
  err: any
}

class AppError<T = any> extends Error {
  public readonly extraData: T
  public readonly ignoreLog: boolean

  constructor(message: string, extraData?: T, ignoreLog = true) {
    super(message)
    this.extraData = extraData as T
    this.ignoreLog = ignoreLog
  }
}

export class ApiError extends AppError<IApiErrorMeta> {
  public readonly status: number
  public readonly data: any

  constructor(request: AxiosRequestConfig, axiosResponse: AxiosResponse, err: any) {
    const response = !axiosResponse
      ? { status: -1, data: '' }
      : { status: axiosResponse.status, data: axiosResponse.data }

    delete err.request
    delete err.response
    delete err.config

    super(
      'api-error',
      {
        request: {
          baseURL: request.baseURL!,
          url: request.url!,
          method: request.method!,
          params: request.params,
          data: request.data,
          headers: request.headers,
        },
        response,
        err,
      },
      response.status < 500
    )

    this.status = response.status
    this.data = response.data
  }
}
