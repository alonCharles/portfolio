import React, { useState } from 'react'

const Home = () => {
    const [monthlyGoal, setMonthlyGoal] = useState('')

  return (
    <div>
      <header>
        <label htmlFor="budget-goal">Enter Monthly Budget Goal</label>
        <input id='budget-goal' type="number" value={monthlyGoal} onChange={(e) => setMonthlyGoal(e.target.value)} />
        { '$' + monthlyGoal}
      </header>
    </div>
  )
}

export default Home
