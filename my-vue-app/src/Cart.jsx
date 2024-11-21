import React, { useState } from 'react'

const Cart = () => {
    const [count,setCount] = useState(0)
    function handleClick()
    {
       setCount(count + 1)
    }

  return (
    <div> 
    <MyButton  count={count} handleClick={handleClick}/>
    <MyButton  count={count} handleClick={handleClick}/>
    </div>
  )
}

 const MyButton =({count,handleClick})=>{
    return (
        <>
        <button onClick={handleClick}>{count}</button>
        </>
    )
}



export default Cart
