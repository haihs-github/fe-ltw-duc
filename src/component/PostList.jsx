import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPosts from "../model/model";

function PostList() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)
    const [posts, setPosts] = useState()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://localhost:8080/api/posts")
                const data = await resp.json()
                console.log("json: ", data)
                setPosts(data)
            } catch (err) {
                console.log("errr: ", err)
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

    return (
        <ul>
            {posts.map((post) => (
                <Link to={`${post.slug}`}>
                    <li key={post.slug}>
                        <h3>{post.title}</h3>
                    </li>
                </Link>))
            }
        </ul>
    );
}
export default PostList