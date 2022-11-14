import { createSlice } from '@reduxjs/toolkit';
import WareHouseItems from '../types/WarehouseItem';
import items from '../data/warehouseItems';

const initialState: { items: WareHouseItems[] } = { items: items };

const itemsSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log('removing this item');
      console.log(action.payload);
      state.items = state.items.filter((item) => {
        console.log(item);
        return item.item != action.payload;
      });
    },
  },
});
export default itemsSlice;
export const itemsReducer = itemsSlice.reducer;
export const itemsActions = itemsSlice.actions;
