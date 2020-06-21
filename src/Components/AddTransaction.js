import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    // function validate(text, amount) {  // true means invalid, so our conditions got reversed  
    //     return {    
    //         text: text.length === 0,    
    //         amount: amount.length === 0,
    //     };
    // }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control field">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Description" />
                </div>
                <br/>    
                <div className="form-control field">    
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount           (negative for expense)" />

                </div>    
                    <br/>
                    
                    <button className={`btn ${amount < 0 ? "btn-hv1": "btn-hv2"}`}>Add Transaction</button>
            </form>
        </div>
    )
}
