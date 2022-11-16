import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  console.log(Date.now());
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hallo Next</h1>

      <div>
        <Link href="/products">Zu den Produkten per Link</Link>
      </div>
    </div>
  );
}