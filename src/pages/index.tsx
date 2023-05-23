import { type NextPage } from "next";
import Head from "next/head";
import { SignedIn, SignedOut,SignInButton,  UserButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import SideBar from "~/pages/Sidebar"
import Example from "~/pages/chart"

const Home: NextPage = () => {

  const user = useUser();

  const {data} = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar/>
      <main className="flex h-screen justify-center">
        <div className="h-full w-1/2">
          <div className="flex items-center p-2 border justify-center 
            bg-gradient-to-b from-slate-700 to-sky-800 text-slate-200 shadow-lg rounded-2xl">

          <SignedIn>
            <UserButton />
            <text className="text-stone-200 font-bold"> Personal Site</text>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          </div>
      <div className="flex justify-center w-full text-slate-50 border shadow-lg rounded-2xl">
      <Example/>
      </div>

        </div>

      </main>
   
    </>
  );
};

export default Home;
