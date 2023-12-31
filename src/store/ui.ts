import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@store";

export interface UiState {
  selectedLine: number;
  linesAscending: boolean;
  stopsAscending: boolean;
  selectedStop: string;
  stopQuery: string;
}

export type UiGetters = {
  getSelectedLine: (state: UiState) => number;
  getLinesAscending: (state: UiState) => boolean;
  getStopsAscending: (state: UiState) => boolean;
  getSelectedStop: (state: UiState) => string;
  getStopQuery: (state: UiState) => string;
};

export type UiMutations = {
  setSelectedLine(state: UiState, payload: number): void;
  toggleLinesAscending(state: UiState): void;
  toggleStopsAscending(state: UiState): void;
  setSelectedStop(state: UiState, payload: string): void;
  setStopQuery(state: UiState, payload: string): void;
};

const state: UiState = {
  selectedLine: 0,
  linesAscending: true,
  stopsAscending: true,
  selectedStop: "",
  stopQuery: "",
};

const mutations: MutationTree<UiState> & UiMutations = {
  setSelectedLine(state, payload: number) {
    state.selectedLine = payload;
  },
  toggleLinesAscending(state) {
    state.linesAscending = !state.linesAscending;
  },
  toggleStopsAscending(state) {
    state.stopsAscending = !state.stopsAscending;
  },
  setSelectedStop(state, payload: string) {
    state.selectedStop = payload;
  },
  setStopQuery(state, payload: string) {
    state.stopQuery = payload;
  },
};

const actions: ActionTree<UiState, RootState> = {};

const getters: GetterTree<UiState, RootState> & UiGetters = {
  getSelectedLine(state) {
    return state.selectedLine;
  },
  getLinesAscending(state) {
    return state.linesAscending;
  },
  getStopsAscending(state) {
    return state.stopsAscending;
  },
  getSelectedStop(state) {
    return state.selectedStop;
  },
  getStopQuery(state) {
    return state.stopQuery;
  },
};

const ui: Module<UiState, RootState> = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export { ui as uiModule };
