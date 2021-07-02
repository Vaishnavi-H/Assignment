import React, { useState } from "react";
import './Search.css';

function Search(){
const [name,setName]=useState('');
const[show,setShow]=useState(false);
const[addName,setAddName]=useState([]);
const[filtername,setFilterName]=useState("",[]);
//const[remove,setRemove]=useState([]);
const[hide,setHide]=useState([]);


const handleClick = (e) => {
e.preventDefault();
 setName(e.target.value);
 AddTask();
}

const AddTask = () => {
if(name !== ""){
const taskDetails={
         
          value:name
};
    setAddName([...addName,taskDetails]);}
};

const removeall=()=>{
  if(name!==""){
    const clear={
    value:<button class="btn3" onClick={removeHandle}><i id="fig1" class="fa fa-close"></i></button>,}
    setHide([clear]);
   }
}    

const removeHandle=()=>{
  setAddName([]);
  setHide([]);
}

const removeTask = (e, value)=>{
  e.preventDefault();
   setAddName(addName.filter((t) => t.value !== value));
};

const filterHandle =(e)=>{
setFilterName(e.target.value);
console.log(filtername);
}

const[options,setOptions]=useState(
[
     { 
       id:1,
       value:"line1",
     },
     {
       id:2,
      value:"group",
     },
     {
      id:3,
      value:"line2",
      },
     {
      id:4,
      value:"group2",
      },
      {
        id:5,
       value:"group3",
      }, 
      {
        id:6,
       value:"group4",
      },
      {
        id:7,
       value:"line3",
      },
]);
  
console.log(options);

const filtered = options.filter((options) =>
options.value.toLowerCase().includes(filtername.toLowerCase())
);

const removeOption= (e) =>{
const removeitem =  (options.filter((options) => options.value !==name));
setOptions(removeitem);
}
  
return(
<div>
      <span>{hide.map((r)=>(
           <div>{r.value} </div>))} 
      </span>
<div class="box">
    {addName.map((t) => (
        <div class="ui" key={t.id}>{t.value} &nbsp;
            <i onClick={(e)=> {removeTask(e, t.value);}} id="fig2"class="fa fa-close"></i>
        </div>))
    } 
    <input type="text" placeholder="search" onChange={(e) => filterHandle(e)} /> 
    <button class="b2"onClick={()=>setShow(!show)} ><i id="fig"class="fa fa-angle-down"></i></button>
</div> 
  {show?
    <div class="container">
        {filtered.map((a) => (
          <div class="ba">
            <option onClick={(e)=> {handleClick(e);removeOption(e);removeall()}}  key={a.id}>{a.value}</option> </div> ))}
         </div>
  :null }
</div>
);
}
export default Search;


