/* eslint-disable */
import { useState } from "react"

export default function NewToDoForm( {onSubmit} ) {
    const [newItem, setNewIteam] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return
        
        onSubmit(newItem)
    
        setNewIteam("")
      }
      
    return (
      <form onSubmit={handleSubmit} className="new-item-form">

        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value ={newItem} onChange={e => setNewIteam(e.target.value)} type="text" id="item"/>
    
        </div>
        <button className="btn">Add</button>
        </form>
    )
}