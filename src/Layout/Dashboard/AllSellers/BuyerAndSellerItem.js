import React from 'react';

const SellerItem = ({currentUser, index, setUserEmail, setOpenModal}) => {
    const {email, name} = currentUser;
    const handleDelete = (email) => {
      setUserEmail(email)
      setOpenModal(true)
    }
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <label
            onClick={() => handleDelete(email)}
            htmlFor="delete-modal-confirm"
            className="btn btn-primary btn-sm"
          >
            Delete
          </label>
        </td>
      </tr>
    );
};

export default SellerItem;