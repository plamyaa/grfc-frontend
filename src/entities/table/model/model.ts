import { ITableHeader } from './header';
import { fakeTable } from './fakeTable';
import { headerModel } from './header';
export const NAMESPACE = 'table';

const IS_NAMESPACED = true;

export interface ITableRow {
  id: number;
  number: string;
  dateOfStart: string;
  dateOfEnd: string;
  owner: string;
  radioService: string;
  INN: number;
  region: string;
}

export interface ITableState {
  data: ITableRow[];
  selectedRows: number[];
  header: ITableHeader;
}

export const module = {
  namespaced: IS_NAMESPACED,
  state: {
    data: fakeTable,
    selectedRows: [],
  },
  getters: {
    // Object.entries медленный метод, нужно найти более оптимизированный способ фильтрации объекта

    // Сдесь фильтруется объекты(строки) таблицы
    useTable: (state: ITableState) =>
      // Возвращаем отфильтрованные строки
      state.data.map((row) =>
        // Создаем объект из entries (выглядят как кортеж из ключа и значения)
        Object.fromEntries(
          // Выделяем из объекта entries и фильтруем по индексу
          Object.entries(row).filter(
            // Проверяем находится ли индекс в массиве выбранных колонн
            (_, index) => state.header.selectedColumns.includes(index)
          )
        )
      ),

    columns: (state: ITableState) => Object.keys(state.data[0]),
    isSelectedRow: (state: ITableState) => (id: number) =>
      Boolean(state.selectedRows.includes(id)),
    isSelectedAllRows: (state: ITableState) =>
      state.selectedRows.length === state.data.length,
  },
  mutations: {
    toggleAllRows(state: ITableState) {
      if (state.selectedRows.length === state.data.length) {
        state.selectedRows = [];
      } else {
        state.selectedRows = state.data.map((row) => row.id);
      }
    },
    toggleRow(state: ITableState, id: number) {
      const isRowSelected = Boolean(state.selectedRows.includes(id));
      if (isRowSelected) {
        state.selectedRows = state.selectedRows.filter((rowId) => rowId !== id);
      } else {
        state.selectedRows.push(id);
      }
    },
  },
  modules: {
    [headerModel.NAMESPACE]: headerModel.module,
  },
};

const withPrefix = (name: string) => (IS_NAMESPACED ? `${NAMESPACE}/${name}` : name);

export const mutations = {
  toggleAllRows: withPrefix('toggleAllRows'),
  toggleRow: withPrefix('toggleRow'),
};

export const getters = {
  useTable: withPrefix('useTable'),
  columns: withPrefix('columns'),
  isSelectedRow: withPrefix('isSelectedRow'),
  isSelectedAllRows: withPrefix('isSelectedAllRows'),
};
