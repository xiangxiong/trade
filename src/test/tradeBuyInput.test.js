import React from 'react';
import TradeBuyInput from '../pages/detail/component/TradeBuyInput';
import renderer from 'react-test-renderer';

test('Show Input',()=>{
    const component = renderer.create(
        <TradeBuyInput label="test" type="bnb"></TradeBuyInput>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});