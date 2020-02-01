import React from "react";
import Link from "next/link";
import Counter from "../src/components/Counter";

function index() {
  return (
    <div>
      <Counter />

      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}

export default index;
