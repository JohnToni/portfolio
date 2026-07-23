/*

import { useEffect, useState } from "react"

export function RandomUser(){
    
    const [user, setUser] = useState(null)

    useEffect( () => {
        //faccio qualcosa
        fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then((data) => setUser(data.results[0]))
    }, [])

    return (
        <div>
            <h2>Utente Casuale:</h2>
            {
                user ? 
                <div class="flex py-4 first:pt-0 last:pb-0">
                    <img src={user.picture.large} alt="User" class="h-30 w-0 rounded-full" />
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>Email: {user.email}</p>
                </div>
                :
                <p>Caricamento...</p>
            }
        </div>
    )
}

*/