import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavigationHome() {
  const router = useRouter();
  function buttonHandler() {
    router.push({
      pathname: "/links/[link_id]",
      query: { link_id: "from_navigation" },
    });
  }

  return (
    <div className={styles.card}>
      <h1>Navigation Home Page</h1>
      <button onClick={buttonHandler}>Go to Links</button>
      <Link href="/">Home</Link>
    </div>
  );
}
