import js from "@eslint/js";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
    const [numPost, setNumPost] = useState(0)

    useEffect(() => {
        const fetchCount = async () => {
            const res = await fetch("http://localhost:8080/api/posts/stats/count")
            const json = await res.json()
            setNumPost(json)
        }
        fetchCount()
    }, [])

    return (
        <div style={{ padding: 20 }}>
            <h2>Blog</h2>
            <h4>Num post: {numPost}</h4>
            <Outlet />
        </div>
    );
}
export default Posts