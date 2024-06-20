import React from 'react';
import './PricingPlan.css';

const PricingPlan = ({ title, price, currency, features }) => {
    return (
        <div className="plan">
            <h2>{title}</h2>
            <p className="price">
                {currency} {price} <span>/ month</span>
            </p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button>Select Plan</button>
        </div>
    );
};

export default PricingPlan;
