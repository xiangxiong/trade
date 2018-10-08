import {BUYIN_PRECENT_ITEM,BUYOUT_PRECENT_ITEM} from './actionTypes';

export const buyInCurrentItem = (index) =>{
    return {
        type:BUYIN_PRECENT_ITEM,
        index:index
    }
};

export const buyOutCurrentItem = (index) =>{
    return {
        type:BUYOUT_PRECENT_ITEM,
        index:index
    }
};