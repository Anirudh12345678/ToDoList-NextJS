import Image from "next/image";
import Link from "next/link";
import CreateNote from "./notes/CreateNode";

export default function Home() {
  return (
      <div>
        <p>Heloo</p>
        <Link href="/notes">Go to notes</Link>
      </div>
  );
}
