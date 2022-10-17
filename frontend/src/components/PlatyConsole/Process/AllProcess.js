import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import Header from '../Header';

const SList = props => (
  <tr>
                 <td>{props.data.name}</td>
                  <td>{props.data.pid}</td>
    </tr>
)

export default class AllProcesses extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : []
    };
  }

    componentDidMount() {
        axios.get('http://localhost:5000/allProcesses')
            .then(response => {
                this.setState({
                    allProcesses : response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    troublesListf() {
       // filter(book => book.shelf === shelf)
        return this.state.allProcesses.map(
            function(data, i) {
                return <SList data = {data} key={i} />;
            }
        )
    }

	render() {
		return (
			<div><Header/>
            <center><h1>All Processes</h1></center>
            <h2>
           <table className = 'table table-striped' style={{marginTop: 20}}>
                      <thead>
                          <tr>
                              <th> Name </th>
                              <th> PID </th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.troublesListf()}
                      </tbody>
              </table>
              </h2>
			</div>
		)
	}
}
