export const NAMESPACE = 'menu';

const IS_NAMESPACED = true;

export interface IMenuState {
  isMenuActive: boolean;
}

export const module = {
  namespaced: IS_NAMESPACED,
  state: {
    isMenuActive: false,
  },
  getters: {
    useMenu(state: IMenuState) {
      return state.isMenuActive;
    },
  },
  mutations: {
    toggleMenu(state: IMenuState) {
      state.isMenuActive = !state.isMenuActive;
    },
  },
};

const withPrefix = (name: string) => (IS_NAMESPACED ? `${NAMESPACE}/${name}` : name);

export const mutations = {
  toggleMenu: withPrefix('toggleMenu'),
};

export const getters = {
  useMenu: withPrefix('useMenu'),
};
