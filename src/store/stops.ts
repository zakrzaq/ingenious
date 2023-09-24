import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@store";
import { fetchAllStops } from "@/services/api";
import { Stop } from "@/interfaces";

export interface StopsState {
  stops: Stop[];
  allLines: number[];
  selectedLine: number;
  linesAscending: boolean;
}

const state: StopsState = {
  stops: [],
  allLines: [],
  selectedLine: 0,
  linesAscending: false,
};

const mutations: MutationTree<StopsState> = {
  setStops(state, payload: Stop[]) {
    state.stops = payload;
  },
  setSelectedLine(state, payload: number) {
    state.selectedLine = payload;
  },
  toggleLinesAscending(state) {
    state.linesAscending = !state.linesAscending;
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
    return [...new Set(state.stops.map((obj) => obj.line))].sort();
  },
  getSelectedLine(state) {
    return state.selectedLine;
  },
  getSelectedLineStops(state) {
    const tmp = state.stops.filter((obj) => obj.line === state.selectedLine);
    return tmp.sort((a, b) => {
      if (a.order !== b.order) {
        if (state.linesAscending) {
          return b.order - a.order;
        } else {
          return a.order - b.order;
        }
      }
      return a.time.localeCompare(b.time);
    });
  },
  getSelectedLineStopsList(state, getters) {
    const stops: Stop[] = getters.getSelectedLineStops;
    return [...new Set(stops.map((obj) => obj.stop))];
  },
  getLinesAscending(state) {
    return state.linesAscending;
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
