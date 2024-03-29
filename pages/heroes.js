import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import List from "../components/List";

export default function heroes() {
  return (
    <div>
      <Head>
        <title>Shawn-Chi Hero Codex</title>
      </Head>

      <main className="bg-black">
        <Header />
        <Nav />
        <List />
      </main>
    </div>
  );
}
