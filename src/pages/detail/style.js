import styled from 'styled-components';

export const Wrapper = styled.div`
    width:960px;
    margin: 50px auto;
`;

export const TradeWrapper = styled.div`
    display: -webkit-flex; 
    display:flex;
    flex-direction:row;
    background:#f7f7f7;
    border:1px solid rgb(226, 226, 226);
    padding:20px;
`;

export const TradeBuyIn = styled.div`
    flex:1;
    justify-content: flex-start;
`;

export const TradeBuyInTitle = styled.h3`
    font-weight:bold;
    font-size:14px;
    width:100%;
    height:50px;
    line-height:50px;
`;

export const TradeBuyInPrice = styled.div`
    display: flex;
    width:100%;
    height:50px;
    line-height:50px;
    .price{
        -webkit-box-align: center;
        align-items: center;
        flex-basis: 18%;
        text-align:left;
    }
    .input{
        -webkit-box-align: center;
        align-items: center;
        justify-content:center;
        height:30px;
        line-height:30px;
        margin-top:5px;
        flex-basis: 75%;
        border:1px solid rgb(226, 226, 226);
    }
    .unitWrapper{
        position:relative;
    }
    .unit{
        position:absolute;
        top:0px;
        right:10px;
        color:gray;
    }
`;

export const TradeBuyInPrecent = styled.div`
    width:100%;
    height:30px;
    line-height:30px;
    margin-left:80px;
    margin-bottom:4px;
    .active{
        color:rgb(245, 188, 0);
        border:1px solid rgb(245, 188, 0);
    }
    .item-precent{
        width:50px;
        height:25px;
        line-height:25px;
        text-align:center;
        cursor:pointer;
        background: #ffffff;
        display:inline-block;
        border:1px solid #e2e2e2;
    }
    .item-precent:nth-child(n+2){
        width:50px;
        height:25px;
        line-height:25px;
        text-align:center;
        margin-left:43.3px;
        cursor:pointer;
        background: #ffffff;
        display:inline-block;
        border:1px solid #e2e2e2;
    }
`;

export const TradeBuyInDealMoney = styled.div`
    width:100%;
    height:50px;
    line-height:50px;
`;

export const TradeBuyInSubmit = styled.div`
    width:50%;
    height:50px;
    line-height:50px;
    text-align:center;
    border:1px solid #e2e2e2;
    margin:0px auto;
    cursor:pointer;
    color:rgb(245, 188, 0);
    margin-right:86px;
`;

export const TradeBuyOut = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    justify-content: flex-start;
    border-left:1px solid #e2e2e2;
    padding-left:27px;
`;





