import styled from 'styled-components';

export const Wrapper = styled.div`
    width:1200px;
    margin: 50px auto;
`;

export const TradeWrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export const TradeHeader = styled.div`
    display:flex;
    flex-direction:row;
    background-color:rgb(249, 249, 249);
    .active{
        font-size:80px;
        height:34px;
        line-height:34px;
        cursor:pointer;
        border: 1px solid rgb(240, 240, 240);
        background-color:rgb(249, 249, 249);
        color:rgb(245, 188, 0);
        padding:0px 17px;
        font-size:14px;
        font-weight:bold;
        border-bottom:none;
    }
    .default{
        font-size:80px;
        height:34px;
        line-height:34px;
        cursor:pointer;
        background-color:rgb(249, 249, 249);
        border:1px solid rgb(230, 230, 230);
        color:rgb(102, 102, 102);
        padding:0px 17px;
        font-size:14px;
        font-weight:bold;
    }
`;

export const TradeNavItem = styled.div``

export const TradeList = styled.div`
    border-color: rgb(230, 230, 230);
`;

export const TradeListHeader = styled.div`
    display:flex;
    flex-direction:row;
    height:30px;
    line-height:30px;
    width:100%;
    border: 1px solid rgb(240, 240, 240);
    border-bottom:none;
    margin:0 auto;
`

export const TradeListHeaderItem = styled.div`
    text-align:center;
    flex:1;
    color:rgb(153, 153, 153);
`

export const TradeListBody = styled.div`
    display:flex;
    flex-direction:row;
    height:30px;
    line-height:30px;
    width:100%;
    margin:0 auto;
    background:#ffffff;
    border: 1px solid rgb(240, 240, 240);
`

export const TradeListItem = styled.div`
    cursor:pointer;
    text-align:center;
    flex:1;
    color:rgb(51, 51, 51);

`