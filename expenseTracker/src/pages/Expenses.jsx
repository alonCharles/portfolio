import React, { useEffect, useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'

const Expenses = () => {
  const [expenseList, setExpenseList] = useState([])
  const [totalSpent, setTotalSpent] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
    if(expenseList.length) {
      let amountSpent = 0
      for (let i = 0; i < expenseList.length; i++) {
        amountSpent +=  parseInt(expenseList[i].amount)
    }
    setTotalSpent(amountSpent)
    }
  }
  calculateTotal()
  },[expenseList])
  console.log(totalSpent)
  
  return (
    <>
      <header>
        <ExpenseForm expenseList={expenseList} setExpenseList={setExpenseList} />
      </header>
      <div>
        {expenseList.map((expenses) => (
          <section className='mx-auto max-w-md mt-6 rounded-xl bg-gray-300 shadow-md md:max-w-xl"'>
                <div className="md:flex">
                <div className="md:shrink-0">
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-700 uppercase">{expenses.name}</div>
                  <span className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                    {expenses.amount}
                  </span>
                  <p className="mt-2 text-gray-500">
                    {expenses.category}
                  </p>
                </div>
              </div>
          </section>
           
))}
      </div>
    </>
  )
}

export default Expenses
