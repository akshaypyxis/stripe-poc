import React from 'react';

export const Checkout = () => {
    // const onCreateProduct = () => {
    //     fetch('http://localhost:4242/create-product')
    //         .then(response => response.json()).then(data => data)
    // }
    // const onAttachPriceToProd = () => {
    //     fetch('http://localhost:4242/attach-price')
    //         .then(response => response.json()).then(data => data)
    // }
    return (
        <section>
            {/* <button type="button" onClick={() => { onCreateProduct() }}>Create product</button>
            <button type="button" onClick={() => { onAttachPriceToProd() }}>Attach price to product</button> */}
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Saas</h3>
                    <h5>$99.00</h5>
                </div>
            </div>
            <form action="/create-checkout-session" method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form>
        </section>
    )
}