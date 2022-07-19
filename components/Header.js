import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div className=" text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="flex flex-col sm:flex-row m-5 justify-between h-auto">
        <button className="flex item-center space-x-2 hover:text-gray-50">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <div>
          <h1>Shawn-chi + Logo</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
