import React, {useState} from 'react'

export default function TextForm(props) {

    const onHandleClick=()=>{
        console.log("UpperCase has clicked "+text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const  onHandleChange =(event)=>{
        console.log("onChange");
      setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here")

  return (
    <div>
      <div className="my-5">
        <h1>{props.heading}</h1>
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={onHandleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
  <button onClick={onHandleClick}>Click me </button>
</div>
    </div>
  )
}
