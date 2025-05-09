import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BlogPosts from "../model/model";
function PostDetail() {
    const { slug } = useParams();
    const [postDetail, setPostDetail] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`http://localhost:8080/api/posts/${slug}`)
                const data = await resp.json()
                console.log(data)
                setPostDetail(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])


    if (loading) {
        return <h1>Loading...............</h1>
    }
    if (error) {
        return <h1 style={{ color: "red" }}>Error: {JSON.stringify(error)}</h1>
    }

    return (<div style={{ padding: 20 }}> <h3>{postDetail.title}</h3> <p>{postDetail.description}

    </p> </div>

    );
}
export default PostDetail