export type UserType = {
  id: string
  name: string
  password: string
}

export type TokensType = {
  accessToken: string
  refreshToken: string
}

export type LoginResponseType = {
  accessToken: string
  expiresIn: number
}

export type LoginInputType = {
  email: string
  password: string
}
