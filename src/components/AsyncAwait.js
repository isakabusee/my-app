import React, { useState,useEffect } from "react";

const AsyncAwait = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

   useEffect(() => {
       fetchData()
   }, [])

    return(
    <div>
        {users.length > 0 && (
            <ul>
                {users.map(user => (
                    <>
                    <li key={user.id}>{user.name}</li>
                    <li >{user.email}</li>
                    <li>{user.username}</li>
                    </>
                ))}
            </ul>
        )}
    </div>
        )
}

export default AsyncAwait