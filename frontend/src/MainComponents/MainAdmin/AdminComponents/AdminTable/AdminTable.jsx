import React, { useEffect, useState } from 'react'
import './AdminTable.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


//Icons
import { TiEdit } from "react-icons/ti";
import { RiDeleteBack2Fill } from "react-icons/ri";


const AdminTable = () => {

  const [show, setShow] = useState([])

  function table() {
    axios.get('http://localhost:8000/api/product')
      .then((res) => {
        const allProducts = res.data.allProducts
        setShow(allProducts);
        setFilteredData(allProducts);
      })
      .catch((err) => { console.log("Fetching data error", err) })
  }

  useEffect(() => {
    table()
  },[])

  //Delete Function
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(() => {
        table()
      })
  }





//Search BAR
// Changes => product -  setFilteredData(allProducts); - filteredData.map
 // Perform search based on title, category, or price
const [searchQuery, setSearchQuery] = useState('');
const [filteredData, setFilteredData] = useState([]);

function handleSearchInput(e) {
  setSearchQuery(e.target.value);
}

const handleSearchBTN = () => {
  const filtered = show.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.price.toString().includes(searchQuery)
  );
  setFilteredData(filtered);
};

// Enter key Search function
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSearchBTN();
  }
}


  // Date format helper function
  function formatDate(dateString) {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(dateString));
  }



  return (
    <>
      <div><h2 className='admin-heading'>Admin Table</h2></div>
      <div className='seracr-div'>
        <h3>Total Products : {show.length}</h3>
        <div className='admin-search-and-btn-div'>
          <input className='admin-serach-input' onKeyDown={handleKeyDown} value={searchQuery} onChange={handleSearchInput} type="text" placeholder="Search by name, category or price"/>
          <button className='admin-serach-input-btn' onClick={handleSearchBTN}>Search</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Discount Price</th>
            <th>Category</th>
            <th>About</th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={`http://localhost:8000/${product.image}`} width={60} height={70} alt="" /> </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>${product.discountprice}</td>
              <td>{product.category}</td>
              <td>{product.about}</td>
              <td>{formatDate(product.createdAt)}</td>
              <td><Link to={`/admin/edit/${product._id}`}><button className='admin-table-button admin-edit'><TiEdit /></button></Link></td>
              <td><button className='admin-table-button admin-delete' onClick={() => handleDelete(product._id)}><RiDeleteBack2Fill /></button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default AdminTable