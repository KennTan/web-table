import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class NUSBlk71 extends Component {
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
        'projectid': '46b34b2b-ba11-4bac-8af2-11844dcb64cd',
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
            <button>
              Delete
            </button>
          </div>
          )
        },
        filterable: false,
        sortable: false,
        style: {
          padding: "5",
          textAlign: "center",
        },
      }
    ];

    return (
      <div style={{padding:"10px"}}>
      <div class="col-lg-">
					<header>
						<center><strong><font size="30">NUS Blk 71</font></strong></center>	
					</header>
				</div>
        <ReactTable
          data = {items}
          columns = {columns}
          filterable = {true}
          defaultPageSize = {10}
          className="-striped -highlight"
          noDataText="No data found"
        />
      </div>
    )
  }
} 
