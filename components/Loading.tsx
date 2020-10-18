import { MainLayout } from "./MainLayout";

export default function Loading() {
  return (
    <MainLayout>
      <div className={"loading"}>
        <img src="https://i.pinimg.com/originals/51/77/40/5177402f9a223466db995ed7c25a6311.gif" />
      </div>
    </MainLayout>
  );
}
