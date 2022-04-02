import './card.scss'
export default function Card(props){



    console.log(props)
    return(
        <div className="info">
      
            <h2>{props.repo.description}</h2>
            <a href={props.repo.owner.html_url}>{props.repo.owner.html_url}</a>
            <p>visibility: {props.repo.visibility}</p>
            <p>watchers: {props.repo.watchers}</p>
            <p>{props.repo.topics.map(topic => <span className="text">{topic} </span>)}</p>
            
        
        </div>  
    )
}