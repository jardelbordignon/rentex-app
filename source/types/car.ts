type CarImageType = {
  url: string
  thumbUrl?: string
}

export type CarType = {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  images: CarImageType[]
}
