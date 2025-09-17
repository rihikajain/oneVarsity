import React, { useState } from "react";
import Button from "../ui/Button";
import { Heart, MessageCircle, Share } from "lucide-react";

export default function ({ name, designation, profile, post, caption, like, comments }) {

  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(like || 0)

  function toggleLike() {
    if (liked)
      setLikeCount(likeCount - 1)
    else setLikeCount(likeCount + 1)
    setLiked(!liked)
  }



  return (
    <>

      <div className="bg-whitee w-full p-4 flex-col rounded-xl shadow mt-0 mb-2">
        <div className="flex  items-center ">
          <img src={profile}
            alt={name}
            className="h-7 w-7 rounded-full mr-3 "
          />
          <div className="flex flex-col ml-3">
            <span className="font-semibold text-sm">{name}</span>
            <span className="text-xs text-gray-400">{designation}</span>
          </div>
        </div>
        <div className="text-sm">{caption}</div>
        <img src={post} alt="error!" className="w-full rounded-xl mt-1 " />
        <div className="mt-3 ">
          <Button className="bg-cardBg text-black ml-2 " onClick={toggleLike}>
            <div className="flex justify-center  ">
              <Heart size={18} className={`mr-1 ${liked ? "fill-red-500 stroke-red-500" : ""}`} />
              Like {likeCount > 0 && `${likeCount}`}
            </div>
          </Button>
          <Button className="bg-cardBg text-black ml-2" >
            <div className="flex justify-center ">
              <MessageCircle size={18} className="mr-1" />
              Comment {comments}
            </div>
          </Button>
          <Button className="bg-cardBg text-black ml-2">
            <div className="flex justify-center ">
              <Share size={18} className="mr-1" />
              Share
            </div>
          </Button>
        </div>
      </div>



    </>
  )
}