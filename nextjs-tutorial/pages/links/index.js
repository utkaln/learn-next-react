import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function LinkHome() {
  // The list of ids and values can come from database
  const pageList = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" },
    { id: 4, name: "Fourth" },
  ];

  return (
    <div className={styles.card}>
      <h1>Dynamic Link Renderer Default Page</h1>
      <ul>
        {pageList.map((page) => (
          <li>
            <Link href={`/links/${page.id}`}>{page.name}</Link>
          </li>
        ))}
        <li>
          <Link href={`/`}>Home</Link>
        </li>
      </ul>
    </div>
  );
}
