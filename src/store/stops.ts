import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@store";
import { fetchAllStops } from "@/services/api";
import { Stop } from "@/interfaces";

export interface StopsState {
  stops: Stop[]
}

const state: StopsState = {
  stops: [],
}

const mutations: MutationTree<StopsState> = {
  setStops(state, payload: Stop[]) {
    state.stops = payload
  }

}

const actions: ActionTree<StopsState, RootState> = {
  async fetchStops({ commit }) {
    const res = await fetchAllStops();
    commit("setStops", res);
  },
}

const getters: GetterTree<StopsState, RootState> = {
  getStops (state) {
    return state.stops
  } 
}

const stops: Module<StopsState, RootState> = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export { stops as stopsModule };

