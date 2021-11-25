import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost, Post } from "~/post";

export let loader: LoaderFunction = async ({ params }) => {
    const id = params?.slug?.toString() ?? ''
    const post = await getPost(id)
  return post;
};

export default function PostSlug() {
  let post = useLoaderData<Post>();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}