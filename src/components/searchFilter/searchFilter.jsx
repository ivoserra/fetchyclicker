import { useState, useEffect} from 'react'
import SearchResult from '../searchResult/searchResult.jsx'
import Spinner from '../spinner/spinner.jsx'


import './searchFilter.scss'
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'




export default function SearchFilter(){

    const [repositories, setRepositories] = useState([])
    const [page, setPage]= useState(1)
    const [ loading, setLoading ] = useState(true)

    // filter
    const [searchInput, setSearchInput] = useState('all')
    const [filteredResults, setFilteredResults] = useState([])


    
    useEffect(()=>{
        setLoading(true)

        // const url=`https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}`
        
        fetch(`https://api.github.com/search/repositories?q=${searchInput}&per_page=150&page=${page}`)
        // fetch(`https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}`)
        .then(response => response.json())
        .then(result => {

            setRepositories(result.items)
            setLoading(false)
            
        })
        .catch(error => console.log(error))
      

    }, [page])


    const searchItems=(searchValue)=>{
        setSearchInput(searchValue)
        if(searchInput !== ''){
       const filteredData = repositories.filter((item)=>{
        //    console.log(item)
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            // return item.name.includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    } else{
        setFilteredResults(repositories)
    }
        
    }
// console.log(searchInput)    
console.log(repositories)
// console.log(filteredResults)
  
    return(

        <section className="wrapper-filter">

        <div className="top-view-filter">  
        {loading ? <Spinner/> : (
            <section className="brand-filter">
            <img className="logo-filter" src="https://miro.medium.com/max/1200/1*pHsEux2h8wc3-yNCQNwz0A.jpeg"></img>
            <h1>Page {page}</h1>
        </section>)}
        </div>

        <section className="search-bar">
        <input icon='search' placeholder='search' onChange={(e)=>searchItems(e.target.value)}></input>
        </section>
   
          <section className="content-filter">
                <div className="short-card-filter">

                    { searchInput.length > 1 && (filteredResults.map((item)=>{
                        return(<SearchResult key ={item.id} repo={item}>{item.languages}{item.name}{item.topics}</SearchResult>)}))}            
                  
                </div> 
          </section>

            <section className= "navbar-filter">
            <section className="button-container">
                { page > 1 && <button className ="nav-button-filter" onClick={()=> setPage(page - 1)} ><HiArrowLeft size="1.5em"/></button> }
                <button className="nav-button-filter" onClick={()=> setPage( page + 1)}><HiArrowRight size="1.5em"/></button>
            </section> 
            </section>
        </section>
        
        
    )
}