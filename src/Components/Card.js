const Card = ({name, status, image, location, key}) => {

    return(
        <div className="card">
            <h1>{name}</h1>
            <p>{status}</p>
            <img src={image} alt='image'/>
            <p>{location}</p>
        </div>
    )

}

export default Card;