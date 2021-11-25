export type Post = {
    userId: number;
    id: string;
    title: string;
    body: string;
  };
  
  export async function getPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(posts)
    return posts;
  }
  export async function getPost(slug: string) {
      const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
      return post;
  }