import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
     function titleChangeHandler(event) {
        setTitle(event.target.value);
     }

     function amountChangeHandler(event){
       setAmount(event.target.value);
     }

     function dateChangeHandler(event){
         setDate(event.target.value);
     }
     const submitHandler = (event) =>{
     event.preventDefault();
     const expenseData = {
         title: enteredTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
         id: Math.random().toString()
     }
    props.onSaveExpenseData(expenseData);
    setAmount('');
    setTitle('');
    setDate('');
     }
 return (
   <form onSubmit={submitHandler}>
     <div className="new-expense__controls">
       <div className="new-expense__control">
         <label>Title</label>
         <input
           value={enteredTitle}
           type="text"
           onChange={titleChangeHandler}
         />
       </div>
       <div className="new-expense__control">
         <label>Amount</label>
         <input
           value={enteredAmount}
           type="number"
           min="0.01"
           step="0.01"
           onChange={amountChangeHandler}
         />
       </div>
       <div className="new-expense__control">
         <label>Date</label>
         <input
           value={enteredDate}
           type="date"
           min="2019-01-01"
           max="2022-12-31"
           onChange={dateChangeHandler}
         />
       </div>
     </div>
     <div className="new-expense__actions">
       <button type="button" onClick={props.cancel}>Cancel</button>
       <button type="submit">Add Expense</button>
     </div>
   </form>
 );
}

export default ExpenseForm;