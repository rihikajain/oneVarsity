import React from "react";
import Button from "../ui/Button";
import { Search, Bell, Calendar } from "lucide-react";

export default function SearchBar({ user }) {
  return (
    <section className="fixed top-16 left-0 w-full bg-white z-40 shadow flex items-center justify-between p-3 px-3 h-15">
      {/* Search Input */}
      <div className="relative flex w-full items-center">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder=" Search for courses, people..."
          className="flex-1 bg-whitee rounded-lg border border-cardBorder px-4 py-2 pl-9  focus:outline-none focus:border-bluee text-gray-500"
        />
      </div>

      {/* Actions */}
      <div className="flex w-96 items-center justify-end space-x-4 ml-8">
        <Button className="bg-cardBg text-black"><Bell size={18} /></Button>
        <Button className="bg-cardBg text-black"><Calendar size={18} /></Button>
        <Button>
          {user}
        </Button>
      </div>
    </section>
  );
}
