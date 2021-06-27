import React, { useState } from "react";
import './Search.css';



const Search=function(props){
const [name,setName]=useState("",[]);
const[show,setShow]=useState(false);
const[addname,setAddName]=useState([]);
const[filtername,setFilterName]=useState("",[]);
//const[filterlist,setFilterList]=useState([]);





const handleClick =(e)=> {
  e.preventDefault();
 setName(e.target.value);
 AddTask();
 
}
const AddTask =() => {

const taskDetails={
        
          value: name,
    };
    setAddName([...addname,taskDetails]);
  
};    

const removeTask = (e, value)=>{
  e.preventDefault();
   setAddName(addname.filter((t) => t.value !== value));
};

const filterHandle =(e)=>{
setFilterName(e.target.value);
console.log(filtername);

}

  
  const options =[
     { id:1,
       value:"line3",
     },
     {id:2,
      value:"group",
     },
     {id:3,
      value:"line",
      },
     {id:4,
      value:"group2",
      },
      {id:5,
       value:"group3",
      }, 
      {id:6,
       value:"group4",
      },
      {id:7,
       value:"line2",
      },
   ];
  
//if(filtername === options.value){
  //const details={
    //data:filtername,
  //};
//setFilterList(details);
//}
//};

const filtered = options.filter((options) =>
    options.value.toLowerCase().includes(filtername.toLowerCase())
  );
return(
<div>
   
 <div class="box">
 {addname.map((t) => (
             <li class="ui">{t.value} &nbsp;
             <button class="btn2" onClick={(e)=> removeTask(e, t.value)}><i class="fa fa-close"></i></button>
             </li>))}
             </div>
             <input type="text" placeholder="search" onChange={(e) => filterHandle(e)}/>
             <button class="b2"onClick={()=>setShow(!show)} ><i class="fa fa-angle-down"></i></button>
  
                 {/* <div>
                 {filterlist.map((a) => (
                 <li class="">{a.data} &nbsp;
               
                </li>))}
                </div>*/}


               
             
 
{show?
    
<div class="container">
      {filtered.map((a) => (
       <div class="ba"><option onClick={handleClick}>{a.value}</option></div>
      ))}
</div>
      
:null }
</div>

);
}
export default Search;


