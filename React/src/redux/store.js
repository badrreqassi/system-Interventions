import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import accessReducer from "./reducers/access";
import companyReducer from "./reducers/comapny";
import complainReducer from "./reducers/complain";
import days_workedReducer from "./reducers/days_worked";
import EmpcReducer from "./reducers/emp_C";
import empS_Reducer from "./reducers/emp_S";
import loginReducer from "./reducers/Login";
import machineReducer from "./reducers/machine";
import operationReduce from "./reducers/operations";
import paginateReducer from "./reducers/paginate";
import pieceReducer from "./reducers/piece";
import treatmentsReducer from "./reducers/Treatment";
 


const REDUCERS =combineReducers({
    complaints:complainReducer,
    employees :loginReducer,
    paginate : paginateReducer,
    treatments:treatmentsReducer,
    Operation_EmpC:EmpcReducer,
    company:companyReducer,
    days_worked:days_workedReducer,
    machine:machineReducer,
    piece:pieceReducer,
    dataOperations: operationReduce,
    accessTables:accessReducer,
    empS:empS_Reducer
}) ;


const store = createStore(
    REDUCERS,{},applyMiddleware(thunk)
);
export default store 