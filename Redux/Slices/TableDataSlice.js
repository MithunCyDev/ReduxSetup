// src/slices/TableDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: {
    selectedTableData: [],
  },
  reducers: {
   
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
  },
});

export const { setTableData } = tableDataSlice.actions;
export default tableDataSlice.reducer;
