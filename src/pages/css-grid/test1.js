import { MdViewHeadline } from "react-icons/md";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import Head from "next/head";
export default function Test1() {
  return (
    <>
      <Head>
        <title> Tailwindcss yt clone </title>
      </Head>
      <div className="grid font-['Open Sans'] grid-cols-layout dark:bg-gray-700 grid-rows-main h-screen">
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
}
