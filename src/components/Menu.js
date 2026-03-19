import React from "react";
import Item from "./Item";

function Menu({ name, desc, menu, addItem }) {
    return (
        <section id="menu" style={{ backgroundColor: "#16213e", padding: "60px 0" }}>
            <div className="container">
                <h2 className="text-white text-center fw-bold mb-2">{name}</h2>
                <p className="text-secondary text-center mb-5">{desc}</p>
                <div className="row justify-content-center">
                    {menu.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            desc={item.desc}
                            image={item.image}
                            price={item.price}
                            addItem={addItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;
