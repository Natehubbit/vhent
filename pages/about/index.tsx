import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "./style.module.css";

const AboutPage = () => (
  <div className={styles.div}>
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  </div>
);

export default AboutPage;
