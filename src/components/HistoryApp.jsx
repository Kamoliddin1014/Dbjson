import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function HistoryApp() {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/posts')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(elem =>(

              <tr>
                <th scope="row">{elem.id}</th>
                <td>{elem.name}</td>
                <td>{elem.surname}</td>
                <td>{elem.age}</td>
              </tr>
            )
            )
          }

        </tbody>
      </table>
      {/* {
        data.map ( 
          <table>
            <tr>
              <td key={data.id}></td>
              <td>{data.name}</td>
              <td>{data.surname}</td>
              <td>{data.age}</td>
            </tr>
          </table>
        )
      } */}
    </>
  );
}
