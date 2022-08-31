import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Grid Testing</title>
        <meta name="description" content="css grid testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {" "}
        <h1> Home Page </h1>{" "}
      </header>
    </div>
  );
}
