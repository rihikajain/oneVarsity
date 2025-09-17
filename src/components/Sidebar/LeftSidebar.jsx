import React from "react"
import highlights from "./Highlights"
import Button from '../ui/Button'
function Card({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4 border-2 border-cardBorder relative">
      <div className="flex items-center mb-3 space-x-2">

        <Button className="bg-cardBg">
          <Icon className="text-black" size={20} />
        </Button>

        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="text-gray-700 text-sm">{children}</div>
      <span className="text-black cursor-pointer bg-gray-300 pl-1 pr-1 text-xs absolute bottom-2 right-3 w-fit ">View more</span>
    </div>
  )
}


export default function LeftSidebar() {
  return (

    <aside className=" bg-white w-full max-w-xl  shadow mb-4 border-2  border-cardBorder  rounded-xl p-4">
      <div className="flex items-center ">
        <span className="font-semibold text-lg ml-1 mb-4" >Highlights</span></div>
      {highlights.map(({ id, icon, title, content }) => (
        <Card key={id} icon={icon} title={title}>
          {content}
        </Card>
      ))}
    </aside>
  )
}
