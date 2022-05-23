import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props)=>{
 const [isEditing, setEditing] = useState(false);

 function expenseDataHandler(expense){
 props.onAddExpense(expense);
 setEditing(false);
 }
 function enableForm(){
     setEditing(true);
 }

 function cancelEditing(){
     setEditing(false);
 }
 return <div className="new-expense">
     { !isEditing && <button onClick={enableForm} >Add Expense</button> }
     {isEditing && <ExpenseForm onSaveExpenseData = {expenseDataHandler} cancel={cancelEditing} /> }
 </div>;
}

export default NewExpense;