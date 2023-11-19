import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function SubDefaultPage() {
  return (
    <div className={styles.card}>
      <h1>This is Default Landing Page under Sub</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
