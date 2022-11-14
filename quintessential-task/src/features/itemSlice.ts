import { createSlice } from '@reduxjs/toolkit';
import WareHouseItems from '../types/WarehouseItem';

const items = [
  { item: 'name 1', description: 'description 1', warehouse: 1 },
  { item: 'name 2', description: 'description 2', warehouse: 1 },
  { item: 'name 3', description: 'description 3', warehouse: 2 },
  { item: 'name 4', description: 'description 4', warehouse: 2 },
  { item: 'name 5', description: 'description 5', warehouse: 3 },
  { item: 'name 6', description: 'description 6', warehouse: 3 },
  { item: 'name 7', description: 'description 7', warehouse: 3 },
  { item: 'name 8', description: 'description 8', warehouse: 3 },
  { item: 'name 9', description: 'description 9', warehouse: 1 },
  { item: 'name 10', description: 'description 10', warehouse: 4 },
];
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
