import './App.css';
import {getAllStudents} from './client';
import {Component} from 'react';
import { DatePicker } from 'antd';
import {
  Table 
} from 'antd';


class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    this.fetchAllStudents();
  }

  fetchAllStudents = () => {
    console.log('Fetching students...');
    getAllStudents()
      .then(res => res.json())
      .then(data => {
        console.log('Data received:', data);
        this.setState({students: data});
      })
      .catch(err => console.error('Error:', err));
  }

  render() {
      const {students} = this.state;
      if (students && students.length) {
        const columns = [
          {
            title: "Student ID",
            dataIndex: "id",
            key: "id"
          },
          {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName"
          },
          {
            title: "Last Name",
            dataIndex: "lastname",
            key: "lastname"
          },
          {
            title: "Gender",
            dataIndex: "gender",
            key: "gender"
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email"
          }
        ];

        return <Table
         dataSource={students}
         columns={columns}
          rowKey="id" />

      }
      return <h1>Hello Guys - Loading...</h1>
  }
}

export default App;
