import { useState } from "react";

const OverViewApp = ({income,expense,addTransaction}) => {
    const[isShow,setIsShow] = useState(false);

    return (<div>
            <div className="topSection">
            <p> Balance : {income - expense}</p>
            <button onClick={() => setIsShow( (prevState) => !prevState)} 
            className={`btn ${isShow && "cancel"}`}>
               {isShow ? "Cancel" : "Add"} 
                </button>
            </div>
           {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            <div className="resultSection">
                <div className="expenceBox" >Expense: <span style={{color : "red"}}>{expense}$</span> </div>
                <div className="expenceBox">Income : <span>{income}$</span></div>
            </div>
            </div>  );
}
 
export default OverViewApp;

// when have a component that think use in one form , thas better define in parrent component(not indevdual component)
const TransActionForm = ({addTransaction,setIsShow}) => {
    const [formValues,setFormValues]= useState({type: "expense" , amount:"" , desc:""});

    const changeHandler = (e) =>{
        setFormValues({...formValues , [e.target.name] : e.target.value})  
    };

    const submitHandler = (e)=>{
        e.preventDefault();
        addTransaction(formValues);
        setIsShow(false);
    }

    return ( 
         <form onSubmit={submitHandler}>
            <input 
            type="text"
             name="desc"
             placeholder="description"
             onChange={changeHandler}
             value={formValues.desc}/>
            <input 
            type="number"
             name="amount"
             placeholder="amount"
             onChange={changeHandler}
            value={formValues.amount}/>
            <div className="radioBox">
                <input type="radio" value="expense"
                name="type" onChange={changeHandler}
                checked={formValues.type === "expense"}
                id= "expense"/>
                <label htmlFor="expense">Expense </label>
               
                <input type="radio" value="income"
                name="type" onChange={changeHandler}
                checked={formValues.type === "income"}
                id="income"/>
                <label htmlFor="income">Income </label>
            </div>
            <button type="submit" className="btn primary">Add TransAction</button>
         </form>
         );
}