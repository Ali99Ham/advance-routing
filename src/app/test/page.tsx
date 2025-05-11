import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense key={1}>
        <p>First suspense</p>
      </Suspense>
    </div>
  );
};

export default Page;
