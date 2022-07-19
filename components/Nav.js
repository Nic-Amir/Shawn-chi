import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();
  return (
    <nav className="flex px-10 sm-20 text-2xl whitespace-nowrap justify-center">
      <div className="text-white">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/heroes`)}
            className="cursor-pointer transition duration-100 hover:scale-125 
          hover:text-white active:text-blue-700"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
