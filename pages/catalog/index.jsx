import Head from "next/head";
import styles from "./Catalog.module.css";
import { Layout } from "../../components/Layout";
import { Section } from "./Section";
const Catalog = () => {
  return (
    <>
      <Head>
        <title>Grossery | Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={styles.slider}>
          <img src="./img/Sliders.png" />
        </section>
        <Section header="Акции" />
      </Layout>
    </>
  );
};
export default Catalog;
