import React,{useState} from 'react'
import { Table } from 'reactstrap';
import { IconButton } from '@material-ui/core';
import { DeleteIcon } from '@material-ui/icons/Delete';
import { EditIcon } from '@material-ui/icons/Edit';


const Cards = (props) => {
    

  return (
    <Table>
      <thead>
        <tr>
          {/* <th>Index</th>
          <th>TaskName</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th> */}

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>React</td>
          <td>Date</td>
          <td><IconButton aria-label="edit">
                <EditIcon />
            </IconButton></td>
          <td><IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>React</td>
          <td>Date</td>
          <td><IconButton aria-label="edit">
                <EditIcon />
            </IconButton></td>
          <td><IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </td>
        </tr>
      </tbody>
    </Table>
  );
}



export default Cards
