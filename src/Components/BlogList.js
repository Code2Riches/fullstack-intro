import BlogListCard from "./BlogListCard";

//Component "BlogList"
const BlogList = (props) => {
    
    
    return (
      <div>
          {/* "maps" through the "blogs" array coming from the "props" & returns a "BlogListCard" in the map for every blog in the array of blogs. */}
        {props.blogs.map((blog, index) => {
            return (
                // Passes in the "blog" parameter as a prop to the "BlogListCard".
                <BlogListCard blog={blog} key={index} />
            )
        })}
      </div>
    )
  }

  export default BlogList;