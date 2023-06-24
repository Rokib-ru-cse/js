import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Head from 'next/head';
export default function Home() {
  return (
<>
    <Head>
      <title>NinjaList | Home</title>
      <meta name="keywords" content='ninjas'/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.</p>
      <Link href="/ninjas"><a className={styles.btn}>NinjaList</a></Link>
    </div>
  </>
  )
}
