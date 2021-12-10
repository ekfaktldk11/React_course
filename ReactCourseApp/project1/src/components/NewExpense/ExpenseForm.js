import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // document.getElementById('').addEventListener('click', (event) => {})
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // }); // 이런 방식으로 하나의 useState로 state를 관리해도됨 - 근데 난 개별적 관리가 편한듯

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // })
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value
    // })
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value
    // })
  };

  const submitHandler = (e) => {
    /** 
     * form안의 submit 버튼을 누르게되면, 페이지는 이 이벤트를
     * 당연히 서버로 리퀘스트를 보내는 줄 알기 때문에 해당 페이지를 리렌더링함.
     * 이 리렌더링을 안하게 하고 싶을 때 사용하는 것이 아래의 e.preventDefault(); <- built_in JS code
    */
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate) 
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__constrols">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
