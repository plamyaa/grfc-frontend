import { createStore } from 'vuex';
import { menuModel, IMenuState } from '@/widgets/sideMenu';
import { tableModel, ITableState } from '@/entities/table/model';
export interface State {
  menu: IMenuState;
  table: ITableState;
}

export const store = createStore<State>({
  modules: {
    [menuModel.NAMESPACE]: menuModel.module,
    [tableModel.NAMESPACE]: tableModel.module,
  },
});
