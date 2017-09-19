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
  background: rgba(0,107,143,1);
  background: -moz-linear-gradient(-45deg, rgba(0,107,143,1) 0%, rgba(91,187,219,1) 41%, rgba(0,50,66,1) 71%, rgba(0,0,0,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0,107,143,1)), color-stop(41%, rgba(91,187,219,1)), color-stop(71%, rgba(0,50,66,1)), color-stop(100%, rgba(0,0,0,1)));
  background: -webkit-linear-gradient(-45deg, rgba(0,107,143,1) 0%, rgba(91,187,219,1) 41%, rgba(0,50,66,1) 71%, rgba(0,0,0,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(0,107,143,1) 0%, rgba(91,187,219,1) 41%, rgba(0,50,66,1) 71%, rgba(0,0,0,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(0,107,143,1) 0%, rgba(91,187,219,1) 41%, rgba(0,50,66,1) 71%, rgba(0,0,0,1) 100%);
  background: linear-gradient(135deg, rgba(0,107,143,1) 0%, rgba(91,187,219,1) 41%, rgba(0,50,66,1) 71%, rgba(0,0,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#006b8f', endColorstr='#000000', GradientType=1 );
  box-shadow: 0px 1px 6px black;
  a {
    text-decoration: none;
    margin: 0 5px;
    color:white;
    &:visited {
      color: white;
    }
  }
  span {
    color: #3AA9EA;
  }
`;

class GlobalNav extends Component {



  render() {
    return (
      <CustomNav>
        <Link to="/">
          <h1>Jonathan J. Watson</h1>
        </Link>
        <div>
          <a href="/#Projects">Projects</a>
          <a href="/#resume">Resume</a>
        </div>
      </CustomNav>
    );
  }
}

export default GlobalNav;