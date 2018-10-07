import * as actionTypes from './actionTypes';
import axios from 'axios';
import {TRADE_DATA} from '.././../../common/config';

export const changeChecked = (index) =>{
    return {
        type:actionTypes.CLICK_CHECKED_ITEM,
        index:index
    };
}

const getList = (data) =>{
    return {
        type:actionTypes.GET_TRADE_ITEMS,
        data
    }
}

export const getTradeItems = () =>{
    return (dispatch)=>{
            axios.get('http://localhost:3000/api/tradeList.json')
            .then((res)=>{
                const data = res.data.data;
                dispatch(getList(data));
            })
            .catch(function (error) {
                const data = TRADE_DATA;
                dispatch(getList(data.data));
                console.log("异常:"+error+" 请启动3000端口查看.");
             });
    }
}
