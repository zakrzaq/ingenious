/* eslint-disable */
import { Store } from 'vuex'
import { RootState } from '@/store'

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

declare module 'vuex' {
  export function useStore(key?: string): Store<RootState>;
}

