import React, { useState } from 'react';
import PricingPlan from './PricingPlan';
import './App.css';

function App() {
    const [currency, setCurrency] = useState('INR');  

    const companyName = 'Foodie Inc.';

    const plans = [
        { 
            title: 'Basic Plan', 
            price: 10, 
            company: companyName,
            features: [
                '10 Orders per Month', 
                'Access to Standard Restaurants', 
                'No Delivery Discount', 
                'Email Support'
            ] 
        },
        { 
            title: 'Standard Plan', 
            price: 20, 
            company: companyName,
            features: [
                '50 Orders per Month', 
                'Access to Standard and Premium Restaurants', 
                '5% Delivery Discount', 
                'Priority Email Support'
            ] 
        },
        { 
            title: 'Premium Plan', 
            price: 30, 
            company: companyName,
            features: [
                'Unlimited Orders', 
                'Access to All Restaurants', 
                '10% Delivery Discount', 
                '24/7 Phone Support'
            ] 
        }
    ];

    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
        INR: 75
    };

    const currencySymbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥',
        INR: '₹'
    };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <div className="App">
            <header>
                <h1>{companyName}</h1>
                <h2>Our Pricing Plans</h2>
            </header>
            <div className="dropdown-container">
                <label htmlFor="currency">Select Country: </label>
                <select id="currency" onChange={handleCurrencyChange}>
                    <option value="INR">India (INR)</option>
                    <option value="EUR">Europe (EUR)</option>
                    <option value="GBP">United Kingdom (GBP)</option>
                    <option value="JPY">Japan (JPY)</option>
                    <option value="USD">United States (USD)</option>
                </select>
            </div>
            <main>
                <section className="pricing">
                    {plans.map((plan, index) => (
                        <PricingPlan
                            key={index}
                            title={plan.title}
                            price={(plan.price * conversionRates[currency]).toFixed(2)}
                            currency={currencySymbols[currency]}
                            company={plan.company}
                            features={plan.features}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
