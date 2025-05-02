import { PropsWithChildren, ReactNode } from "react";

export default function Layout({
  children,
  info,
  statistics,
}: PropsWithChildren & { info: ReactNode; statistics: ReactNode }) {
  return (
    <div className="p-4">
      {children}
      {info}
      {statistics}
    </div>
  );
}
