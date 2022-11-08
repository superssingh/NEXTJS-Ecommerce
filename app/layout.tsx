import "../styles/globals.css";
import { Lato } from "@next/font/google";
import Navbar from "./navbar";
const customFont = Lato({ weight: "400" });

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.className}>
      <head></head>
      <body className="bg-slate-200/50">
        <Navbar></Navbar>
        <main className="p-4 my-2">{children}</main>
      </body>
    </html>
  );
}
