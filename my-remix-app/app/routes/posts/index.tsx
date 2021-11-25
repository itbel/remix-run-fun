import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

export let loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          const id = post.id.toString();
          return (
            <li key={id}>
              <Link to={id}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
