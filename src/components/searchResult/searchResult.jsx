import { useState } from 'react'
import'./searchResult.scss'
import Card from '../card/card.jsx'

export default function SearchResult(props){
    // console.log(props)
   
    // console.log(result)

    const [display, setDisplay] = useState(false)

    function handleClick(){
        setDisplay(!display)
    }

   

    return (

    <li>
    <section className="small-card">
        <button className="titles" key={props.repo.id} onClick={handleClick}>{props.repo.owner.login}</button>
        <img className = "avatar" src={props.repo.owner.avatar_url}></img>
    </section>
        {display ? <Card repo={props.repo}/> : null} 
     
        
                
    </li>
  
    
    )
}