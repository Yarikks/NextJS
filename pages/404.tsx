import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className={styles.error_centered}>
        <h1 className={styles.error_color}>Error 404</h1>
        <p>
          Please{" "}
          <Link href={"/"}>
            <a>go back</a>
          </Link>{" "}
          to safety
        </p>
      </div>
    </MainLayout>
  );
}
