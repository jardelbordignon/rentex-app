import AccelerationSvg from 's/assets/acceleration.svg'
import CarSvg from 's/assets/car.svg'
import EnergySvg from 's/assets/energy.svg'
import ExchangeSvg from 's/assets/exchange.svg'
import ForceSvg from 's/assets/force.svg'
import GasolineSvg from 's/assets/gasoline.svg'
import HybridSvg from 's/assets/hybrid.svg'
import PeopleSvg from 's/assets/people.svg'
import SpeedSvg from 's/assets/speed.svg'

export function accessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg
    case 'acceleration':
      return AccelerationSvg
    case 'turning_diameter':
      return ForceSvg
    case 'gasoline_motor':
      return GasolineSvg
    case 'electric_motor':
      return EnergySvg
    case 'hybrid_motor':
      return HybridSvg
    case 'exchange':
      return ExchangeSvg
    case 'seats':
      return PeopleSvg
    default:
      return CarSvg
  }
}
