import Link from "next/link";
import styles from '@/styles/Home.module.css'

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  console.log('\n\n...getStaticPaths')
  const paths = data.map((i: any) => ({
    params: {id: i.id.toString()}
  }))
  return {paths, fallback: false}
}

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  console.log('\n\n...getStaticProps, id: ', id)

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data
    }
  }
}

function Post({post}: {post: any}) {
  return post ? (
    <div className={styles.user}>
      <h1>{post.id}.</h1>
      <h1>{post.title}</h1>
    </div>
  ) : (<div>Loading...</div>)
}

export default Post;