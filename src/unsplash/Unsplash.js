import React, { useState } from "react";
import myData from './data';

export default function Unsplash() {

    const [unsplashData, setUnsplashData] = useState(myData);
    const [filterStore, setFilterStore] = useState([]);
    const [show, setShow] = useState(false);

    const displayCat = unsplashData.map((data) => {
        return data.category
    })

    const newArr = [...new Set(displayCat)]

    const handleFill = (catlog) => {
        setShow(true)
        const filterData = unsplashData.filter((data) => data.category === catlog)
        setFilterStore(filterData)
    }


    // console.log(newArr)

    return(
        <React.Fragment>
            {/* <span  }>{newArr.join(" || ")}</h1> */}
            {newArr.map((data) => {
                return(
                    <span key={data} onClick={()=> handleFill(data)} style={{fontSize:"30px"}}>{data+" !*! "}</span>
                )
            })}
            {show ?
            <div>
                {filterStore.map((data) => {
                return(
                        <div key={data.id}>
                            <img width="200px" height="200px" src={data.url} alt="no" />
                        </div>
                    )
                })}
            </div>
            :
            <div>
                 {unsplashData.map((data) => {
                    return(
                        <div key={data.id}>
                            <img width="200px" height="200px" src={data.url} alt="no" />
                        </div>
                    )
                  })}
            </div>
            }
            
        </React.Fragment>
    )
}