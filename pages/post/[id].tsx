import Link from "next/link";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost;
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `${process.env.API_URL}/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  // if post hasn't been downloaded yet.
  if (!post) {
    return <Loading />;
  }

  return (
    <MainLayout title={post.title}>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={"/posts"}>
        <a className="btn btn_mainColor">Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

// server and client side rendering
Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: MyPost = await response.json();

  return {
    // post is same as - post: post
    post,
  };
};

// only server-side rendering
// export async function getServerSideProps({query, req}){
//     if(!req){
//         return {post: null}
//     }

//     const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
//     const post = await response.json()

//     return {
//         props: {post}
//     }
// }
