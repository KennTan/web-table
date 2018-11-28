import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class GetUser extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      sortedItems: [],
      isLoaded: false,
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
          isLoaded: true, 
          items: json.result,
        })
      })
  }

  render(){

    const { items } = this.state;
    var department = [];
    var name = [];
    var number = [];

    items.forEach((item) => {
        department.push(item.department);
        name.push(item.name);
        number.push(item.number);
    });
    
    return (
      <div className ="GetUser">
        <ReactTable
          data = {items}
          columns = {[
            {
              Header: "Name",
              accessor: "name",
            },
            {
              Header: "Department",
              accessor: "department",
              style: {overflow: "visible"},
              maxWidth: 200
            },
            {
              Header: "Number",
              accessor:"number"
            }
          ]}
          defaultPageSize = {10}
          className="-striped -highlight"
        />
        
      </div>
    )
  }
} 
