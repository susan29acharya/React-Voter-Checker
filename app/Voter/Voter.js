"use client"
import React, { useState } from 'react'

const Voter = () => {
    const [Age, setAge] = useState("");
    const[result,setresult] = useState("");

    const handlecalculation = (e) => {
        e.preventDefault();
        submit();
    }



    const submit=()=>{
        if(Age==="")
        {
            alert("Please enter your age")
        }
        else
        {
            if(Age >= 18)
            {
                setresult(" Congratulation!! you are eligible to vote")
                setAge("");
            }
            else
            {
                setresult("You are still a child")
                setAge("");
            }
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handlecalculation}>
                    <h2>Voter <span>Checker</span></h2>
                    <input type='number' placeholder='Enter your age' value={Age} onChange={(e) => setAge(e.target.value)} /><br/>
                    <button type='submit'>check</button>
                    
                </form>
            </div>

            <div className='result-div'>
             <p>{result}</p>
            </div>
        </>
    )
}

export default Voter