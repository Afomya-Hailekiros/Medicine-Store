import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

axios.defaults.baseURL = "http://localhost:7002/";

function App() {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    batchNo: "",
    drugType: "",
    unitMesurment: "",
    productionDate: "",
    expiredDate: "",
    quantity: "",
    unitPrice: ""
  });
  const [dataList, setDataList] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        // Update an existing item
        const response = await axios.put(`/medicines/${editItem._id}`, formData);
        if (response.status === 200) {
          alert("Medicine updated successfully!");
          setEditItem(null);
        }
      } else {
        // Add a new item
        const response = await axios.post("/medicines", formData);
        if (response.status === 201) {
          alert("Medicine added successfully!");
        }
      }
      setAddSection(false);
      getFetchData(); // Refresh the data list
    } catch (error) {
      console.error('Error response:', error.response);
      console.error('Error data:', error.response.data);
      alert("Failed to save medicine. Please try again.");
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("/medicines");
      if (response.status === 200) {
        setDataList(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      batchNo: item.batchNo,
      drugType: item.drugType,
      unitMesurment: item.unitMesurment,
      productionDate: item.productionDate,
      expiredDate: item.expiredDate,
      quantity: item.quantity,
      unitPrice: item.unitPrice
    });
    setEditItem(item);
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axios.delete(`/medicines/${id}`);
        if (response.status === 200) {
          alert("Medicine deleted successfully!");
          getFetchData(); // Refresh the data list
        }
      } catch (error) {
        console.error('Error response:', error.response);
        alert("Failed to delete medicine. Please try again.");
      }
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <main>
      <h1>Medicine Store</h1>
      <div className="container">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>Add Medicine</button>
        {addSection && (
          <Form
            formData={formData}
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            closeForm={() => setAddSection(false)}
          />
        )}
        <Table
          dataList={dataList}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}

export default App;
