import React, { useState, useEffect } from 'react'


export default function JumpLink2(props) {

  const [msg, setMsg] = useState('aaa')

  useEffect(()=>{
    console.log('挂载1111111')
    return ()=>{
      console.log('销毁3333333');
    }
  },[]);
  function change() {
    if(msg === 'aaa'){
      setMsg('bbb')
    } else {
      setMsg('aaa')
    }
  }

  return (
    <div>
      <h1>Jump Link2</h1>
      <h1> { msg }</h1>
      <button onClick={change}>修改msg</button>
      
    </div>
  )
}



