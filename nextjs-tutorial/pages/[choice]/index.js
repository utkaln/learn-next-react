import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function ChoiceHomePage() {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <h1>
        This is Home page of dynamically created folder for the route you
        entered:
      </h1>
      <section>
        <h1>{JSON.stringify(router.query)}</h1>
      </section>
    </div>
  );
}
