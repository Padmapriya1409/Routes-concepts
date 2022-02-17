import React, { useEffect, useState } from "react";

export default function UserSearch() {
    const [userSearch, setUserSearch] = useState("");
    const [userData, setUserData] = useState([]);

    //https://jsonplaceholder.typicode.com/users
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((resData) => {
            // console.log(resData);
            setUserData(resData);
        })
    }, [])

    const handleSearch = (e) => {
        setUserSearch(e.target.value)
    }
// console.log(userSearch)
    const sorting = () => {
        const filterData = userData.filter((data) => {
            return data.username.toLowerCase().includes(userSearch.toLowerCase()) 
        })
        return filterData.sort((a,b) => a.username > b.username ? 1:-1)
    }
    return(
        <React.Fragment>
            <input type="text" placeholder="Search User" onChange={handleSearch} />
            {sorting().map((data) => {
                return(
                    <div key={data.id}>
                        <h1>{data.username}</h1>
                    </div>
                )
            })}
        </React.Fragment>
    )
}