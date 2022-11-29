import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LawsApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ¡Bienvenido a <a href="#">LawsApp!</a>
        </h1>

        <p className={styles.description}>
          Para comenzar la consulta elija alguno de los siguientes módulos:
        </p>

        <div className={styles.grid}>
          <a href="/laws" className={styles.card}>
            <h2>LEYES &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>REGLAMENTOS &rarr;</h2>
            <p>Etiam id magna eget urna luctus venenatis tempus.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>DECRETOS &rarr;</h2>
            <p>Integer vitae lectus quis ex pretium malesuada. .</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>ACUERDOS &rarr;</h2>
            <p>Pellentesque interdum nec lectus vitae lobortis.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Desarrollado por BUSYS International
          {/*
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          */}
        </a>
      </footer>
    </div>
  );
}
