import './app.css'
import {useEffect, useState} from 'react'
import ChildC from './ChildC';
function App() {
  const [divCol,setDivCol]=useState()
  
  const getColor=(color)=>{
    setDivCol(color)
  }
  const [price,setPrice]=useState(0)
  const [price1,setPrice1]=useState(0)
  const [price2,setPrice2]=useState(0)
  const [price3,setPrice3]=useState(0)
  const [total,setTotal]=useState("")
  const[final,setFinal]=useState("")
  const [disabled,setDisabled]=useState(false)
  const [dateE,setDateE]=useState("")
  const [dateM,setDateM]=useState("")
  const Handle=() => {
    let d= new Date().toLocaleString()
    setFinal(total);
    setDisabled(true)
    setDateE(d)
  }
  const HandleModify=() => {
    let d= new Date().toLocaleString()
    setDisabled(false)
    setDateM(d)
  }
useEffect(()=>{
  setTotal(parseInt(price)+ parseInt(price1)+parseInt(price2)+parseInt(price3))
})
  const [color , setColor]=useState('maindiv')
  const [role,setRole]=useState(0)
  const [counter,setCounter]=useState(0)
  const [showForm,setShowForm]=useState(false)
  const arr=[1,2,7,5,6,8,9]
  //console.log(arr.map((x)=> x*2))

  const [users,setUsers]=useState([{
    name:"Ahmed",
    age:"20",
    Role:"user"
 },{
   name:"Wiam",
   age:"40",
   Role:"admin"
 },{
   name:"Asma",
   age:"30",
   Role:"editor"
 }

] )
const [query,setQuery]=useState("")
const allUsers=[
{"id":1,
  "name":"james"
},
{"id":2,
"name":"jack"},
{"id":3,
"name":"felix"},
{"id":4,
"name":"Timfel"},
{"id":5,
"name":"timotte"},
{"id":6,
"name":"Nouhaila"}
]  
console.log(query.toLowerCase())
// console.log(role)
// console.log(users[role])
// const array=[]
// array.push(users.u[role])
// console.log(array)
const ClickIt=() => {
    setShowForm(true);
}
const ClickIt2=() => {
      setCounter((p)=>p+1);
      setShowForm(false);
}
const ChangeColor=()=>{
   setColor('maindiv2')
}
const ChangeColor2=()=>{
  setColor('maindiv')
}
return (
  <div >
  
   {/* <h1>Hey</h1>
   <div className='div2'>
  <select name="roles" onChange={(e)=>{setRole(e.target.value)}}>
  <option value="0">user</option>
  <option value="1">admin</option>
  <option value="2">editor</option>
</select>
 {users[role].Role === "admin" && <><p>{users[role].age}</p> <p>{users[role].name}</p></>}
 <br></br>

 <br></br>
 <button onClick={ClickIt}>add other forms</button>
 <br></br>
 <p>{counter}</p>
 <br></br>
 {showForm && (<>
            
              <br></br>
              <button onClick={ClickIt2}>Save</button><br></br><br></br>
              <button onClick={ChangeColor}> No mode</button><br></br><br></br>
              <button onClick={ChangeColor2}>Violet mode</button><br></br><br></br>
  </>)} </div>
  <br></br><br></br>
   <div className='div3'>
    <br></br><br></br>
    <input placeholder='Search here...' onChange={(e)=>setQuery(e.target.value)}></input>
    <ul>
      {allUsers.filter((user)=>user.name.toLowerCase().includes(query)).map((
        (user)=>(<li key={user.id}>{user.name}</li>)
      ))}
    </ul>
   </div> */}
   <div className='div4'>

<input type="text" disabled={disabled} placeholder='enter a price' onChange={(e)=>setPrice(e.target.value)} />&nbsp; Dh<br></br><br></br>
<input type="text" disabled={disabled} placeholder='enter a price' onChange={(e)=>setPrice1(e.target.value)} />&nbsp; Dh<br></br><br></br>
<input type="text" disabled={disabled} placeholder='enter a price' onChange={(e)=>setPrice2(e.target.value)} />&nbsp; Dh<br></br><br></br>
<input type="text"disabled={disabled} placeholder='enter a price' onChange={(e)=>setPrice3(e.target.value)} />&nbsp; Dh<br></br><br></br>
{/* <p>{total}</p> */}
<input disabled value={total}></input>&nbsp; Dh<br></br><br></br>
<button onClick={Handle}>Submit the total</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={HandleModify}>Modify the total</button>
<p> total : {final} &nbsp; Dh &nbsp; envoyé le &nbsp; { dateE}</p>
<p> total a été modifié le  { dateM}</p>
   </div>
 {/* {role=="admin" && <p>{users[1].age}</p>}
 {role=="editor" && <p>{users[2].age}</p>} */}
 {/* {users.map((user) =>{
  return (
    <>
    {role=="editor" && <>
    <p>{user.name}</p>
    
    </>
  }
    </>
   )})} */}
 

  
   
     <div className="App" style={{backgroundColor:`${divCol}`}}>
    </div>
    <br></br>
    <ChildC getColor={getColor}></ChildC>
   

   </div>
)
}

export default App;
