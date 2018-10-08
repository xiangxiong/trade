import {BUYIN_PRECENT_ITEM,BUYOUT_PRECENT_ITEM} from './actionTypes';

const defaultState = {
    BuyInItems:[
        {precent:"25%",checked:false},
        {precent:"50%",checked:false},
        {precent:"75%",checked:false},
        {precent:"100%",checked:false}
    ],
    BuyOutItems:[
        {precent:"25%",checked:false},
        {precent:"50%",checked:false},
        {precent:"75%",checked:false},
        {precent:"100%",checked:false}
    ]
}

export default (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case BUYIN_PRECENT_ITEM:
            allItemsUnChecked(newState.BuyInItems);
            newState.BuyInItems[action.index].checked = true
            return newState;
        case BUYOUT_PRECENT_ITEM:
            allItemsUnChecked(newState.BuyOutItems);
            newState.BuyOutItems[action.index].checked = true;
            return newState;
    }
    return state;
}

const allItemsUnChecked = (items)=>{
    items.map((item)=>{
        item.checked = false;
    });
}