import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

const pageList = [
  { id: "/sub", name: "Sub Navigation" },
  { id: "/links", name: "Dynamic Link Renderer" },
  { id: "/catchall", name: "Everything Else" },
  { id: "/sub/concrete", name: "Sub Defined Before" },
  { id: "/navigation", name: "Navigation Landing Page" },
  { id: "/sub/1", name: "Sub Dynamic" },
];

export default function Home() {
  return (
    <div className={styles.center}>
      <div className={styles.card}>Hello World from Next !</div>
      <ul>
        {pageList.map((page) => (
          <li>
            <Link href={page.id}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
