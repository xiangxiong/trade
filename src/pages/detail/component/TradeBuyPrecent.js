import React,{Component} from 'react';
import {TradeBuyInPrecent} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store/';

class TradeBuyPrecent extends Component{
    
    getPrecentItems(data){
        const {handleMouseOver,type} = this.props;

        return data.map((item,key)=>{
            return  <span key={key} className={item.checked ? "active item-precent" : "item-precent"} onMouseOver={()=>handleMouseOver(key,type)}>{item.precent}</span>
        })
    }

    render(){
        const {BuyInItems,BuyOutItems,type} = this.props;
        const data = type === 'buyIn' ? BuyInItems : BuyOutItems;
        return (<TradeBuyInPrecent>
            {
                this.getPrecentItems(data)
            }
        </TradeBuyInPrecent>);
    }
}

const mapStateToProps = (state) =>{
    return {
        BuyInItems:state.detail.BuyInItems,
        BuyOutItems:state.detail.BuyOutItems
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        handleMouseOver(index,dataType) {
            dataType == "buyIn" ? dispatch(actionCreators.buyInCurrentItem(index)) : dispatch(actionCreators.buyOutCurrentItem(index));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TradeBuyPrecent);