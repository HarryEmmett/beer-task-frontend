const MyBeer = ({imageURL, beerName, description, abv, alcoholFree, beerType}) => {
    return ( 
        <div>
            <img src={imageURL} alt="no pic" width="200" height="200"/>
            <h2>name of beer: {beerName}</h2>
            <h2>description: {description}</h2>
            <h2>abv: {abv}</h2>
            <h2>alcoholFree (true/false): {alcoholFree}</h2>
            <h2>type of beer: {beerType}</h2>
        </div>
     );
}
 
export default MyBeer;