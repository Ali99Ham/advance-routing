export default async function Page() {
  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await wait(2000);
  throw new Error("error");
  return <h1>Statistics Page</h1>;
}
