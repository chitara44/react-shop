import '../styles/global.scss';
import React, { useState } from "react";
import styled from "styled-components";

// Watch the Button tutorial
// http://react.school/ui/button

// Free React training
// http://react.school/join

// Free Material-UI template
// http://react.school/material-ui/templates

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

var numeros = null;

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

const numTypes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
function clickMe() {
  const [active, setActive] = useState(numTypes[0]);
  return (
    <div>
      {numTypes.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

const types = ["Cash", "Credit Card", "Bitcoin"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

export default function App() {
    return (
      <>
      <div>
          <h1>A grid to Introduce the numbers!</h1>
      </div>
        
        <div>
          <Button theme="pink" onClick={clickMe}>01</Button>
          <Button theme="pink" onClick={clickMe}>02</Button>
          <Button theme="pink" onClick={clickMe}>03</Button>
          <Button theme="pink" onClick={clickMe}>04</Button>
          <Button theme="pink" onClick={clickMe}>05</Button>
          <Button theme="pink" onClick={clickMe}>06</Button>
          <Button theme="pink" onClick={clickMe}>07</Button>
          <Button theme="pink" onClick={clickMe}>08</Button>
          <Button theme="pink" onClick={clickMe}>09</Button>
          <Button theme="pink" onClick={clickMe}>10</Button>
        </div>
        <div>
          <Button theme="pink" onClick={clickMe}>11</Button>
          <Button theme="pink" onClick={clickMe}>12</Button>
          <Button theme="pink" onClick={clickMe}>13</Button>
          <Button theme="pink" onClick={clickMe}>14</Button>
          <Button theme="pink" onClick={clickMe}>15</Button>
          <Button theme="pink" onClick={clickMe}>16</Button>
          <Button theme="pink" onClick={clickMe}>17</Button>
          <Button theme="pink" onClick={clickMe}>18</Button>
          <Button theme="pink" onClick={clickMe}>19</Button>
          <Button theme="pink" onClick={clickMe}>20</Button>
        </div>
        <div>
          <Button theme="pink" onClick={clickMe}>21</Button>
          <Button theme="pink" onClick={clickMe}>22</Button>
          <Button theme="pink" onClick={clickMe}>23</Button>
          <Button theme="pink" onClick={clickMe}>24</Button>
          <Button theme="pink" onClick={clickMe}>25</Button>
          <Button theme="pink" onClick={clickMe}>26</Button>
          <Button theme="pink" onClick={clickMe}>27</Button>
          <Button theme="pink" onClick={clickMe}>28</Button>
          <Button theme="pink" onClick={clickMe}>29</Button>          
          <Button theme="pink" onClick={clickMe}>30</Button>
        </div>        
        <div>
          <Button theme="pink" onClick={clickMe}>31</Button>
          <Button theme="pink" onClick={clickMe}>32</Button>
          <Button theme="pink" onClick={clickMe}>33</Button>
          <Button theme="pink" onClick={clickMe}>34</Button>
          <Button theme="pink" onClick={clickMe}>35</Button>
          <Button theme="pink" onClick={clickMe}>36</Button>
          <Button theme="pink" onClick={clickMe}>37</Button>
          <Button theme="pink" onClick={clickMe}>38</Button>
          <Button theme="pink" onClick={clickMe}>39</Button>
          <Button theme="pink" onClick={clickMe}>40</Button>
        </div>
        <div>
          <Button theme="pink" onClick={clickMe}>41</Button>
          <Button theme="pink" onClick={clickMe}>42</Button>
          <Button theme="pink" onClick={clickMe}>43</Button>
        </div>        
        <a href="https://react.school" target="_blank">
          <Button id="element" ></Button>
        </a>
        <ToggleGroup />

      </>
    );
  }
