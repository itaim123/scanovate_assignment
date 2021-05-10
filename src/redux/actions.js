import TYPES from './types';

export const loadData = val => ({
    type: TYPES.DATA_LOADED,
    payload: val
});

export const toggleDrawer = () => ({
    type: TYPES.TOGGLE_DRAWER
})