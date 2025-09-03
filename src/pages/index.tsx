import Head from "next/head";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Bem-vindo ao Tarefas+, sua ferramenta definitiva para organizar e
          gerenciar suas tarefas diárias com eficiência e facilidade!
        </h1>
        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span className={styles.span}>+12 pots</span>
          </section>
          <section className={styles.box}>
            <span className={styles.span}>+90 comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}
