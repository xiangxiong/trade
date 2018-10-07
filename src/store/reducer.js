import {combineReducers} from 'redux';
import {reducer as tradeReducer} from '../pages/trade/store'

const reducer = combineReducers({
    trade:tradeReducer
});

export default reducer;