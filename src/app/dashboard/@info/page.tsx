export default async function Home() {
  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await wait(8000);
  return <h1>Info Page</h1>;
}
