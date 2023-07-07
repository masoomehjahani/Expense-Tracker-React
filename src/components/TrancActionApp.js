import { useEffect, useState } from "react";

const TransActionApp = (props) => {
  const [search,setSearch] = useState("");

  // tarif state komaki ta data asli az beyn naravad
  const [filteredTrn , setFilteredTrn] = useState(props.transactions);

  const changeHandler = (e)=>{
    setSearch(e.target.value);
    filterTransactions(e.target.value);
  };

  const filterTransactions = (searchItem) =>{
    if (!searchItem || searchItem === ""){
       setFilteredTrn(props.transactions);
        return;
     }
     const filtered = props.transactions.filter( t =>
       t.desc.toLowerCase().includes(searchItem.toLowerCase()));
     setFilteredTrn(filtered);
  };

  useEffect(() =>{
    filterTransactions(search);
    } ,[props.transactions]
  );

  if (!props.transactions.length) return <h3>add some transaction</h3>
    return (
       <section>
         <input type="text" value={search} onChange={changeHandler}
         className="search" placeholder="search trn..." />
          {filteredTrn.length ?
           filteredTrn.map( (t) =>(
              <div key={t.id} className="transaction"
              style={{borderRight : t.type === "expense" && "4px solid red"}}>
                <span>{t.desc}</span> 
                <span>${t.amount}</span> 
              </div>
            )) : "no item matchs!"}
        </section>
      );
};
 
export default TransActionApp;