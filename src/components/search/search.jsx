
import { useState, useEffect} from 'react'
import SearchResult from '../searchResult/searchResult.jsx'
import Spinner from '../spinner/spinner.jsx'

import './search.scss'
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'


export default function Search(){

    const [repositories, setRepositories] = useState([])
    const [page, setPage]= useState(1)
    const [ loading, setLoading ] = useState(true)

    
    useEffect(()=>{
        setLoading(true)

        fetch(`https://api.github.com/search/repositories?q=react&per_page=50&page=${page}`)
       
        .then(response => response.json())
        .then(result => {

            setRepositories(result.items)
            setLoading(false)
            
        })
        .catch(error => console.log(error))
      

    }, [page])

    
console.log(repositories)

  
    return(
        <section className="wrapper">
            <IconContext.Provider value='2em'/>

            <div className="top-view">  
            {loading ? <Spinner/> : (
                <section className="brand">
                <img className="logo" src="https://miro.medium.com/max/1200/1*pHsEux2h8wc3-yNCQNwz0A.jpeg"></img>
                <h1>Page {page}</h1>
            </section>)}
            </div>
   
            <section className="content">
                    <div className="short-card">
                        {repositories.map(item=> <SearchResult key={item.id} repo={item}/>)}       
                    </div> 
            </section>

            <section className= "navbar">
            <section className="button-container">
                { page > 1 && <button className ="nav-button" onClick={()=> setPage(page - 1)}><HiArrowLeft size='1.5em'/></button> }
                <button className="nav-button" onClick={()=> setPage( page + 1)}><HiArrowRight size='1.5em'/></button>
            </section> 
            </section>
         
        </section>
        
    )
}