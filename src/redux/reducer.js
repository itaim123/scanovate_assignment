import TYPES from './types';

const INITIAL_STATE = {
  data: {},
  loading: true,
  showDrawer: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.DATA_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case TYPES.TOGGLE_DRAWER:
      return {
        ...state,
        showDrawer: !state.showDrawer
      }
    default:
      return state;
  }
};

export default reducer;