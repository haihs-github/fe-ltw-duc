import { useState } from "react"
import { useNavigate } from "react-router-dom"


function PostCreate() {
    const [req, setReq] = useState({
        title: "",
        slug: "",
        description: ""
    })
    const onChange = (e) => {
        const {name, value} = e.target
        setReq((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div>
            slug: <input type={'text'} name='slug' onChange={onChange} value={req.slug}/>
            <hr/>
            title:<input type={'text'} name='title' onChange={onChange} value = {req.title}/>
            <hr/>
            description:<input type={'text'} name='description' onChange={onChange} value={req.description}/>
            <hr/>
            <button onClick={() => {
                 fetch("http://localhost:8080/api/posts", {body: JSON.stringify(req),  headers: {
                    "Content-Type": "application/json"
                  }, method: "POST"})
                 .then(() => {
                    setReq({
                        title: "",
        slug: "",
        description: ""
                    })
                 })
                 .catch(err => {
                    alert("Errrrrrrrrrrrrrrrrrrrrrrrrrrr")
                 })
                
            }}>Submit</button>
        </div>
    )
}
export default PostCreate