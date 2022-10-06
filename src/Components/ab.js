import React ,{useState} from 'react'

export default function ab() {

    const [text,setText]= useState('enter here');
    
    const handleChange=(event)=>{
  console.log('click here');
  setText(event.target.value);
    }

    const handleClick=()=>{
        console.log('click', text);
        let newText=text.toUppercase();
        setText(newText);
    }
  return (
    <div>
 
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label" onChange={handleChange}>Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onClick={handleClick}></textarea>
</div>
    </div>
  )
}
