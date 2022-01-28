import React, {useState} from "react";
import axios from "axios";

function Bar() {
    const url = "http://localhost:5015/beer/create"
    const [data, setData] = useState({
        beerName: "",
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            beerName: data.beerName
        })
        .then(res=> {
            console.log(res.data)
        })
    }


    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return(
        <div>
            <form>
                <input onChange={(e) => handle(e)} id="beerName" value={data.beerName} placeholder="beerName" type="text"/>
            </form>
        </div>
    )
}