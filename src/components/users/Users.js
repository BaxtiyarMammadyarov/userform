import React from 'react'
import "./style.css"
import { useState, useEffect } from 'react'
function Users({ list, setList }) {
  const [val, setVal] = useState();
  return (
    <div className='table-div'>
      <div className='search-div' ><input type={"text"} onChange={(e) => setVal(e.target.value)} /></div>
      <div className='search-div'  >
        <table className='table'>
          <thead>
            <tr >
              <th>id</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Password</th>
            </tr>

          </thead>

          <tbody>
            {
              list?.filter(itm=>val?itm.fullname.includes(val):true).map((itm) =>
              (
                <tr className='tr' key={itm.id}>
                  <td>{itm.id}</td>
                  <td>{itm.fullname}</td>
                  <td>{itm.email}</td>
                  <td>{itm.password}</td>
                </tr>)


              )
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default Users
