import { useState, useContext } from "react"
import UserContext from '../UserContext'

const Login = () => {

    const { userInfo, setUserInfo } = useContext(UserContext)

    const handleChange = event => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value })
      }
    
      const handleSubmit = event => {
        event.preventDefault()
        console.log(userInfo)
        setUserInfo(userInfo)
      }
    
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'> Username: </label>
                <input
                    id='username'
                    type='text'
                    placeholder='username'
                    onChange={handleChange}
                    value={userInfo.username}
                ></input>
                <button> Log In </button>
                <button> Log Out </button>
            </form>
        </div>
    )
}

export default Login
