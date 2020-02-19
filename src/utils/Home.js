import React, { Component } from 'react';
import API from './api';
// import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends Component {
  state = {
    users: []
  }

  // search() {
  //   return axios.get('https://randomuser.me/api/?results=20');
  // }

  // componentDidMount() {
  //   this.searchEmployee();
  // }

  // searchEmployee = query => {
  //   API.search(query)
  //     .then(res => 
  //       // console.log(res.data), 
  //       this.setState(() => ({ result: res.data.results })))
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    // fetch(url, {
    //   method: "GET"
    // }).then(response => response.json())
    //   .then(users => {
    //     this.setState({ users: users })
    //   })


    API.search()
      .then(({data:{results}}) => {
       // console.log(res)
        //let { data } = res;
        let users = results.map(person => {
          return {
            id: person.id.value || 'N/A',
            name: person.name.first + person.name.last,
            address: person.location.city,
            email: person.email,
            phone: person.phone,
            website: person.picture.thumbnail
          }
        })
        this.setState({ users })
      })
  }

  deleteRow(id) {
    const index = this.state.users.findIndex(user => {
      return user.id === id
    })
    console.log("index", index)
  }

  render() {

    const columns = [
      {
        Header: "ID",
        accessor: "id",
        filterable: true,
        style: { textAlign: "center" },
        width: 300
      },
      {
        Header: "NAME",
        accessor: "name",
        filterable: true,
        textAlign: "center",
        style: { textAlign: "center" },
        width: 300
      },
      {
        Header: "Email",
        accessor: "email",
        style: { textAlign: "center" },
      },
      {
        Header: "PHONE",
        accessor: "phone",
        style: { textAlign: "center" },
      },
      {
        Header: "THUMBNAIL",
        Cell: props => {
          console.log(props)
          return (
            <img src={props.value} />
          )
        },
        accessor: "website",
        style: { textAlign: "center" },
        width: 200
      },
      {
        Header: "CITY",
        accessor: "address",
        style: { textAlign: "center" },
      },
      {
        Header: "DELETE",
        Cell: props => {
          return (
            <button style={{ backgroundColor: "green", color: "white" }}
              onClick={() => {
                this.deleteRow(props.original.id);
              }}
            >Delete</button>)
        },
        style: { textAlign: "center" },
        width: 200
      },

    ]

    return (
      <ReactTable
        columns={columns}
        data={this.state.users}
        showPaginationTop
      >

      </ReactTable>
    );
  }
}

export default App;




