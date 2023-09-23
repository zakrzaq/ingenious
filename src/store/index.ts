import Vuex, { GetterTree } from "vuex";
import { stopsModule } from "./stops";

export interface RootState {
  appTitle: string;
}

const state: RootState = {
  appTitle: "Timetable",
}

const getters: GetterTree<RootState, RootState> = {
  getAppTitle: state => state.appTitle
};

const store = {
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {
    stops: stopsModule,
  },
};

export default new Vuex.Store<RootState>(store);
