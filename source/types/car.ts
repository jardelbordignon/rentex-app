export type CarType = {
  id: string
  brand: string
  name: string
  about: string
  rent: {
    period: string
    price: number
  }
  fuel_type: string
  thumbnail: string
  accessories: [
    {
      type: 'speed'
      name: string
    },
    {
      type: 'acceleration'
      name: string
    },
    {
      type: 'turning_diameter'
      name: string
    },
    {
      type: 'electric_motor'
      name: string
    },
    {
      type: 'exchange'
      name: string
    },
    {
      type: 'seats'
      name: string
    }
  ]
  photos: string[]
}
