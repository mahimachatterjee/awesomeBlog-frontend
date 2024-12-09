import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetail=()=>{
    const parms=useParams();
    const {id}=parms;
    const navigate=useNavigate();
    const [ data, error, isLoading ] = useFetch('https://awesomeblog-backend-1.onrender.com/blogs/perticular/' + id);
    const blog=data;
    const handleClick = () => {
        fetch('https://awesomeblog-backend-1.onrender.com/blog/delete/' + id, {
          method: 'DELETE'
        }).then(() => {
          console.log("Deleted")
          navigate('/');
        }) 
      }
      return (
        <div className="blog-details">
          { isLoading && <div>Loading...</div> }
          { error && <div>{ error }</div> }
          { blog && (
            <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.content }</div>
              <button onClick={handleClick}>delete</button>
            </article>
          )}
        </div>
      );
};

export default BlogDetail;