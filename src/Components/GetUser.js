import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class GetUser extends Component {
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
          isLoaded: true, 
          items: json.result,
        })
      })
  }

  render(){
    const { items } = this.state;
    // var department = [];
    // var uniqDept = [];
    // var uniqDeptStr = [];
    // var name = [];
    // var number = [];
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
      // {
      //   expander: true,
      //   Header: () => <strong>More</strong>,
      //   width: 65,
      //   Expander: ({ isExpanded, ...rest }) =>
      //     <div>
      //       {isExpanded
      //         ? <span>&#x2299;</span>
      //         : <span>&#x2295;</span>}
      //     </div>,
      //   style: {
      //     cursor: "pointer",
      //     fontSize: 25,
      //     padding: "0",
      //     textAlign: "center",
      //     userSelect: "none"
      //   },
      // }
    ];
    // const deptCol = [
    //   {
    //     Header: "Department",
    //     accessor: "department"
    //   }
    // ]

    // items.forEach((item) => {
    //     department.push(item.department);
    //     name.push(item.name);
    //     number.push(item.number);
    // });

    // console.log(items);

    // var deptNum = 0;
    // var prevDepartmentCheck;
    // for (var i = 0; i < department.length; i++) {
    //   var check = department[i];
    //   if (check !== prevDepartmentCheck) {
    //     prevDepartmentCheck = check;
    //     uniqDept.push(items[i]);
    //     uniqDeptStr.push(department[i]);
    //     deptNum++;
    //   }
    // }

    // console.log(department);
    // console.log(deptNum);
    // console.log(uniqDept);
    // console.log(uniqDeptStr);

    // var arrList = [];
    // var prevCheck;
    // for (var i = 0; i < items.length; i++) {
    //   var check = items[i].department;
    //   console.log(department[i]);
    //   if ( check !== prevCheck) {
    //     prevCheck = check;
    //     console.log(prevCheck);
    //     arrList.push(check);
    //     console.log(arrList);
    //   }
    // }
    return (
      <div style={{padding:"20px"}}>
        <ReactTable
          data = {items}
          columns = {columns}
          filterable = {true}
          defaultPageSize = {10}
          className="-striped -highlight"
          // SubComponent={ row => {
          //   return (
          //     <div style={{padding:"20px"}}>
          //       <ReactTable 
          //         data = {items}
          //         columns = {columns}
          //         defaultPageSize = {10}
          //         className="-striped -highlight"
          //       />
          //     </div>
          //   );
          // }}
        />
      </div>
    )
  }
} 
