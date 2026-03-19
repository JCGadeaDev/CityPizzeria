import React from "react";

function Item({ id, name, desc, image, price, addItem }) {
    return (
        <div className="col-sm-6 col-md-5 col-lg-4 mb-4">
            <div className="card h-100 pizza-card">
                <div className="pizza-img-container">
                    <img src={image} className="card-img-top pizza-img" alt={name} />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ color: "#4E342E" }}>{name}</h5>
                    <p className="card-text flex-grow-1" style={{ color: "#8D6E63" }}>{desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fw-bold fs-5" style={{ color: "#C0392B" }}>${price.toFixed(2)}</span>
                        <button
                            className="btn btn-sm text-white"
                            style={{ backgroundColor: "#C0392B" }}
                            onClick={() => addItem({ id, name, desc, image, price })}
                        >
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
