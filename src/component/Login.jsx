import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login({setUsername}) {
    const [req, setReq] = useState({
        username: "",
        password: ""
    })
    const onChange = (e) => {
        const {name, value} = e.target
        setReq((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const navigate = useNavigate()
    return (
        <div>
            <input type={'text'} name='username' onChange={onChange}/>
            <hr/>
            <input type={'text'} name='password' onChange={onChange}/>
            <hr/>
            <button onClick={() => {
                 fetch("http://localhost:8080/api/auth/login", {body: JSON.stringify(req),  headers: {
                    "Content-Type": "application/json"
                  }, method: "POST"})
                 .then(data => {
                    setUsername(req.username)
                    navigate(-1)
                 })
                 .catch(err => {
                    alert("Username or password not match")
                 })
                
            }}>Submit</button>
        </div>
    )
}
export default Login