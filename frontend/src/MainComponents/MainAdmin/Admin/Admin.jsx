import React from 'react'
import './Admin.css'
import { Link, Route, Routes } from 'react-router-dom'
import AdminCreate from '../AdminComponents/AdminCreate/AdminCreate'
import AdminTable from '../AdminComponents/AdminTable/AdminTable'
import AdminEdit from '../AdminComponents/AdminEdit/AdminEdit'


const Admin = () => {
    return (
        <>
            <div className='admin-main-div'>
                <div className='admin-side-bar'>
                    <div className='sidbar-p'>
                        <Link to={'/admin/create'}> <p>Create Product</p></Link>
                        <Link to={'/admin/table'}> <p>Admin Table</p></Link>
                    </div>
                </div>
                <div className='admin-components'>
                    <Routes>
                        <Route path='/create' element={<AdminCreate />} />
                        <Route path='/table' element={<AdminTable />} />
                        <Route path='/edit/:id' element={<AdminEdit/>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Admin