// src/reducers/index.js
import { combineReducers } from "redux";
import tableDataSlice from "../Slices/TableDataSlice";

const rootReducer = combineReducers({
  tableData: tableDataSlice,
});

export default rootReducer;
