import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@store";
import { fetchAllStops } from "@/services/api";
import { Stop } from "@/interfaces";

export interface StopsState {
  stops: Stop[];
  allLines: number[];
  selectedLine: number;
}

const state: StopsState = {
  stops: [],
  allLines: [],
  selectedLine: 0,
};

const mutations: MutationTree<StopsState> = {
  setStops(state, payload: Stop[]) {
    state.stops = payload;
  },
  setSelectedLine(state, payload: number) {
    state.selectedLine = payload;
  },
};

const actions: ActionTree<StopsState, RootState> = {
  async fetchStops({ commit }) {
    const res = await fetchAllStops();
    commit("setStops", res);
  },
};

const getters: GetterTree<StopsState, RootState> = {
  getStops(state) {
    return state.stops;
  },
  getAllLines(state) {
    return (state.allLines = [
      ...new Set(state.stops.map((obj) => obj.line)),
    ].sort());
  },
  getSelectedLine(state) {
    return state.selectedLine;
  },
};

const stops: Module<StopsState, RootState> = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export { stops as stopsModule };
