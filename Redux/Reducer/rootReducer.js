// src/reducers/index.js
import { combineReducers } from "redux";
import tableDataSlice from "../Slices/TableDataSlice";
import poNumberSlice from "../Slices/poNumberSlice";
import tableSelectedRow from "../Slices/tableSelectedRow";
import leadsData from "../Slices/leadsData";

const rootReducer = combineReducers({
  tableData: tableDataSlice,
  po: poNumberSlice,
  selectedRow: tableSelectedRow,
  leadsRow: leadsData,
});

export default rootReducer;
