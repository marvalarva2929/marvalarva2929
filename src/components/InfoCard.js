import './InfoCard.css'

const InfoCard = ({title, subtitle}) => {
    return (
        <>
            <div className="card-wrapper">
                <h5> {title} </h5>
                <p> {subtitle} </p>
                <div className="bar"> </div>
            </div>
        </>
    )
}

export default InfoCard;
