import { GetStaticProps } from "next";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import Content from "../../components/Content";

type Props = {
  items: User[];
};

const Stories = ({ items }: Props) => (
  <Layout title="vhent | Stories">
    <Content />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default Stories;
