import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/protected">Reload Issue</Link>
      <Link href="/infinite-loop">Infinite Loop</Link>
      <Link href="/unprotected">Unprotected</Link>
    </div>
  );
}
