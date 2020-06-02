import { combineReducers } from 'redux';
import expenseReducer from './components/ExpenseEntries/expenseReducer';
import incomeReducer from './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
    expense: expenseReducer,
    income: incomeReducer
});

export default rootReducer;

//combine expenseReducer and incomeReducer, because the store ultimately only accepts one reducer.