// src/components/Feed/PostInput.jsx
import React, { useState } from "react";
import { Send } from "lucide-react";
import Button from "../ui/Button";
import NewPost from "./NewPost";
export default function PostInput() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="bg-whitee rounded-xl flex items-center px-4 py-2 shadow border border-cardBorder mb-2">
      {/* Profile image */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile avatar"
        className="h-10 w-10 rounded-full mr-3" />
      {/* Input box */}
      <input
        type="text"
        placeholder="Share an update with your peers..."
        className="flex-1 bg-whitee rounded-lg border border-cardBorder px-4 py-2 focus:outline-none focus:border-bluee text-gray-500"
      />
      {/* Post button */}
      <Button className="ml-3 bg-bluee text-whitee" onClick={() => {
        setOpenModal(true)
      }}>
        <div className="flex justify-center ">
          <Send size={18} className="mr-1" />
          Post
        </div>
      </Button>
      {openModal && <NewPost />}
    </div>
  );
}
