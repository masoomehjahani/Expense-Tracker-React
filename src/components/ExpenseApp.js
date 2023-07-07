import { useEffect, useState } from "react";
import OverViewApp from "./OverViewApp";
import TransActionApp from "./TrancActionApp";

const ExpenseApp = () => {
    const[expense,setExpense] = useState(0);
    const[income,setIncome] = useState(0);
    const[transactions,setTransactions] = useState([]);

    const addTransaction = (formValues) =>{
      const newData = {...formValues , id: Date.now()};
      setTransactions([...transactions , newData]);
    };
useEffect(() => {
   let exp = 0;
   let inc = 0;
   transactions.forEach( t => {
      t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
   });
   setExpense(exp);
   setIncome(inc);
} ,[transactions])
    return ( 
        <section className="container">
           <OverViewApp
            income={income}
            expense={expense}
            addTransaction={addTransaction}/>
           <TransActionApp transactions={transactions}/>
        </section>
     );
}
 
export default ExpenseApp;