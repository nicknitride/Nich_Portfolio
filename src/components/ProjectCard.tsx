import "./ProjectCard.css"

interface props{
    cardName: string;
    projName : string;
    projDescription : string;
    projDetails: string;
    cardImg: string | null;
}
function ProjectCard({cardName, projName, projDescription, projDetails, cardImg}:props){
    return (<>
    <div className="proj-card">
    <h2>{cardName}</h2>
    {cardImg && <img src={cardImg} alt={projName} />}
    <div className="card-details">
    <h3>{projName}</h3>
    <p>Description: {projDescription}</p>
    <p>{projDetails}</p>
    </div>

    </div>

    </>)
}

export default ProjectCard;