import { ITableSettings } from './settings';
import { settingsModel } from './settings';
import { fakeTable } from './fakeTable';
import { ITableHeader } from './header';
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
  settings: ITableSettings;
}

export const module = {
  namespaced: IS_NAMESPACED,
  state: {
    data: fakeTable,
    selectedRows: [],
  },
  getters: {
    // Object.entries медленный метод, нужно найти более оптимизированный способ фильтрации объекта
    useTable: (state: ITableState) =>
      // Сдесь фильтруется объекты(строки) таблицы
      // Возвращаем отфильтрованные строки
      state.data
        .map((row) =>
          // Создаем объект из entries (выглядят как кортеж из ключа и значения)
          Object.fromEntries(
            // Выделяем из объекта entries и фильтруем по индексу
            Object.entries(row).filter(
              // Проверяем находится ли индекс в выбранных колоннах
              (_, index) => state.header.selectedColumns.includes(index)
            )
          )
        )
        // Сортировка по убыванию или возрастанию
        .sort((a, b) => {
          const key = state.header.sorting.key || 'id';
          const direction = state.header.sorting.direction;
          if (direction) {
            return a[key] >= b[key] ? 1 : -1;
          } else {
            return a[key] < b[key] ? 1 : -1;
          }
        })
        // Фильтрация, когда водится значение в поиск
        // Работает жутко медленно, особенно при удалении символов !!!
        .filter((row) => {
          const { key, value } = state.header.filter;
          if (!key && !value) return row;

          if (row[key].toLowerCase().includes(value.toLowerCase())) return row;
          return null;
        })
        // Пагинация
        .slice(
          state.settings.pagination.page * state.settings.pagination.currentValue,
          state.settings.pagination.page * state.settings.pagination.currentValue +
            state.settings.pagination.currentValue
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
    [settingsModel.NAMESPACE]: settingsModel.module,
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
