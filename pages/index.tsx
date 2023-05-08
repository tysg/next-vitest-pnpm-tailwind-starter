import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  return (
    <main className="w-full min-h-screen px-4 py-6 md:p-24">
      <div className="w-80 sm:w-96 flex flex-col items-center mx-auto gap-2">
        <div className={`${inter.className} w-72 flex justify-between`}>
          <h1 className={`text-2xl font-bold`}>Hello world!</h1>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
