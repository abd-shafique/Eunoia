"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center">
      <Head>
        <title>My Portfolio | Home</title>
        <meta name="description" content="Home Page" />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto p-5"
      >
        <div className="flex justify-center">
          <UserIcon className="h-16 w-16 text-blue-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mt-5">Welcome! My name is Abdullah Shafique</h1>
        <p className="mt-3 text-gray-600">
          I am a software engineer with a 4-year track record in the industry!
          Explore my projects, learn more about my background, and get in touch!{" "}
        </p>
        <button
          className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          onClick={() => (window.location.href = "/projects")}
        >
          View Projects
        </button>
      </motion.div>
    </div>
  );
}
