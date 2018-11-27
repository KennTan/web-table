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
    var sortedDepartment = [];
    var sortedName = [];
    var sortedNumber = [];
    var unsortedDepartment = [];
    var unsortedName = [];
    var unsortedNumber = [];
    var employeeDepart = [];
    const itemJsx = [
      name,
      department,
      number
    ];
  
    console.log(items);
    console.log(itemJsx);

    items.forEach((item) => {
        department.push(item.department);
        name.push(item.name);
        number.push(item.number);
        unsortedDepartment.push(item.department);
        unsortedName.push(item.name);
        unsortedNumber.push(item.number);
    });

    
    department.sort();
    name.sort();
    number.sort();

    var departNum = 0;
    var prevDepartmentCheck;
    for (var i = 0; i < department.length; i++) {
      var check = department[i];
      if (check !== prevDepartmentCheck) {
        prevDepartmentCheck = check;
        sortedDepartment.push(check);
        departNum++;
      }
    }
    
    console.log(sortedDepartment);
    console.log(departNum);

    var nameNum = 0;
    var prevNameCheck;
    for (var i = 0; i < name.length; i++) {
      var check = name[i];
      if (check !== prevNameCheck) {
        prevNameCheck = check;
        sortedName.push(check);
        nameNum++;
      }
    }
    
    console.log(sortedName);
    console.log(nameNum);

    var numberNum = 0;
    var prevNumberCheck;
    for (var i = 0; i < number.length; i++) {
      var check = number[i];
      if (check !== prevNumberCheck) {
        prevNumberCheck = check;
        sortedNumber.push(check);
        numberNum++;
      }
    }
    
    console.log(sortedNumber);
    console.log(numberNum);
    console.log(unsortedName);
    
    for (var i = 0; i < sortedName.length; i++) {
      var b = 0;
      var deptString = "";

      for (var a = 0; a < name.length; a++) {
        console.log("looped");
        if (sortedName[i] === unsortedName[a]) {
          // if (a === 0) {
          //   deptString = deptString + " " + unsortedDepartment[a];
          // } else {
          deptString = deptString +  ", " + unsortedDepartment[a];
          }
        //}
      }
      employeeDepart.push(deptString);
      b++;
    }

    // for (var i = 0; i < employeeDepart.length; i++) {
    //   employeeDepart[i] = "{`" + employeeDepart[i] + "`}"; 
    // }

    console.log(employeeDepart);
    console.log(sortedItemJsx);
    console.log(JSON.stringify(sortedItemJsx));

    const sortedItemJsx = [
      {
      "name": sortedName[0],
      "department": employeeDepart[0],
      "number": sortedNumber[0]
      },
      {
        "name": sortedName[1],
        "department": employeeDepart[1],
        "number": sortedNumber[1]
      },
      {
        "name": sortedName[2],
        "department": employeeDepart[2],
        "number": sortedNumber[2]
      },
      {
        "name": sortedName[3],
        "department": employeeDepart[3],
        "number": sortedNumber[3]
      },
      {
        "name": sortedName[4],
        "department": employeeDepart[4],
        "number": sortedNumber[4]
      },
    ]
    
    return (
      <div className ="GetUser">
        <ReactTable
          data = {sortedItemJsx}
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
