import { useState, useContext } from "react"
import UserContext from "./UserContext"
import "./App.css"
import Header from "./components/Header"
import Home from './components/Home'

function App() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    lastLogin: ''
  })

  

    return (
        <div>
            <div className='main'>
                <UserContext.Provider value={{ userInfo, setUserInfo }}>
                    <Home />
                    <Header />
                </UserContext.Provider>
            </div>
        </div>
    )
}

export default App
