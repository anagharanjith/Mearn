import React from 'react'
import useFetch from '../hooks/useFetch'

function AllUsers() {
    const user = useFetch('https://jsonplaceholder.typicode.com/users')
    console.log(user);
  return (
    <>
    <div className="text-center text-warning fs-5 fw-bolder">All User List</div>
    <table className="table shadow m-3">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address <br /> (street,city,zipcode)</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company Name</th>
            </tr>
        </thead>
        <tbody>
        {
                  user?.length>0?user.map((users,index)=>(
                    <tr key={index}>
                        <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.address.street},<br />{users.address.city},<br />{users.address.zipcode}</td>
                      <td>{users.phone}</td>
                      <td>{users.website}</td>
                      <td>{users.company.name}</td>
                      <td></td>
                    </tr>
                  )): <tr className='text-danger fs-4 fw-bolder'>Nothing to display!!!</tr>
                }
        </tbody>
    </table>
    </>
  )
}

export default AllUsers