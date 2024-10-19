import { list } from "postcss"
import { useState, useEffect } from "react"

const Contacts = () => {

    const [contacts, setContacts] = useState(0)

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setContacts(data)
        }
        fetchData()
    },[])

  return (
    <>
        <div>
            <h1>Contact List :</h1>
            <ul>
                {contacts && contacts.map(({id, userId, title, body}) => {
                    return (
                        // <li key={id}><strong>{`${name}:`}</strong>{email} , {username}; <strong>{`Address : `}</strong>{address.street} , {address.suite} , {address.city} , {address.zipcode}</li>
                        <li key={id}><strong>id: {id} ; userId:{userId} ; title:{title}, body: {body}</strong></li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default Contacts



