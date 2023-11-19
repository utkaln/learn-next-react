import { useRouter } from "next/router";
import Link from "next/link";

export default function SubPage() {
  const router = useRouter();

  return (
    <div>
      <h1>
        This is a Dynamically generated page under sub for the route you
        entered:
      </h1>
      <section>
        <h1>{JSON.stringify(router.query.id)}</h1>
      </section>
      <Link href="/">Home</Link>
    </div>
  );
}
