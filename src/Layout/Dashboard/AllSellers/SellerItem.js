import React from 'react';

const SellerItem = ({currentUser, index}) => {
    const {email, name} = currentUser
    return (
        <tr>
          <th>{index + 1}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td><button className='btn btn-primary btn-sm'>Delete</button></td>
        </tr> 
    );
};

export default SellerItem;