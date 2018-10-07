import React from 'react';
import PropTypes from 'prop-types'
import {TradeBuyInPrice} from '../style';

const TradeBuyInput = (props) =>{
    return (<TradeBuyInPrice>
        <div className="price">{props.label}</div>
        <input className="input" type="text"/>
        <div className="unitWrapper">
            <span className="unit">
            {props.type}
            </span>
        </div>
    </TradeBuyInPrice>);
}

TradeBuyInput.propTypes = {
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired
}

export default TradeBuyInput;
