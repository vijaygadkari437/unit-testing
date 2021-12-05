import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Counter from "../counter";

// Enzyme.configure({adapter: new EnzymeAdapter()});

Enzyme.configure({ adapter: new Adapter() });

const setUp =()=>(shallow(<Counter />));
const getByTestAttr= (wrapper,val)=>(wrapper.find(`[data-test="${val}"]`));

test('render without errors',()=>{
    const wrapper= setUp();
    const counterWrapper= getByTestAttr(wrapper,'counter-wrapper');
    expect(counterWrapper.length).toBe(1);
});

test('render increment btn',()=>{
    const wrapper=setUp();
    const incBtn=getByTestAttr(wrapper,'incre-btn');
    expect(incBtn.length).toBe(1);
});

test('counter display starts at 0',()=>{
    const wrapper=setUp();
    const count=getByTestAttr(wrapper,'counter-display').text();
    expect(count).toBe("0");
});

test('increment by 1',()=>{
    const wrapper=setUp();
    const incBtn=getByTestAttr(wrapper,'incre-btn');
    incBtn.simulate('click');

    const count=getByTestAttr(wrapper,'counter-display').text();
    expect(count).toBe("1");
});

// test('render decrement btn',()=>{
//     const wrapper=setUp();
//     const decBtn=getByTestAttr(wrapper,'decre-btn');
//     expect(decBtn.length).toBe(1);
// });

// test('decrement by 1',()=>{
//     const wrapper=setUp();
//     const incBtn=getByTestAttr(wrapper,'decre-btn');
//     incBtn.simulate('click');

//     const count=getByTestAttr(wrapper,'counter-display').text();
//     expect(count).toBe("1");
// });