import Head from "next/head";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";
import styles from "@/styles/home.module.css";
import { GetStaticProps } from "next";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../services/firebaseConnection";

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
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
            <span className={styles.span}>+{posts} post</span>
          </section>
          <section className={styles.box}>
            <span className={styles.span}>+{comments} comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const commentRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");

  const commentSnapshot = await getDocs(commentRef);
  const postSnapshot = await getDocs(postRef);

  return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60,
  };
};
