import Link from "next/link";

export const getStaticProps = async (context: any) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts: data
    }
  }

}
function Posts({posts}: {posts: any}) {
  return (
    <div>
      {posts.map((i: any) => (
        <div key={i.id} style={{marginTop: '8px'}}>
          <li><Link href={`posts/${i.id}`}>{i.title}</Link></li>
        </div>
      ))}
    </div>
  )
}

export default Posts;