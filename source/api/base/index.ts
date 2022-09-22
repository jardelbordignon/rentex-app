import { AxiosError, Method } from 'axios'

import { mockedApi } from '../mocks'

import { env } from 's/config'
import { store } from 's/store'

import { ApiError } from './error'
import { SetupApi, SetupApiHeadersType } from './setup'

class Api {
  public get<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>('GET', url, params)
  }

  public post<T = any>(url: string, body: any): Promise<T> {
    return this.request<T>('POST', url, body)
  }

  public put<T = any>(url: string, body: any): Promise<T> {
    return this.request<T>('PUT', url, body)
  }

  public patch<T = any>(url: string, body: any): Promise<T> {
    return this.request<T>('PATCH', url, body)
  }

  public delete<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>('DELETE', url, params)
  }

  public upload<T = any>(
    url: string,
    data: FormData,
    onProgress: (progress: number) => void
  ): Promise<T> {
    return this.request<T>('POST', url, data, onProgress)
  }

  private async request<T = any>(
    method: Method,
    url: string,
    data?: any,
    onProgress?: (progress: number) => void
  ): Promise<T> {
    try {
      onProgress && onProgress(0)
      const { accessToken } = store.getState().auth

      const setupApiHeaders: SetupApiHeadersType = {}
      if (accessToken) {
        setupApiHeaders.Authorization = `Bearer ${accessToken}`
      }

      const request = env.useMocks
        ? mockedApi(method, url, data)
        : SetupApi(setupApiHeaders).request({
            url,
            method,
            headers: {
              //'X-CCSite': env.name === 'development' ? '' : 'mobileCarmenSteffens',
              'Content-Type':
                data instanceof FormData ? 'multipart/form-data' : 'application/json',
            },
            params: method === 'GET' ? data : null,
            data: ['POST', 'PUT', 'PATCH'].includes(method) ? data : null,
            onUploadProgress: (progress: ProgressEvent) => {
              onProgress && onProgress((progress.loaded / progress.total) * 100)
            },
          })

      const response = await request
      onProgress && onProgress(100)

      return response.data || {}
    } catch (err: any) {
      return this.handleError<T>(err)
    }
  }

  private async handleError<T>(err: AxiosError): Promise<T> {
    if (!err.config || !err.response) throw err
    throw new ApiError(err.config, err.response, err)
  }
}

export const api = new Api()
