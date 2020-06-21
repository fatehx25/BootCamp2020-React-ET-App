import React from 'react';
import { Header } from './Components/header'
import { Balance } from './Components/balance'
import { IncomeExp } from './Components/incExp'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
import './App.css';
import './Tracker.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App App-container">
        <Header/> 
        <div className="container body">
          <Balance />
          <IncomeExp />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
