import React, { useState } from 'react'
import Number from '../Number'
import thankyou from './illustration-thank-you.svg';
function Rating() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [starcount,setStarCount]=useState(null)
  function handleSubmit() {
   
     
    if (starcount !== null) {
      setSubmitted(true);
    }
    else {
      alert("Please select a star rating before submitting!");
    }


  }
  function countstar(count){
    
setStarCount(count)
console.log(count)
  }
  
  return (
   
     <div className='main-div'>
      {!submitted?(
        <>
 <h1>How did we do?</h1>
 <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
   <Number count={countstar}/>
   <button className='submit'
   onClick={()=>{
  handleSubmit()
 
   }}
  
   >Submit</button>
 </>
      )
      :(
        <>
          <img src={thankyou}/>
        <p className='ratepr'>You selected {starcount} out of 5 stars</p>
          <h2
         
          >Thank you!</h2>
         <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </>
      )
     
      }
    
 
   
    </div>  
  
    
  )
}

export default Rating
