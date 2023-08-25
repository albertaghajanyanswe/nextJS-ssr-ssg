import Link from "next/link";
import { useEffect, useState } from "react";

export const getStaticProps = async (context: any) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      users: data
    }
  }
}

function Users({users}: {users: any}) {

  // const [users1, setUsers1] = useState();
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     setUsers1(data)
  //   }
  //   fetchUsers()
  // }, [])
  return (
    <div>
      {users?.map((i: any) => (
        <ul key={i.id} style={{marginTop: '8px'}}>
          <li><Link href={`users/${i.id}`}>{i.name}</Link></li>
        </ul>
      ))}
      <div>
        <form>
          <input placeholder="Email"/>
          <input placeholder="Password"/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Users;