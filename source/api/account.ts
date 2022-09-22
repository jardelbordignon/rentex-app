import { env } from 's/config'
import { LoginInputType, LoginResponseType } from 's/types/account'

import { api } from './base'

class AccountApi {
  public async login(data: LoginInputType) {
    return api.post<LoginResponseType>('login', data)
  }

  public async logout() {
    return api.post('logout', null)
  }
}

export const accountApi = new AccountApi()
