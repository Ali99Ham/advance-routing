import { PropsWithChildren, ReactNode } from "react";

export default function Layout({ children, detail }: PropsWithChildren & { detail: ReactNode }) {
  return (
    <div className="p-4">
      {children}
      <br />
      {detail}
    </div>
  );
}
