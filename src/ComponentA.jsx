import { createContext, useState } from "react"
import ComponentB from "./ComponentB"


export const UserContext = createContext()

export default function ComponentA() {

  const [user, setUser] = useState("sksoniaa")
  return(
    <>
    <div className="box">
      <h2>{`Hello ${user}`}</h2>

    <h1>A</h1>
    <UserContext.Provider value={user}>
    <ComponentB user={user}/>
    </UserContext.Provider>
    </div>
    </>
  )
}