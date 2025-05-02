import Link from "next/link";

export default async function Page() {
  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await wait(5000);
  return (
    <h1>
      Dashboard Page
      <Link href="/dashboard/settings">Settings</Link>
    </h1>
  );
}
