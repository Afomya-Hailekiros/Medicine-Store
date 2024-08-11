import React from 'react';
import { MdClose } from 'react-icons/md';
import '../App.css';

const Form = ({ formData, handleOnChange, handleSubmit, closeForm }) => (
  <div className="addContainer">
    <form onSubmit={handleSubmit}>
      <div className="close-btn" onClick={closeForm}><MdClose /></div>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleOnChange} />
          <label htmlFor="batchNo">Batch No: </label>
          <input type="text" id="batchNo" name="batchNo" value={formData.batchNo} onChange={handleOnChange} />
          <label htmlFor="drugType">Drug Type: </label>
          <input type="text" id="drugType" name="drugType" value={formData.drugType} onChange={handleOnChange} />
          <label htmlFor="unitMesurment">Unit Measurement: </label>
          <input type="text" id="unitMesurment" name="unitMesurment" value={formData.unitMesurment} onChange={handleOnChange} />
        </div>
        <div className="form-column">
          <label htmlFor="productionDate">Production Date: </label>
          <input type="date" id="productionDate" name="productionDate" value={formData.productionDate} onChange={handleOnChange} />
          <label htmlFor="expiredDate">Expired Date: </label>
          <input type="date" id="expiredDate" name="expiredDate" value={formData.expiredDate} onChange={handleOnChange} />
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleOnChange} />
          <label htmlFor="unitPrice">Unit Price: </label>
          <input type="number" id="unitPrice" name="unitPrice" value={formData.unitPrice} onChange={handleOnChange} />
        </div>
      </div>
      <button className="btn">Submit</button>
    </form>
  </div>
);

export default Form;
