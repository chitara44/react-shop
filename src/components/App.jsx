import '../styles/global.scss';
import '../components/Button.scss';
import NumberList from './Button'; 
import React, { useState, Component } from "react";
import PropTypes from 'prop-types';
// import styles from './styles.module.sass';

// Watch the Button tutorial
// http://react.school/ui/button

// Free React training
// http://react.school/join

// Free Material-UI template
// http://react.school/material-ui/templates

const numbers = [                          {id: 1, name: '01', isSelected: true}, {id: 2, name: '02', isSelected: true}, {id: 3, name: '03', isSelected: true}, {id: 4, name: '04', isSelected: true}, {id: 5, name: '05', isSelected: true}, {id: 6, name: '06', isSelected: false}, {id: 7, name: '07', isSelected: true}, {id: 8, name: '08', isSelected: true}, {id: 9, name: '09', isSelected: true},
   {id: 10, name: '10', isSelected: true},{id: 11, name: '11', isSelected: true},{id: 12, name: '12', isSelected: true},{id: 13, name: '13', isSelected: true},{id: 14, name: '14', isSelected: true},{id: 15, name: '15', isSelected: true},{id: 16, name: '16', isSelected: false},{id: 17, name: '17', isSelected: true},{id: 18, name: '18', isSelected: true},{id: 19, name: '19', isSelected: true},
   {id: 20, name: '20', isSelected: true},{id: 21, name: '21', isSelected: true},{id: 22, name: '22', isSelected: true},{id: 23, name: '23', isSelected: true},{id: 24, name: '24', isSelected: true},{id: 25, name: '25', isSelected: true},{id: 26, name: '26', isSelected: false},{id: 27, name: '27', isSelected: true},{id: 28, name: '28', isSelected: true},{id: 29, name: '29', isSelected: true},
   {id: 30, name: '30', isSelected: true},{id: 31, name: '31', isSelected: true},{id: 32, name: '32', isSelected: true},{id: 33, name: '33', isSelected: true},{id: 34, name: '34', isSelected: true},{id: 35, name: '35', isSelected: true},{id: 36, name: '36', isSelected: false},{id: 37, name: '37', isSelected: true},{id: 38, name: '38', isSelected: true},{id: 39, name: '39', isSelected: true},
   {id: 40, name: '40', isSelected: true},{id: 41, name: '41', isSelected: true},{id: 42, name: '42', isSelected: true},{id: 43, name: '43', isSelected: true}];
const superbal = [  {id: 1, name: '01',isSelected: true}, {id: 2, name: '02', isSelected: true}, {id: 3, name: '03', isSelected: true}, {id: 4, name: '04', isSelected: true}, {id: 5, name: '05', isSelected: true}, {id: 6, name: '06', isSelected: false}, {id: 7, name: '07', isSelected: true}, 
                    {id: 8, name: '08', isSelected: true}, {id: 9, name: '09', isSelected: true},   {id: 10, name: '10', isSelected: true},{id: 11, name: '11', isSelected: true},{id: 12, name: '12', isSelected: true},{id: 13, name: '13', isSelected: true},{id: 14, name: '14', isSelected: true},{id: 15, name: '15', isSelected: true},{id: 16, name: '16', isSelected: true}];
   export default function App() {
    return (
      <>
      <div>
          <h1>A grid to input baloto's number!</h1>
      </div>
      {/* <NumberList numbers={numbers} /> */}
      <NumberList numbers={superbal} />
      </>
    );
  }




