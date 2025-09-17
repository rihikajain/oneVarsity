import React, { useState } from "react"
import LeftSidebar from "../components/Sidebar/LeftSidebar"
import RightSidebar from "../components/Sidebar/RightSidebar"
import MainFeed from "../components/Feed/MainFeed"

export default function Home({ user, openModal, setOpenModal }) {
  return (
    <>
      <main className="bg-cardBg pt-34 px-3 grid grid-cols-12 gap-6 ">
        <aside className="col-span-12 md:col-span-3 m-0">
          <LeftSidebar />
        </aside>
        <section className="col-span-12 md:col-span-6">
          <MainFeed openModal={openModal} setOpenModal={setOpenModal} />
        </section>
        <aside className="col-span-12 md:col-span-3">
          <RightSidebar user={user} />
        </aside>
      </main>
    </>
  )
}