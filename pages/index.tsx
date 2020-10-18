import CardDeck from "../components/CardDeck";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"Home Page"}>
      <div className={"center pb-4"}>
        <h1>Home Page</h1>
        <h3>My projects</h3>
      </div>
      <hr />

      <CardDeck />

    </MainLayout>
  );
}
