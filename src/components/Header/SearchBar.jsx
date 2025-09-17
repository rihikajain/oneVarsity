import React from "react";
import Button from "../ui/Button";
import { Bell, Calendar } from "lucide-react";

export default function SearchBar({ user }) {
  return (
    <section className="fixed top-16 left-0 w-full bg-white z-40 shadow flex items-center justify-between p-3 px-3 h-22">
      {/* Search Input */}
      <div className="flex-1 flex items-center ">
        <input
          type="text"
          placeholder="Search for courses, people..."
          className="w-full p-3 rounded-xl border-2 border-cardBorder focus:ring-blue-500 focus:border-blue-500 shadow"
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
