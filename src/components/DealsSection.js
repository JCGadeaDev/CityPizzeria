import React from "react";

function DealsSection({ deals, addItem }) {
    return (
        <section id="deals" style={{ backgroundColor: "#EFEBE9", padding: "60px 0" }}>
            <div className="container">
                <h2 className="text-center fw-bold mb-2" style={{ color: "#4E342E" }}>Special Deals</h2>
                <p className="text-center mb-5" style={{ color: "#8D6E63" }}>Limited time offers you don't want to miss</p>
                <div className="row justify-content-center">
                    {deals.map((deal) => (
                        <div key={deal.id} className="col-sm-6 col-md-5 col-lg-4 mb-4">
                            <div className="card h-100 pizza-card">
                                <div className="position-relative">
                                    <div className="pizza-img-container">
                                        <img src={deal.image} className="card-img-top pizza-img" alt={deal.name} />
                                    </div>
                                    <span className="badge position-absolute top-0 end-0 m-2 fs-6" style={{ backgroundColor: "#C0392B" }}>
                                        {deal.badge}
                                    </span>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title" style={{ color: "#4E342E" }}>{deal.name}</h5>
                                    <p className="card-text flex-grow-1" style={{ color: "#8D6E63" }}>{deal.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <div>
                                            <span className="text-decoration-line-through me-2" style={{ color: "#A1887F" }}>
                                                ${deal.originalPrice.toFixed(2)}
                                            </span>
                                            <span className="fw-bold fs-5" style={{ color: "#C0392B" }}>
                                                ${deal.discountedPrice.toFixed(2)}
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-sm text-white"
                                            style={{ backgroundColor: "#C0392B" }}
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
