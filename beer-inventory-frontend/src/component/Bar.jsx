import { useEffect, useState } from "react";
import axios from 'axios';
//need to make the beer file
import Beer from "./Beer";

const Bar = () => {
    const [beerData, setBeerData] = useState("");
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [postData, setPostData] = useState({
        beerName: "",
        description: "",
        imageURL: "",
        abv: "",
        alcoholFree: "",
        beerType: "",
    })
    let tempId;


    useEffect(() => {
        console.log("1", beerData);
        axios.get(`http://localhost:5015/beer/readAll`)
            .then((response) => {
                // const i = 0;
                // console.log("===========================");
                // console.log(response.data);
                // console.log(response.data[i]._id)
                setBeerData(response.data); //sets the beerData as the response from the db so you can map through
                // console.log("2", beerData);
                setLoaded(true)
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
            .then(() => {
                console.log(beerData);
            });
    }, []);

    const getBeerId = (id) => {
        axios.get(`http://localhost:5015/beer/read/${id}`)
            .then((response) => {
                console.log("read by id yes connor");
                console.log(response);
                console.log(response.data);
                console.log(response.data.beerName)
                setBeerData([response.data]); //need to turn into an array otherwise you cant .map in the return 
                setLoaded(true);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            })
            .then(() => {
                console.log(beerData);
            });
    }

    const deleteBeerId = (id) => {
        axios.delete(`http://localhost:5015/beer/delete/${id}`)
            .then((response) => {
                console.log(response);
                console.log(`item deleted`);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })

    }

    const postBeer = (event) => {

        // console.log(postData);
        event.preventDefault();
        // console.log("post data:")
        // console.log(postData);

        const myPostFormData = {
            imageURL: postData.imageURL,
            beerName: postData.beerName,
            description: postData.description,
            abv: postData.abv,
            alcoholFree: postData.alcoholFree,
            beerType: postData.beerType
        }

        axios.post("http://localhost:5015/beer/create", myPostFormData)
            .then(response => {
                console.log(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
    }

    const updateBeer = (mapValueOfId) => {
        // event.preventDefault();
        // const idToUpdate = document.querySelector('#updateId');
        // const myValue = document.querySelector("#bevSubmit");
        console.log("this one", mapValueOfId);
        // console.log(myValue);
        // console.log(idToUpdate.value);

        const myUpdateFormData = {
            imageURL: postData.imageURL,
            beerName: postData.beerName,
            description: postData.description,
            abv: postData.abv,
            alcoholFree: postData.alcoholFree,
            beerType: postData.beerType
        }

        axios.put(`http://localhost:5015/beer/update/${mapValueOfId}`, myUpdateFormData)
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            setLoaded(true);
            setError(error);
        })

    }

    //gets the value of the input fields for the create form
    const inputBoxValue = (event) => {
        const newData = { ...postData };
        // console.log("1", event.target.id)
        // console.log("2", event.target.value)
        newData[event.target.id] = event.target.value;
        setPostData(newData);
        // console.log(newData);
        // console.log(newData[event.target.id] = event.target.value)
    }

    // const funct = (i) => {
    //     const myValue = document.querySelector("#bevSubmit") 
    //         console.log(i);
    //         }
           
       
    




    if (error === true) {
        return <h2>Oops,theres been an error please refresh the page</h2>
    } else if (!loaded) {
        return <h2>Please wait, data is loading</h2>
    } else {
        return (
            <div>
                <h2>Loads if the data is fine</h2>
                <input type="text" name="beerName" onChange={(event) => tempId = (event.target.value)} />
                <button type="button" onClick={() => { getBeerId(tempId) }}>
                    Get Beer by Id
                </button>
                <input type="text" name="deleteId" onChange={(event) => tempId = (event.target.value)} />
                <button type="button" onClick={() => { deleteBeerId(tempId) }}>
                    Delete beer by Id
                </button>

                {/* <form onSubmit={submit}>
                    <h2>Add a beer to the database</h2>
                    <input placeholder="beer name" type="text" id="beerName" onChange={(event) => update(event)} value={postData.beerName} />
                    <br></br>
                    <input placeholder="description" type="text" id="description" onChange={(event) => update(event)} value={postData.description}/>
                    <br></br>
                    <input placeholder="image" type="text" id="image" onChange={(event) => update(event)} value={postData.image}/>
                    <br></br>
                    <input placeholder="abv" type="text" id="abv" onChange={(event) => update(event)} value={postData.abv}/>
                    <br></br>
                    <input placeholder="alcohol Free" type="text" id="alcoholFree" onChange={(event) => update(event)} value={postData.alcoholFree}/>
                    <br></br>
                    <input placeholder="beer type" type="text" id="beerType" onChange={(event) => update(event)} value={postData.beerType}/>
                    <br></br>
                    <button type="submit">submit</button>
                    <button type="reset">reset</button>
                </form> */}


                <form onSubmit={postBeer}>
                    <h2>Add a beer to the database</h2>
                    <input placeholder="imageURL" type="text" id="imageURL" onChange={(event) => inputBoxValue(event)}/>
                    <br></br>
                    <input placeholder="beer name" type="text" id="beerName" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="description" type="text" id="description" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="abv" type="text" id="abv" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="alcohol Free" type="text" id="alcoholFree" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="beer type" type="text" id="beerType" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <button type="submit">submit</button>
                    <button type="reset">reset</button>
                </form>

                <form onSubmit={updateBeer}>
                    <h2>Update a beer in the database</h2>
                    {/* <input placeholder="updateId" type="text" id="updateId" onChange={(event) => inputBoxValue(event)} />
                    <br></br> */}
                    <input placeholder="imageURL" type="text" id="imageURL" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="beer name" type="text" id="beerName" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="description" type="text" id="description" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="abv" type="text" id="abv" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="alcohol Free" type="text" id="alcoholFree" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    <input placeholder="beer type" type="text" id="beerType" onChange={(event) => inputBoxValue(event)} />
                    <br></br>
                    {/* <button type="submit">submit</button> */}
                    <button type="reset">reset</button>
                </form>

                {beerData.map((beer) => {
                    // console.log(beer._id); need to map through arrays to get the ids
                    // console.log(beer.beerName);
                    const i = beer._id;
                    // console.log("id", i);
                    return (
                    <div>
                    <Beer imageURL={beer.imageURL.toString()} beerName={beer.beerName.toString()} description={beer.description.toString()} abv={beer.abv.toString()} alcoholFree={beer.alcoholFree.toString()} beerType={beer.beerType} />
                    <button type="submit" id="bevSubmit" onClick={() => updateBeer(i)}>click to update with the form value</button>
                    </div>) 
                })}
            </div>
        )
    }
}

export default Bar;
