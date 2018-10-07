import * as actionTypes from './actionTypes';

const defaultState ={
    navItems:[{
        key:0,
        title:'自选',
        checked:false
    },{
        key:1,
        title:'BNB市场',
        checked:true
    },{
        key:2,
        title:'BTC市场',
        checked:false
    },{
        key:3,
        title:'ETH市场',
        checked:false
    },{
        key:4,
        title:'USDT市场',
        checked:false
    }],
    list:[]
};


const getState = (state) =>{
    return JSON.parse(JSON.stringify(state))
}

const allItemsUnChecked = (items) =>{
    return  items.map((item)=>{
            item.checked = false;
        });
}

const checkedCurrentItem = (index,items) =>{
   return items[index].checked = true;
}

export default (state = defaultState , action)=>{
    const newState = getState(state);
    switch(action.type){
        case actionTypes.CLICK_CHECKED_ITEM:
            allItemsUnChecked(newState.navItems);
            checkedCurrentItem(action.index,newState.navItems);
            return newState;
        case actionTypes.GET_TRADE_ITEMS:
            newState.list = action.data;
            return newState;
        default:
            return state;
    }
}

