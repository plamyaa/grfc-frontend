import { tableHeader } from '../fakeTable';
export const NAMESPACE = 'header';

const IS_NAMESPACED = true;

export interface IHeaderCell {
  id: number;
  value: string;
  name: string;
  searchType: 'data' | 'default';
}

export interface ITableHeader {
  data: IHeaderCell[];
  selectedColumns: number[];
  sorting: {
    key: string;
    direction: boolean;
  };
  filter: {
    key: string;
    value: string;
  };
}

export const module = {
  namespaced: IS_NAMESPACED,
  state: {
    data: tableHeader,
    selectedColumns: [0, 1, 2, 3, 4, 5, 6],
    sorting: {
      key: null,
      direction: false,
    },
    filter: {
      key: null,
      value: '',
    },
  },
  getters: {
    useHeader: (state: ITableHeader) => state.data,
    useTableSorting: (state: ITableHeader) => state.sorting,
    useTableFilter: (state: ITableHeader) => state.filter,
    selectedColumns: (state: ITableHeader) => {
      return state.data.filter((item) => {
        const isColumnSelected = state.selectedColumns.includes(item.id);
        if (isColumnSelected) {
          return item;
        }
      });
    },
    unselectedColumns: (state: ITableHeader) => {
      return state.data.filter((item) => {
        const isColumnSelected = state.selectedColumns.includes(item.id);
        if (!isColumnSelected) {
          return item;
        }
      });
    },
  },
  mutations: {
    selectColumn(state: ITableHeader, id: number) {
      state.selectedColumns.push(id);
    },
    unselectColumn(state: ITableHeader, id: number) {
      if (state.selectedColumns.length === 1) return;
      state.selectedColumns = state.selectedColumns.filter((columnId) => columnId !== id);
    },
    setSorting(state: ITableHeader, sorting: { key: string; direction: boolean }) {
      state.sorting = sorting;
    },
    setFilter(state: ITableHeader, filter: { key: string; value: string }) {
      state.filter = filter;
    },
  },
};

const withPrefix = (name: string) => (IS_NAMESPACED ? `${NAMESPACE}/${name}` : name);

export const mutations = {
  selectColumn: withPrefix('selectColumn'),
  unselectColumn: withPrefix('unselectColumn'),
  setSorting: withPrefix('setSorting'),
  setFilter: withPrefix('setFilter'),
};

export const getters = {
  useHeader: withPrefix('useHeader'),
  useTableSorting: withPrefix('useTableSorting'),
  useTableFilter: withPrefix('useTableFilter'),
  selectedColumns: withPrefix('selectedColumns'),
  unselectedColumns: withPrefix('unselectedColumns'),
};
