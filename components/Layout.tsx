import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import styles from '@/styles/Home.module.css'

function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;