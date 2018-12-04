import React, { Component } from 'react';
import Edit from './EditModal';
import Delete from './DeleteModal';
import Add from './AddModal';

import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Table extends Component {
  constructor(){
    super();
    this.state = {
			items: [],
		}
	}
	
  componentDidMount(){
		const projectID = this.props.projectID;
    const param = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        'projectid': projectID
      }),
      method: "POST"
    }

    fetch('https://gw-shoulderpad-dot-gowildsg-main-server.appspot.com/contacts/contacts', param)
    .then(result => result.json())
       .then(json => {
        this.setState({
          items: json.result,
        })
      })
	}
	
  render(){
		const { items } = this.state;
		const company = this.props.company;
    const columns = [
			{
        Header: () => <strong>Name</strong>,
				accessor: "name",
      },
      {
        Header: () => <strong>Department</strong>,
				accessor: "department",
      },
      {
        Header: () => <strong>Number</strong>,
				accessor:"number",
        filterable: false,
        sortable: false,
        width: 150
      },
      {
        Header: () => <strong>Delete</strong>,
        width: 85,
        Cell: props => { return <Delete/> },
        filterable: false,
        sortable: false,
        style: {
          textAlign: "center",
        }
			},
			{
        Header: () => <strong>Edit</strong>,
        width: 85,
        Cell: props => { return <Edit/> },
				filterable: false,
        sortable: false,
        style: {
          textAlign: "center",
        },
      }
    ];

    return (
      <div style={{paddingTop:"10px", paddingLeft:"50px", paddingRight: "50px", paddingBottom:"20px"}}>
				<div class="col-lg-">
					<header>
						<center><h1>{company}</h1></center>	
					</header>
          <div style={{paddingBottom:"10px"}}>
            <Add/>
          </div>
				</div>
        <ReactTable
          data = {items}
          columns = {columns}
          filterable = {true}
          defaultPageSize = {8}
          className="-striped -highlight"
          noDataText="No data found"
        />
      </div>
    )
  }
} 
