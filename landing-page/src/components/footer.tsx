import React from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.lastItem}>
      <section className={styles.container}>
        <div>
          <ul className={styles.list1}>
            <li><h3 className={styles.headings}>Connect with us</h3></li>
            <li> <Link href="#">Link1</Link> </li>
            <li> <Link href="#">Link2</Link> </li>
            <li> <Link href="#">Link3</Link> </li>
            <li> <Link href="#">Link4</Link> </li>
          </ul>
        </div>
        <div>
          <ul className={styles.list1}>
            <li><h3 className={styles.headings}>Connect with us</h3></li>
            <li> <Link href="#">Link1</Link> </li>
            <li> <Link href="#">Link2</Link> </li>
            <li> <Link href="#">Link3</Link> </li>
            <li> <Link href="#">Link4</Link> </li>
          </ul>
        </div><div>
          <ul className={styles.list1}>
            <li><h3 className={styles.headings}>Connect with us</h3></li>
            <li> <Link href="#">Link1</Link> </li>
            <li> <Link href="#">Link2</Link> </li>
            <li> <Link href="#">Link3</Link> </li>
            <li> <Link href="#">Link4</Link> </li>
          </ul>
        </div><div>
          <ul className={styles.list1}>
            <li><h3 className={styles.headings}>Connect with us</h3></li>
            <li> <Link href="#">Link1</Link> </li>
            <li> <Link href="#">Link2</Link> </li>
            <li> <Link href="#">Link3</Link> </li>
            <li> <Link href="#">Link4</Link> </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer