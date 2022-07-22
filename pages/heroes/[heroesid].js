import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import React from "react";
import { useRouter } from "next/router";
import Detail from "../../components/Detail";

export default function HeroDetails() {
  const router = useRouter();
  const heroId = router.query.heroesid;

  return (
    <div>
      <Head>
        <title>Shawn-Chi Hero Codex</title>
      </Head>

      <main className="bg-black">
        <Header />
        <div className="text-white"></div>
        <Detail value={heroId} />
      </main>
    </div>
  );
}
