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
}

export const module = {
  namespaced: IS_NAMESPACED,
  state: {
    data: tableHeader,
    selectedColumns: [0, 1, 2, 3, 4, 5, 6],
  },
  getters: {
    useHeader: (state: ITableHeader) => state.data,
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
  },
};

const withPrefix = (name: string) => (IS_NAMESPACED ? `${NAMESPACE}/${name}` : name);

export const mutations = {
  selectColumn: withPrefix('selectColumn'),
  unselectColumn: withPrefix('unselectColumn'),
};

export const getters = {
  useHeader: withPrefix('useHeader'),
  selectedColumns: withPrefix('selectedColumns'),
  unselectedColumns: withPrefix('unselectedColumns'),
};
