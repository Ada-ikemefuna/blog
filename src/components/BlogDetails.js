const BlogDetails = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="home_content container">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog_preview" key={blog.id}>
                    <h1 className="title"> {blog.title}</h1>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogDetails;