import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home=()=>{
    const [ data,isLoading ,error] = useFetch('https://awesomeblog-backend-1.onrender.com/blogs')
    const blogs=data;
    console.log(blogs);
    // function setttingData(data){setBlogs(data)};
   
    return(
        <div className="home">
            <h1>Home Content</h1>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogsArray={blogs} title="All Blogs"/>}
        </div>);
};

export default Home;