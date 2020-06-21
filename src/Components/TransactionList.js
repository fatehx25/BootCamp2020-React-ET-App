import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction Log</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))}
            </ul>
        </div>
    )
}
