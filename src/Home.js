import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(res => {
                    // console.log(res);
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource.');
                    }
                    return res.json();
                })
                .then(data => {
                    setError(null);
                    setBlogs(data);
                    setIsPending(false);
                })
                .catch(err => {
                    // console.log(err.message); 
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;