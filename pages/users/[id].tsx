import Link from "next/link";
import styles from '@/styles/Home.module.css'

export const getServerSideProps = async (context: any) => {
  // console.log('context ', context)
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      user: data
    }
  }
}

function User({user}: {user: any}) {
  return user ? (
    <div className={styles.user}>
      <h1>{user.id}.</h1>
      <h1>{user.name}</h1>
    </div>
  ) : (<div>Loading...</div>)
}

export default User;