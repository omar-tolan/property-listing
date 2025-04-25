import { Navbar } from "@/ui/nav";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="pt-32"> {children}</div>
    </main>
  );
}
