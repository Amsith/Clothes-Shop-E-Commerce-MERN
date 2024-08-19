import React, { useContext, useState } from 'react'
import './Navbar.css'
import shoplogo from '../../Frontend_Assets/nav-logo.png'
import { NavLink, Link } from 'react-router-dom';
import { shopperCart } from '../../App';

//icons
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

    //context api
    const { cart } = useContext(shopperCart)

    const [toggle, setToggle] = useState(false)

    function toggleMenu() {
        setToggle(!toggle)
    }

    return (

        <>
            <div className='nav-div'>
                <nav>
                    <div className='nav-logo'>
                        <Link to={'/'}><img src={shoplogo} alt="Logo" /></Link>
                    </div>

                    <ul className={toggle ? 'active' : ''}>
                        <li><NavLink className={({ isActive }) => isActive ? 'choosen' : ''} to='/'>Shop</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'choosen' : ''} to='/mens'>Mens</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'choosen' : ''} to='/womens'>Womens</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'choosen' : ''} to='/kids'>Kids</NavLink></li>
                    </ul>

                    <div className='nav-admin'>
                        <NavLink to='/admin/create'><button>Admin</button></NavLink>
                        <Link to={'/addtocart'}>
                            <span className='nav-cart-icon'>
                                <MdOutlineShoppingCart />
                                {cart.length > 0 && (
                                    <div className='cart-count'>{cart.length}</div>
                                )}

                            </span>
                        </Link>
                        <span onClick={toggleMenu} className='nav-toggle-icon'> {toggle ? <IoMdClose /> : <TbMenuDeep />}</span>

                    </div>

                </nav>

            </div>


        </>
    )
}

export default Navbar