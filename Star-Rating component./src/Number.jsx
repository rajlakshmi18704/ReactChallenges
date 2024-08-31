import React, { useState } from 'react'
function Number({count}) {
  const [color,setColor]=useState(Array(5).fill("#515862"))
  const [hoverIndex, setHoverIndex] = useState(null);
 const [fontcolor,setFontColor]=useState(Array(5).fill("white"))
  function changecolor(i){
    setColor(prevcolor=>{
      
      const newColors = prevcolor.map((color, index) => 
        index === i ? "white" : "#515862"
      
      );
     
      return newColors;
  })
  setFontColor(prevcolor=>{
      
    const fontColors = prevcolor.map((color, index) => 
      index === i ? "black" : "white"
    
    );
   
    return fontColors;
})

count(i+1)
  }
  return (
    <div>
      {
 color.map((btn,i)=>{
  return (

    <button className="rate-btn"
    onClick={()=>{
      changecolor(i)
      
      
    }}  
    onMouseEnter={() => setHoverIndex(i)}
    onMouseLeave={() => setHoverIndex(null)}
    style={{
     
      backgroundColor: hoverIndex === i ? '#FC7613' : btn,
       color: hoverIndex === i ? 'black' : fontcolor[i],
  
     
    }}
    >
          {i+1}
        </button>
  )
})
}
    </div>
    
  )
}

export default Number
