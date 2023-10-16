import Head from "next/head";
import { SignedIn, SignedOut,SignInButton,  UserButton, useUser } from "@clerk/nextjs";
import SideBar from "./Sidebar";
import { renderPage } from "./Sidebar";
import { useState } from "react";
import Button from "./Button";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  const handleIconClick = (iconName: string) => {
    setCurrentPage(iconName);
    setIsSidebarOpen(false);
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSideBarOpen);
  };

  const pageContent = renderPage(currentPage);


  return (
    <>
      <Head>
        <title>T3rra Vis</title>
        <meta name="description" content="Web App with integrated machine learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <button
          className="fixed top-4 right-4 z-10 bg-gray-800 p-2 rounded-md text-white"
          onClick={toggleSideBar}
        >
          {isSideBarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        {isSideBarOpen && (
          <SideBar handleIconClick={handleIconClick} />
        )}
        <main className="flex flex-col flex-grow items-center max-w-2xl">
          <div className="flex items-center p-2 border justify-center bg-slate-800 text-slate-200 shadow-lg rounded-2xl">
            <SignedIn>
              <UserButton />
              <span className="text-stone-200 font-bold">Personal Site</span>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

          <div className="flex flex-grow justify-center items-center bg-slate-800 text-slate-200 border shadow-lg rounded-2xl">
            {pageContent}
          </div>
          <div className="flex flex-grow p-2 justify-center items-center bg-slate-800 border shadow-lg rounded-2xl">
            <Button />
          </div>
        


        </main>
      </div>
    </>
  );
};

export default HomePage;
