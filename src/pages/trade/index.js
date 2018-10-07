import React,{Component} from 'react';
import {
    Wrapper,
    TradeList,
    TradeNavItem,
    TradeHeader,
    TradeListHeader,
    TradeListHeaderItem,
    TradeListBody,
    TradeListItem
} 
from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';

class Trade extends Component{

    getNavItems(){
        const {navItems,handleClickTab} = this.props;
        
        return navItems.map((item,key)=>{
            return <TradeNavItem key={item.key} onClick={()=>handleClickTab(key)} className={item.checked ? "active" : "default"}>
                        {this.loadIcon(item.key)} {item.title}
                   </TradeNavItem>
        });
    }

    loadIcon(index){
        return index === 0 ? <i className="iconfont">&#xe84e;</i> : "";
    }

    getTradeList(){
        if(this.props.list.length){
           return this.props.list.map((item)=>{
                return <TradeListBody key={item.quoteAssetName}>
                            <TradeListItem><i className="iconfont" style={{position:"relative",right:"25px"}}>&#xe84e;</i> <Link to={'/detail/'+item.symbol}>{item.symbol}</Link></TradeListItem>
                            <TradeListItem>{item.quoteAssetName}</TradeListItem>
                            <TradeListItem>{item.tradedMoney}</TradeListItem>
                            <TradeListItem>{item.baseAssetUnit}</TradeListItem>
                            <TradeListItem>{item.baseAssetName}</TradeListItem>
                            <TradeListItem>{item.baseAsset}</TradeListItem>
                            <TradeListItem>{item.tickSize}</TradeListItem>
                       </TradeListBody>
             })
        }
    }

    render(){
        return (
            <Wrapper>
                <TradeHeader>
                    {this.getNavItems()}
                </TradeHeader>
                <TradeList>
                     <TradeListHeader>   
                            <TradeListHeaderItem>市场</TradeListHeaderItem>
                            <TradeListHeaderItem>币种</TradeListHeaderItem>
                            <TradeListHeaderItem>最新价</TradeListHeaderItem>
                            <TradeListHeaderItem>24h涨跌</TradeListHeaderItem>
                            <TradeListHeaderItem>24h最高价</TradeListHeaderItem>
                            <TradeListHeaderItem>24h最低价</TradeListHeaderItem>
                            <TradeListHeaderItem>24h成交量</TradeListHeaderItem>
                    </TradeListHeader>
                    {this.getTradeList()}
                </TradeList>
            </Wrapper>
        )
    }
    
    componentDidMount(){
        this.props.getTradeList();
    }
}

const mapStateToProps = (state)=>{
    return {
        checked:state.trade.checked,
        navItems:state.trade.navItems,
        list:state.trade.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleClickTab(index) {
            dispatch(actionCreators.changeChecked(index))
        },
        getTradeList(){
            dispatch(actionCreators.getTradeItems());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Trade) ;