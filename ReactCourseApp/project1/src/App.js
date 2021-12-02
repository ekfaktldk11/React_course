//import React from 'react';
import Expenses from './components/Expenses/Expenses';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  )
  /*
    위 return code의 JSX code를 길게 풀어내면... -> JSX's Alternatives
    React.createElement()의 parameter는 -> //(html-element, element's attributes, ...elements you'll create)
    return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, "Let's get started"),
      React.createElement(Expenses, {items: expenses})
    );
    
    -> 이게 JSX code 밑에서 동작하여 자동으로 JSX to built in code로 번역을 시켜줌
    -> 위 처럼 번역되고, return 갑을 두개 이상할수 없기에 두개 이상의 JSX tag는 하나의 JSX tag로 감싸줘야함(A wrapper)
  */
}

export default App;
