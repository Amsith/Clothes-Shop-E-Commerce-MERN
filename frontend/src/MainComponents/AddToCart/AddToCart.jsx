import React, { useContext, useState } from 'react'
import './AddToCart.css'

// Icon
import { GiShoppingBag } from "react-icons/gi";
import { shopperCart } from '../../App';

const AddToCart = () => {
    // Context
    const { cart, setCart } = useContext(shopperCart);

    // Local state for quantities
    const [quantities, setQuantities] = useState(
        cart.reduce((acc, product) => {
            acc[product._id] = 1; // Default quantity to 1 for each product
            return acc;
        }, {})
    );

    // Update quantity
    const updateQuantity = (productId, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(prevQuantities[productId] + delta, 1), // Ensure quantity is at least 1
        }));
    };

     // Calculate total price
     const totalPrice = cart.reduce((sum, product) => {
        return sum + product.price * quantities[product._id];
    }, 0).toFixed(2);

    // Delete product
    const handleDelete = (productId) => {
        setCart(prevCart => prevCart.filter(product => product._id !== productId));
    };

    return (
        <div className='cart-div'>
            <div className='myCart'>
                <div className='myCart-icon'><GiShoppingBag /></div>
                <h3>Shopper Cart </h3>
                {cart.length > 0 && (
                <h3>(Items - {cart.length})</h3>
                )}
            </div>
            <table className='cart-table'>
                <thead className='cart-thead'>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Each</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='cart-tbody'>
                    {cart.map((product, index) => (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td><img src={`http://localhost:8000/${product.image}`} width={60} alt={product.title} /></td>
                            <td>{product.title}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td className='quantity-div'>
                                <button className='decreaseCount' onClick={() => updateQuantity(product._id, -1)}>-</button>
                                <p className='quantity quantity-display'>{quantities[product._id]}</p>
                                <button className='increaseCount' onClick={() => updateQuantity(product._id, 1)} >+</button>
                            </td>
                            <td>${(product.price * quantities[product._id]).toFixed(2)}</td>
                            <td><button className='deleteButton' onClick={() => handleDelete(product._id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='estimate-div'>
                <div>
                    <label className='estimate-promo-label'>Enter the Promo Code</label> <br />
                    <div className='estimate-promo-input'>
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
                <div className='estimated-price-details'>
                    <div>
                        <p>Shipping cost</p>
                        <p>Discount</p>
                        <p>Tax</p>
                        <p className='estimated-total'>Estimated Total</p>
                    </div>
                    <div>
                        <p>TBD</p>
                        <p>-$0</p>
                        <p>TBD</p>
                        <p className='estimated-total'>${totalPrice}</p>
                    </div>
                </div>
                <div className='checkout-btn'>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
