import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {Redirect} from 'react-router-dom';

const CustomNav = styled.div`
  width: 95%;
  font-family: Lato;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.05% 2.5%;
  background: rgba(5,31,48,1);
  background: -moz-linear-gradient(45deg, rgba(5,31,48,1) 0%, rgba(125,204,254,1) 47%, rgba(185,227,255,1) 67%, rgba(5,31,48,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(5,31,48,1)), color-stop(47%, rgba(125,204,254,1)), color-stop(67%, rgba(185,227,255,1)), color-stop(100%, rgba(5,31,48,1)));
  background: -webkit-linear-gradient(45deg, rgba(5,31,48,1) 0%, rgba(125,204,254,1) 47%, rgba(185,227,255,1) 67%, rgba(5,31,48,1) 100%);
  background: -o-linear-gradient(45deg, rgba(5,31,48,1) 0%, rgba(125,204,254,1) 47%, rgba(185,227,255,1) 67%, rgba(5,31,48,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(5,31,48,1) 0%, rgba(125,204,254,1) 47%, rgba(185,227,255,1) 67%, rgba(5,31,48,1) 100%);
  background: linear-gradient(45deg, rgba(5,31,48,1) 0%, rgba(125,204,254,1) 47%, rgba(185,227,255,1) 67%, rgba(5,31,48,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#051f30', endColorstr='#051f30', GradientType=1 );
  box-shadow: 0px 1px 6px black;
  a {
    text-decoration: none;
    margin: 0 5px;
    color:white;
    &:visited {
      color: white;
    }
  }
  h3 {
      color:white;
  }
  span {
    color: #3AA9EA;
  }
`;

class GlobalNav extends Component {



  render() {
    return (
      <CustomNav>
      
          <h3>Copyright 2017</h3>
        <div>
          <a href="/#Projects">Projects</a>
          |
          <a href="/#resume">Resume</a>
          |
          <a href="/#contact">Contact</a>
        </div>
      </CustomNav>
    );
  }
}

export default GlobalNav;