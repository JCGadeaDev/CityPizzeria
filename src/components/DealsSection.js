import React from "react";

function DealsSection({ deals, addItem }) {
    return (
        <section id="deals" style={{ backgroundColor: "#0f3460", padding: "60px 0" }}>
            <div className="container">
                <h2 className="text-white text-center fw-bold mb-2">Special Deals</h2>
                <p className="text-secondary text-center mb-5">Limited time offers you don't want to miss</p>
                <div className="row justify-content-center">
                    {deals.map((deal) => (
                        <div key={deal.id} className="col-sm-6 col-md-5 col-lg-4 mb-4">
                            <div className="card h-100 pizza-card">
                                <div className="position-relative">
                                    <div className="pizza-img-container">
                                        <img src={deal.image} className="card-img-top pizza-img" alt={deal.name} />
                                    </div>
                                    <span className="badge bg-danger position-absolute top-0 end-0 m-2 fs-6">
                                        {deal.badge}
                                    </span>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-white">{deal.name}</h5>
                                    <p className="card-text text-secondary flex-grow-1">{deal.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <div>
                                            <span className="text-secondary text-decoration-line-through me-2">
                                                ${deal.originalPrice.toFixed(2)}
                                            </span>
                                            <span className="text-warning fw-bold fs-5">
                                                ${deal.discountedPrice.toFixed(2)}
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-warning btn-sm"
                                            onClick={() => addItem({
                                                id: deal.id,
                                                name: deal.name,
                                                desc: deal.desc,
                                                image: deal.image,
                                                price: deal.discountedPrice
                                            })}
                                        >
                                            Add to Basket
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DealsSection;
