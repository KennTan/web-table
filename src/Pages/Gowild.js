import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Gowild extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount(){

    const param = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        'projectid': '8af27228-b960-4d9b-be44-8b82fb71b14a',
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
    const columns = [
      {
        Header: () => <strong>Name</strong>,
        accessor: "name"
      },
      {
        Header: () => <strong>Department</strong>,
        accessor: "department"
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
        Cell: props => {
          return (
            <div>
            <button class="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
          )
        },
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
						<center><h1>Gowild</h1></center>	
					</header>
          <div style={{padding:"10px"}}>
            <center>
              <button class="btn btn-primary" style={{marginRight:"5px"}}>Add</button>
              <button class="btn btn-success" style={{marginLeft:"5px"}}>Edit</button>
            </center>
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
