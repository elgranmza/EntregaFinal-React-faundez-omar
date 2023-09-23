import React, { useState } from "react";
import './checkoutFormStyles.css'; 

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };
        onConfirm(userData);
    };

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <label className="Label">
                    Nombre
                    <input type="text" className="Input" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label className="Label">
                    Teléfono
                    <input type="text" className="Input" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className="Label">
                    Email
                    <input type="email" className="Input" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div className="Label">
                    <button type="submit" className="Button">Crear Orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
