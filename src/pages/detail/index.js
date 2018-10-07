import React,{Component} from 'react';
import {
    Wrapper,
    TradeBuyIn,
    TradeBuyOut,
    TradeWrapper,
    TradeBuyInTitle,
    TradeBuyInSubmit
} from './style';
import TradeBuyInput from './component/TradeBuyInput';
import TradeBuyPrecent from './component/TradeBuyPrecent';
import {withRouter} from 'react-router-dom';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {WS_CONNECTION_STRING} from '../../common/config';

class Detail extends Component{

    constructor(props){
        super(props);
        this.handleTradeSubmit = this.handleTradeSubmit.bind(this);
    }

    handleTradeSubmit(){
        const ws = new ReconnectingWebSocket(WS_CONNECTION_STRING);
        ws.addEventListener('open', () => {
            ws.send('hello world!');
        });
    }

    render(){
        const name = this.props.match.params.name;

        return (
            <Wrapper>
                <TradeWrapper>
                    <TradeBuyIn>
                        <TradeBuyInTitle>买入{name}</TradeBuyInTitle>
                        <TradeBuyInput label={"价格:"} type={"ETH"}/>
                        <TradeBuyInput label={"金额:"} type={name}/>
                        <TradeBuyPrecent/>
                        <TradeBuyInput label={"成交金额:"} type={"ETH"}/>
                        <TradeBuyInSubmit onClick={this.handleTradeSubmit}>交易</TradeBuyInSubmit>
                    </TradeBuyIn>
                    <TradeBuyOut>
                        <TradeBuyInTitle>买入{name}</TradeBuyInTitle>
                        <TradeBuyInput label={"价格:"} type={"ETH"}/>
                        <TradeBuyInput label={"金额:"} type={name}/>
                        <TradeBuyPrecent/>
                        <TradeBuyInput label={"成交金额:"} type={"ETH"}/>
                        <TradeBuyInSubmit onClick={this.handleTradeSubmit}>交易</TradeBuyInSubmit>
                    </TradeBuyOut>
                </TradeWrapper>
            </Wrapper>
        )
    }
}

export default withRouter(Detail);