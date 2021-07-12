import React,{useState} from 'react'
import { Table } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


const Cards = (props) => {
    

  return (
    <Table>
      <thead>
        <tr>
          <th>Index</th>
          <th>TaskName</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>React</td>
          <td>Date</td>
          <td><FaEdit/> </td>
          <td><MdDelete/></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>React</td>
          <td>Date</td>
          <td><FaEdit/> </td>
          <td><MdDelete/></td>
        </tr>
      </tbody>
    </Table>
  );
}



export default Cards
