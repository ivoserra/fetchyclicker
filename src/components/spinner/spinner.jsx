import './spinner.scss'

export default function Spinner(){



    return(
        <section className="spinner">
        <div className="loaded">
         <span className="circle"></span>
         <span className="circle"></span>
         <span className="circle"></span>
         <span className="circle"></span>
         <span className="circle"></span>
         <p className="loading">Loading ...</p> 
        </div>
        </section>
        
    )
}