// PERF: improvements required:
// TS integration (enums) for getters, actions, mutations

import Vuex, { GetterTree } from "vuex";
import { stopsModule } from "./stops";
import { uiModule } from "./ui";

export interface RootState {
  appTitle: string;
}

const state: RootState = {
  appTitle: "Timetable",
};

const getters: GetterTree<RootState, RootState> = {
  getAppTitle: (state) => state.appTitle,
};

const store = {
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {
    stops: stopsModule,
    ui: uiModule,
  },
};

export default new Vuex.Store<RootState>(store);
