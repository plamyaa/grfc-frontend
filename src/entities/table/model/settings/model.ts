export const NAMESPACE = 'settings';

const IS_NAMESPACED = true;

export interface ITableSettings {
  pagination: {
    currentValue: number;
    values: number[];
    page: number;
  };
  styles: {
    margin: number;
    fontSize: number;
  };
}

export const module = {
  namespaced: IS_NAMESPACED,
  state: {
    pagination: {
      currentValue: 15,
      values: [10, 15, 20, 25],
      page: 0,
    },
    styles: {
      margin: 1,
      fontSize: 15,
    },
  },
  getters: {
    paginationCurrentValue: (state: ITableSettings) => state.pagination.currentValue,
    paginationValues: (state: ITableSettings) => state.pagination.values,
    paginationPage: (state: ITableSettings) => state.pagination.page,
    styles: (state: ITableSettings) => state.styles,
  },
  mutations: {
    setPagination(state: ITableSettings, value: number) {
      state.pagination.currentValue = value;
    },
    setPage(state: ITableSettings, page: number) {
      state.pagination.page = page;
    },
    setMargin(state: ITableSettings, margin: number) {
      state.styles.margin = margin;
    },
    setFontSize(state: ITableSettings, fontSize: number) {
      state.styles.fontSize = fontSize;
    },
  },
};

const withPrefix = (name: string) => (IS_NAMESPACED ? `${NAMESPACE}/${name}` : name);

export const mutations = {
  setPagination: withPrefix('setPagination'),
  setPage: withPrefix('setPage'),
  setMargin: withPrefix('setMargin'),
  setFontSize: withPrefix('setFontSize'),
};

export const getters = {
  paginationCurrentValue: withPrefix('paginationCurrentValue'),
  paginationValues: withPrefix('paginationValues'),
  paginationPage: withPrefix('paginationPage'),
  styles: withPrefix('styles'),
};
