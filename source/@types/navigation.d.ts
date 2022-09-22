import { AppParamList } from 's/types/navigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
