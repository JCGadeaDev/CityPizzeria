import React, { useState } from "react";

function Cart({ items, remove, clearCart }) {
    const [step, setStep] = useState("cart");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        orderType: "pickup",
        address: "",
        payment: "cash"
    });
    const [errors, setErrors] = useState({});

    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    const gst = subtotal * 0.05;
    const total = subtotal + gst;

    const closeNav = () => {
        document.getElementById("mySidenav").style.height = "0";
        setStep("cart");
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
        if (form.orderType === "delivery" && !form.address.trim())
            newErrors.address = "Address is required for delivery.";
        return newErrors;
    };

    const handleCheckout = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setStep("success");
            clearCart();
        }
    };

    const handleNewOrder = () => {
        setStep("cart");
        setForm({ name: "", phone: "", orderType: "pickup", address: "", payment: "cash" });
        setErrors({});
        closeNav();
    };

    return (
        <div id="mySidenav" className="sidenav">
            <button className="closebtn" onClick={closeNav}>&times;</button>

            {step === "cart" && (
                <div className="sidenav-content">
                    <h4 className="text-white mb-4">
                        <i className="fas fa-shopping-basket me-2"></i>Your Basket
                    </h4>

                    {items.length === 0 ? (
                        <p className="text-secondary">Your basket is empty.</p>
                    ) : (
                        <>
                            <div className="table-responsive">
                                <table className="table table-dark table-sm">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <tr key={item.id}>
                                                <td className="text-white">{item.name}</td>
                                                <td className="text-white">{item.qty}</td>
                                                <td className="text-warning">${(item.price * item.qty).toFixed(2)}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => remove(item)}
                                                    >
                                                        &minus;
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="text-white mt-3">
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>GST (5%):</span>
                                    <span>${gst.toFixed(2)}</span>
                                </div>
                                <hr className="border-secondary" />
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                    <span>Total:</span>
                                    <span className="text-warning">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-warning w-100 mt-4 fw-bold"
                                onClick={() => setStep("checkout")}
                            >
                                Proceed to Checkout
                            </button>
                        </>
                    )}
                </div>
            )}

            {step === "checkout" && (
                <div className="sidenav-content">
                    <h4 className="text-white mb-4">
                        <i className="fas fa-receipt me-2"></i>Checkout
                    </h4>

                    <div className="mb-3">
                        <label className="text-white form-label">Name</label>
                        <input
                            type="text"
                            className={`form-control dark-input ${errors.name ? "is-invalid" : ""}`}
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="text-white form-label">Phone</label>
                        <input
                            type="tel"
                            className={`form-control dark-input ${errors.phone ? "is-invalid" : ""}`}
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="text-white form-label">Order Type</label>
                        <select
                            className="form-select dark-input"
                            name="orderType"
                            value={form.orderType}
                            onChange={handleChange}
                        >
                            <option value="pickup">Pickup</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </div>

                    {form.orderType === "delivery" && (
                        <div className="mb-3">
                            <label className="text-white form-label">Delivery Address</label>
                            <input
                                type="text"
                                className={`form-control dark-input ${errors.address ? "is-invalid" : ""}`}
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="Your delivery address"
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="text-white form-label">Payment Method</label>
                        <select
                            className="form-select dark-input"
                            name="payment"
                            value={form.payment}
                            onChange={handleChange}
                        >
                            <option value="cash">Cash</option>
                            <option value="card">Card</option>
                        </select>
                    </div>

                    <div className="d-flex justify-content-between fw-bold text-white mb-3">
                        <span>Total:</span>
                        <span className="text-warning">${total.toFixed(2)}</span>
                    </div>

                    <button className="btn btn-warning w-100 fw-bold" onClick={handleCheckout}>
                        Place Order
                    </button>
                    <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => setStep("cart")}>
                        Back to Basket
                    </button>
                </div>
            )}

            {step === "success" && (
                <div className="sidenav-content text-center">
                    <div className="text-success mb-3" style={{ fontSize: "4rem" }}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h4 className="text-white mb-3">Order Confirmed!</h4>
                    <p className="text-secondary">
                        Thank you, <strong className="text-white">{form.name}</strong>!
                    </p>
                    <p className="text-secondary">
                        {form.orderType === "delivery"
                            ? `Your order will be delivered to ${form.address} in 30-45 minutes.`
                            : "Your order will be ready for pickup in 15-20 minutes."}
                    </p>
                    <p className="text-secondary">Payment: <strong className="text-white">{form.payment}</strong></p>
                    <button className="btn btn-warning w-100 mt-4 fw-bold" onClick={handleNewOrder}>
                        New Order
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
