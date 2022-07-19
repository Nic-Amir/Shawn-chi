import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import List from "../components/List";
import requests from "../utils/requests";

export default function Home(props) {
  console.log(props);
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

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.opendota.com/api/heroes`);
  const hero = await res.json();

  if (!hero) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { hero }, // will be passed to the page component as props
  };
}
