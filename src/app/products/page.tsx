import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Products Page
      <Link href="/products/detail" className="text-blue-600 mx-5">
        Details{" "}
      </Link>
    </div>
  );
};

export default page;
