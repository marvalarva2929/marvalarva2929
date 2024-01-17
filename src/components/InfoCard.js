import './InfoCard.css'

const InfoCard = ({title, subtitle, date}) => {
    return (
        <>
            <div className="card-wrapper">
                <h5> {title} </h5>
                <p> {subtitle} </p>
                <p> <i> {date} </i> </p>
                <div className="bar"> </div>
            </div>
        </>
    )
}

export default InfoCard;
