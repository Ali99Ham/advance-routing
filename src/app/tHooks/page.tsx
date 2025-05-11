"use client";
import { Suspense, use, useActionState } from "react";
import CustomComponent from "./CustomComponent";
import { handleSubmit } from "./actions";
import CustomSubmit from "./CustomSubmit";
import Optimistic from "./Optimistic";

export default function Page({ searchParams }: { searchParams?: Promise<{ id: string }> }) {
  const searchParamsObj = searchParams ? use(searchParams) : { id: "" }; // it is used inside a condition
  const [state, formAction, isPending] = useActionState(handleSubmit, undefined);
  console.log("state", state);
  console.log("isPending", isPending);
  return (
    <div>
      {searchParamsObj?.id}
      <Suspense fallback="..loading">
        <CustomComponent id={searchParamsObj.id} />
      </Suspense>

      <form action={formAction}>
        <input name="email" type="email" placeholder="email..." defaultValue="Value returned from hte server" />
        <CustomSubmit />
      </form>
      <div>
        <Optimistic />
      </div>
    </div>
  );
}
