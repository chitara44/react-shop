import React from "react";
import styled from "styled-components";
import '../styles/global.scss';
import "./Button.scss";


const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};


const Button = styled.button`
background-color: ${(props) => theme[props.theme].default};
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
margin: 10px 0px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;
&:hover {
    background-color: ${(props) => theme[props.theme].hover};
}
&:disabled {
    cursor: default;
    opacity: 0.7;
}
`;

Button.defaultProps = {
    theme: "blue"
  };

  const ButtonToggle = styled(Button)`
  opacity: 0.7;  
  ${({ active }) => 
    active &&   
    `
    opacity: 0.3; 
    `}
    `;
    
    const Tab = styled.button`
    padding: 10px 30px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
    `}
    `;

var state = {count:0, sum:0, concatened:""}; 
    
const ExampleComponent = () => {
  
    function sayHello(name) {
      alert(`hello, ${name}`);
    }
    
    return (
      <button onClick={() => sayHello('James')}>Greet</button>
    );
  }

function clickeado (props) {
    const id = props.id;
    console.log(props);
    state.sum += props;
    state.count += 1;
    console.log(state.concatened);
    console.log(state.concatened.length);
    alert('Hello, ', id);
    state.concatened = (state.concatened.length > 0 ) ? state.concatened + ',' + props: props; 
    // elegidos = elegidos + {props.value.toString()};
    console.log(state.count);
    console.log(state.concatened);
    return <label value={state.count} ></label>
}


function Buttons(props){
    const id = props.id;
    // alert('props, ', id);
    console.log(id);
    return <button variant="outlined" value = {props.value} onClick={() => clickeado(props.id)}>{props.value}</button>;
    // return <button variant="outlined" value = {props.value} onClick={() => this.clickeado(e.target.value)}>{props.value}</button>;
    // return <button onClick={() => {
    //     const name = 'James';
    //     alert('Hello, ', props.value);
    //   }}>
    //     {props.value}
    //   </button>
    // return <button value="blue" onClick={e => changeColor(e.target.value)}>Color Change</button>;
}
  
function NumberList(props) {
const numbers = props.numbers;
const botones = numbers.map((number) =>
    <Buttons id={number.id} key ={number.id} value={number.name} />)
return (
    <ul>
    {botones}
    </ul>
);
}

export default NumberList;




// export default ExampleComponent;