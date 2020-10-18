import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About({ title }) {
  // const linkClickHandler = (url) => {
  //   Router.push(url);
  // };

  return (
    <MainLayout title={title}>
      <h1>{title}</h1>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();

  return {
    title: data.title,
  };
};
