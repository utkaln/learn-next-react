import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className={styles.center}>
      <div className={styles.card}>Page Not Foubd</div>
      <Link href="/">Home</Link>
    </div>
  );
}
