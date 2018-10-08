import {combineReducers} from 'redux';
import {reducer as tradeReducer} from '../pages/trade/store';
import {reducer as detailReducer} from '../pages/detail/store';

const reducer = combineReducers({
    trade:tradeReducer,
    detail:detailReducer
});

export default reducer;