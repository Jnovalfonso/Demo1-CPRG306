import Link from "next/link";

export default function Page() {
  return (
  <main>
    <h1>Web Dev 2 Demos</h1>
    <p>These are the demos for Web Dev 2!</p>
    <ul>
      <li>
        <Link href="/week-2">Week 2</Link>
      </li>
    </ul>
  </main>
  );
}