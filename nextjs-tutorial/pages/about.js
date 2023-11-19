import Link from "next/link";
import styles from "@/styles/Home.module.css";
export default function About() {
  return (
    <div className={styles.main}>
      <h1>This is About Page</h1>
      <Link className={styles.a} href="/">
        Home
      </Link>
    </div>
  );
}
