import React , {useState} from 'react'

export default function TextForm(props) {

    const [text,setText]=useState('enter here');
    
    const handleChange=(event)=>{
  console.log('click here');
  setText(event.target.value);
    }
   

    const handleClick=()=>{
        console.log('click', text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLo=()=>{
      console.log('click', text);
      let newText=text.toLowerCase();
      setText(newText);
    }
  return (
    
 <div className='container'>
<div className="mb-3" >
  <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
  onChange={handleChange} value={text} style={{backgroundColor:props.mode==='dark'? 'grey' :'white' }}></textarea>
  
  <div className="button btn btn-primary mx-2" onClick={handleClick}>Click here for upperCase</div>
  <div className='button btn btn-primary mx-2' onClick={handleLo}>Click here lowerCase</div>
</div>

<p>{text.length}</p>
<h2>{text.split(" ").length} words and {text.length} characters</h2>
<p>{0.008 * text.split(" ").length} words </p>
    </div>
  )
}
