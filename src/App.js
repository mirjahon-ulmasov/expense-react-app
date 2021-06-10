import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 299.34,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e2',
    title: 'New Desk',
    amount: 69.34,
    date: new Date(2021, 4, 2),
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 1.34,
    date: new Date(2019, 1, 10),
  },
  {
    id: 'e4',
    title: 'Smart TV',
    amount: 799.14,
    date: new Date(2022, 3, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
