import { useState } from 'react'

const ExpenseForm = ({expenseList,setExpenseList}) => {
    const [expense, setExpense] = useState({
        name:'',
        amount:'',
        category:''
    })

    const addExpense = (e) => {
        const { name, value } = e.target
        setExpense((prev) => ({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setExpenseList([...new Set([...expenseList,expense])]) 
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' type="text" value={expense.name} onChange={addExpense} placeholder='Expense Name'/>
        <input name='amount' type="text" value={expense.amount} onChange={addExpense} placeholder='Expense Amount'/>
        <input name='category' type="text" value={expense.category} onChange={addExpense} placeholder='Expense Category'/>
        <button type='submit' >Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm
