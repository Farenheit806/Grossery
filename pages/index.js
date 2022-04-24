import Head from "next/head";
import { Layout } from "../components/Layout";

const Home = () => (
  <>
    <Head>
      <title>Grossery | Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h1>Home</h1>
    </Layout>
  </>
);
export default Home;
