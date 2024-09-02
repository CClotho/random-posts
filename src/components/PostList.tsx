import { getPosts } from "../api/fetchPosts"
import { useState, useEffect } from "react"
import { PostSchema } from "../api/staticData"
import Post from "./Posts";

export default function PostList(): React.JSX.Element {
    const [list, setList] = useState<PostSchema[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
        setLoading(true);
    
        async function fetchData() {
            try {
                const { data, status } = await getPosts();
                if (status === 200) {
                    setList(data.posts);
                }
            } catch (error) {
                console.error("This is the error", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
    
        // Simulating delay with setTimeout
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 3000);
    
        // Clean up timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to run once on mount
    

   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occurred!</p>;
    
    return (
        <div className="posts-container">
       {/*  {loading && <div> Loading...</div>}
        {error && <div> Error Occurred</div>} */}

        {list.length > 0 && !loading && list.map((p, index) => {
            return(
                <div key={index}>
                <Post title={p.title} body={p.body}/>
                </div>
            )
        })}

        {list.length < 0 && !loading && error && <div> No Posts Available.</div>}
         

        </div>
    )
}                                                                                   