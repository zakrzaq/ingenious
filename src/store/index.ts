// PERF: improvements required:
// TS integration (enums) for getters, actions, mutations

import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store, GetterTree } from "vuex";
import { stopsModule } from "./stops";
import { uiModule } from "./ui";

export interface RootState {
  appTitle: string;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

const state: RootState = {
  appTitle: "Timetable",
};

const getters: GetterTree<RootState, RootState> = {
  getAppTitle: (state) => state.appTitle,
};

export const store = createStore<RootState>({
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {
    stops: stopsModule,
    ui: uiModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
