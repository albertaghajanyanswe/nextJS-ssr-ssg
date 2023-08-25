import Link from "next/link";
import styles from '@/styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.root}>
      <Link className={styles.link} href='/home'>Home</Link>
      <Link className={styles.link} href='/users'>Users</Link>
      <Link className={styles.link} href='/posts'>Posts</Link>
    </div>
  )
}

export default Navbar;