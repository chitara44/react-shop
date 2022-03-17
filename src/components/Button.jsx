import React,{ useState} from "react";
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

var state = {count:0, sum:0, concatened:"", selected: false}; 

function reorder(numbers){
    if(numbers.length > 0){
        console.log(numbers.length);
    } 
    return state.concatened;
}

function quitar_Reordenar(id) {
var numberslist = state.concatened.split(',').sort();
console.log(numberslist);
var founded = numberslist.find(id);
var exist = numberslist.pop(id);
alert('Hello, unselected2');
console.log('exist', exist);
console.log(numberslist);
return founded;
}
    
function clickeado (props) {
    const id = props.id;
    console.log(props);
    state.sum += props;
    state.count += 1;
    // console.log('concatenated length', state.concatened.length);
    console.log('antes', state);
    state.selected = (state.selected) ? false:true;
    if (state.selected){ 
        state.concatened = (state.concatened.length > 0 ) ? state.concatened.toString() + ',' + props.toString(): props.toString(); 
        alert('Hello, selected');
    }
    else
    {
        alert('Hello, unselected');
        console.log('valor Id',id);
        state.concatened = (state.concatened.length > 0 ) ? quitar_Reordenar(id) : "";
    }
    console.log(state);
    // console.log(state.concatened);
    return (
        <div>
            <label value={state.concatened} >{state.concatened}</label>
        </div>
        );
    }

// function seleccionados


function Buttons(props){
    const id = props.id;
    console.log('Buttons function', id);
    return (
        <ul>
            <button theme="pink" variant="outlined" value = {props.value} onClick={() => clickeado(props.id)}>{props.value}</button> 
        </ul>
    ) 
}

function NumberList(props) {
    const numbers = props.numbers;
    const botones = numbers.map((number) =>
    <Buttons id={number.id} key ={number.id} value={number.name} />)
    // console.log({botones});
    alert("hey there!");
    const [state, setState] = useState(true);
    const label = state.concatened;
return ( 
     <> 
    {botones}
    <p>
        {label}
    </p>
     </> 
);
}

export default NumberList;




// export default ExampleComponent;