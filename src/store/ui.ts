import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@store";

export interface UiState {
  selectedLine: number;
  linesAscending: boolean;
  selectedStop: string;
}

export type UiGetters = {
  getSelectedLine: (state: UiState) => number;
  getLinesAscending: (state: UiState) => boolean;
  getSelectedStop: (state: UiState) => string;
};

export type UiMutations = {
  setSelectedLine(state: UiState, payload: number): void;
  toggleLinesAscending(state: UiState): void;
  setSelectedStop(state: UiState, payload: string): void;
};

// NOTE: maybe linesDescending - think about it
const state: UiState = {
  selectedLine: 0,
  linesAscending: false,
  selectedStop: "",
};

const mutations: MutationTree<UiState> & UiMutations = {
  setSelectedLine(state, payload: number) {
    state.selectedLine = payload;
  },
  toggleLinesAscending(state) {
    state.linesAscending = !state.linesAscending;
  },
  setSelectedStop(state, payload: string) {
    state.selectedStop = payload;
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
  getSelectedStop(state) {
    return state.selectedStop;
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
