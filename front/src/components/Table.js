import React from 'react';
import '../App.css'; // Add specific styling for Table if needed

const Table = ({ dataList, onEdit, onDelete }) => (
  <div className='tableContainer'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Batch No</th>
          <th>Drug Type</th>
          <th>Unit Measurement</th>
          <th>Production Date</th>
          <th>Expired Date</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dataList.length > 0 ? (
          dataList.map((el) => (
            <tr key={el._id}>
              <td>{el.name}</td>
              <td>{el.batchNo}</td>
              <td>{el.drugType}</td>
              <td>{el.unitMesurment}</td>
              <td>{new Date(el.productionDate).toLocaleDateString()}</td>
              <td>{new Date(el.expiredDate).toLocaleDateString()}</td>
              <td>{el.quantity}</td>
              <td>{el.unitPrice}</td>
              <td>
                <button className="btn btn-edit" onClick={() => onEdit(el)}>Edit</button>
                <button className="btn btn-delete" onClick={() => onDelete(el._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" style={{ textAlign: "center" }}>No data</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
