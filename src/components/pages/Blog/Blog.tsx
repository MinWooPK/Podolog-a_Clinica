import { useEffect, useState } from "react";
import { client, urlFor } from "../../../lib/sanity";
import { Container } from "./Blog.style";

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage: any;
  slug: {
    current: string;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]`)
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <Container>
      <h1>Blog</h1>

      {posts.map((post) => (
        <article key={post._id}>
          <img
            src={urlFor(post.coverImage).width(500).url()}
            alt={post.title}
          />

          <h2>{post.title}</h2>

          <p>{post.excerpt}</p>

          <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
        </article>
      ))}
    </Container>
  );
};

export default Blog;
