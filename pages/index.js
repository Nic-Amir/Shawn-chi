import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  console.log();
  return (
    <div className="bg-black">
      <Head>
        <title>Shawn-Chi Hero Codex</title>
      </Head>

      <main>
        <Header />
        <Nav />
        {/*about */}
      </main>
    </div>
  );
}
