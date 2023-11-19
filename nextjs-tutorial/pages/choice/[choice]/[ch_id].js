import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function ChoiceDynamicPage() {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <h1>
        This is a Dynamically generated page under Dynamic Folder for the route
        you entered:
      </h1>
      <section>
        <h1>{JSON.stringify(router.query)}</h1>
      </section>
      <Link href="/">Home</Link>
    </div>
  );
}
