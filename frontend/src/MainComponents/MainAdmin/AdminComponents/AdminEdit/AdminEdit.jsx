import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'


//Add the use params
// remove the showing message

const AdminEdit = () => {
    const { id } = useParams(); 
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discountprice, setDiscountPrice] = useState('');
    const [category, setCategory] = useState('');
    const [about, setAbout] = useState('');
    const [image, setImage] = useState(null);


    const navigate = useNavigate()

    // Valdiation state
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!price || isNaN(price) || price < 0) newErrors.price = 'Price is required and positive number';
        if (!discountprice || isNaN(discountprice) || discountprice <= 0) newErrors.discountprice = 'Discount Price required and positive number';
        if (!category) newErrors.category = 'Category is required';
        if (!about) newErrors.about = 'About is required';
        if (!image) newErrors.image = 'Product Image is required';
        else if (!image.name.match(/\.(jpg|jpeg|png)$/)) newErrors.image = 'Invalid image type. Only jpg, jpeg, and png are allowed';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // Backedn Code for Update

    useEffect(() => {
            axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDiscountPrice(res.data.discountprice)
                setCategory(res.data.category)
                setAbout(res.data.about)
            })
            .catch((error)=>{
                console.log('Error fetching product data:',error)
            })
    }, [id])



    const submit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const form = new FormData();
        form.append('title', title)
        form.append('price', price)
        form.append('discountprice', discountprice)
        form.append('category', category)
        form.append('about', about)
        form.append('image', image)

        axios.put(`http://localhost:8000/api/product/${id}`, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                navigate ('/admin/table')
            })
    }

    return (
        <>
            <div>
                <div><h2 className='admin-heading'>Update Products</h2></div>
                <form className='admin-form' onSubmit={submit} >
                    <div>
                        <label htmlFor="">Title</label> <br />
                        <input name='title' type="text" placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        {errors.title && <p className='error-message'>{errors.title}</p>}
                    </div>
                    <div className='admin-table-price'>
                        <div className='admin-price'>
                            <label htmlFor="">Price</label> <br />
                            <input name='price' type="number" placeholder='$ Price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
                            {errors.price && <p className='error-message'>{errors.price}</p>}
                        </div>
                        <div className='admin-price'>
                            <label htmlFor="">Discout Price</label> <br />
                            <input name='discountprice' type="number" placeholder='$ Discount Price' value={discountprice} onChange={(e) => { setDiscountPrice(e.target.value) }} />
                            {errors.discountprice && <p className='error-message'>{errors.discountprice}</p>}

                        </div>
                    </div>
                    <div>
                        <select name="category" id="" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                            <option value="" disabled >select category</option>
                            <option value="Mens">Mens</option>
                            <option value="Womens">Womens</option>
                            <option value="Kids">Kids</option>
                        </select>
                        {errors.category && <p className='error-message'>{errors.category}</p>}
                    </div>
                    <div>
                        <label htmlFor="">About</label> <br />
                        <textarea name="about" placeholder='About' value={about} onChange={(e) => { setAbout(e.target.value) }}></textarea>
                        {errors.about && <p className='error-message'>{errors.about}</p>}
                    </div>
                    <div>
                        <label htmlFor="" >Product Image</label> <br />
                        <input type="file" name='image' onChange={(e) => { setImage(e.target.files[0]) }} />
                        {errors.image && <p className='error-message'>{errors.image}</p>}
                    </div>
                    <div><button type='submit' className='admin-create-button'>Update</button></div>
                </form>
            </div>
        </>
    )
}

export default AdminEdit