import React from "react"
import highlights from "./Highlights"
import Button from '../ui/Button'
function Card({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-3 border-2 border-cardBorder  w-full">
      <div className="flex items-center mb-3 space-x-2">

        <Button className="bg-cardBg">
          <Icon className="text-black" size={20} />
        </Button>

        <h3 className="font-semibold text-lg break-all">{title}</h3>
      </div>

      <div className="text-gray-700 relative text-sm">{children}
        <span className="text-black  cursor-pointer bg-gray-300 text-xs absolute bottom-1 right-1 w-fit h-fit px-1">View more</span>
      </div>

    </div>
  )
}


export default function LeftSidebar() {
  return (

    <aside className=" bg-white shadow mb-4 border-2  border-cardBorder w-full rounded-xl px-4 pt-2 ">
      <div className="flex items-center ">
        <span className="font-semibold text-lg ml-1 mb-4 pt-2" >Highlights</span></div>
      {highlights.map(({ id, icon, title, content }) => (
        <Card key={id} icon={icon} title={title}>
          {content}
        </Card>
      ))}
    </aside>
  )
}
