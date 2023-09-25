import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@store";
import { fetchAllStops } from "@/services/api";
import { sortByTimeStrings } from "@/helpers/time";
import { Stop } from "@/interfaces";

export interface StopsState {
  stops: Stop[];
}

export type StopsGetters = {
  getAllStops: (state: StopsState) => Stop[];
  getAllStopsList: (state: StopsState) => string[];
  getStopByQuery: (
    state: StopsState,
    context: RootState,
    query: string
  ) => string[];
  getAllLines: (state: StopsState) => string[];
  getSelectedLineStops: (state: StopsState, context: RootState) => Stop[];
  getSelectedLineStopsList: (
    state: StopsState,
    getters: StopsGetters
  ) => string[];
  getSelectedLineAndStopStops: (
    state: StopsState,
    getters: StopsGetters,
    context: RootState
  ) => Stop[];
};

export type StopsMutations = {
  setStops(state: StopsState, payload: Stop[]): void;
};

const state: StopsState = {
  stops: [],
};

const mutations: MutationTree<StopsState> = {
  setStops(state, payload: Stop[]) {
    state.stops = payload;
  },
};

const actions: ActionTree<StopsState, RootState> = {
  async fetchStops({ commit }) {
    const res = await fetchAllStops();
    commit("setStops", res);
  },
};

const getters: GetterTree<StopsState, RootState> = {
  getAllStops(state) {
    return state.stops;
  },
  getAllStropsList(state) {
    return [...new Set(state.stops.map((obj) => obj.stop))].sort();
  },
  getStopByQuery(state, context): string[] {
    const re = new RegExp(context.getStopQuery, "i");
    const timesList = context.getAllStropsList.filter((item: string) =>
      re.test(item)
    );
    return context.getStopsAscending ? timesList.reverse() : timesList;
  },
  getAllLines(state) {
    return [...new Set(state.stops.map((obj) => obj.line))].sort();
  },
  getSelectedLineStops(state, context) {
    const tmp = state.stops.filter(
      (obj) => obj.line === context.getSelectedLine
    );
    return tmp.sort((a, b) => {
      if (a.order !== b.order) {
        if (context.getLinesAscending) {
          return b.order - a.order;
        } else {
          return a.order - b.order;
        }
      }
      return sortByTimeStrings(a.time, b.time, true);
    });
  },
  getSelectedLineStopsList(state, getters) {
    return [
      ...new Set(getters.getSelectedLineStops.map((obj: Stop) => obj.stop)),
    ];
  },
  getSelectedLineAndStopStops(state, context) {
    return context.getSelectedLineStops.filter(
      (obj: Stop) => obj.stop == context.getSelectedStop
    );
  },
  getSelectedLineAndStopsTimes(state, getters) {
    return [
      ...new Set(
        getters.getSelectedLineAndStopStops.map((obj: Stop) => obj.time)
      ),
    ];
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
