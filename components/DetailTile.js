import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DetailTile({ hero }) {
  const router = useRouter();
  if (!hero) {
    return <div>Loading</div>;
  }
  return (
    <div
      onClick={() => router.push(`/heroes/${hero.id}`)}
      className="group hover:shadow-2xl hover:shadow-teal-200 hover:scale-110 hover:z-30 transform transition duration-250 ease-in-out my-10 cursor-pointer"
    >
      <Image
        className=""
        layout="responsive"
        src={hero.images.md}
        height={200}
        width={100}
      />
      <div className="p-3 flex-column items-center group-hover:text-white">
        <h2 className="text-white text-2xl">{hero.name}</h2>
        <p>{hero.biography?.fullName}</p>
        <p className="">{hero.appearance?.race}</p>
      </div>
    </div>
  );
}
