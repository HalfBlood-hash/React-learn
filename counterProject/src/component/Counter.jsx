
import { useState } from 'react'

function Counter() {
    let [counter,setCounter] =useState(10)
  const incCounter=()=>{
    if(counter>19)
    {
      counter=20
    }
    else
    {
      counter++;
    }
    setCounter(counter);
    // console.log(counter)
  }
  const descCounter=()=>{
    if(counter<1)
      {
        counter=0
      }
      else
      {
        counter--;
      }
    setCounter(counter--);
    // console.log(counter)
  }

    return (

        <>
            <div className='bg-blue-500 p-4 rounded min-w-[420px]' >

                <h1>Chai aur react {counter} </h1>
                <div className='flex justify-center gap-2 pt-2'>
                    <button onClick={incCounter}>Increase Conter</button>
                    <button onClick={descCounter}>Decrease Counter</button>
                </div>
            </div>
        </>
    )
}

export default Counter