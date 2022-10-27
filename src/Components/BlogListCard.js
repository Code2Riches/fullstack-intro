//Component "BlogListCard"
const BlogListCard = (props) => {
   
  
    return (
      <div>
          {/* title, author, blog info, coming in through props */}
        <h2>{props.blog.title}</h2>
        <p>{props.blog.author}</p>
        <p>{props.blog.text}</p>
      </div>
    )
  }

  export default BlogListCard;