"use client";
import { ChevronRight } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-[100vh] flex justify-evenly items-center">
      <motion.div 
      className="w-1/3 flex flex-col gap-10"
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	    transition:{duration:0.5}
      }}
      >
        <div className="name-title">
          <p className="text-gray-400">you can call me</p>
          <span className="text-6xl font-bold">Termusred</span>
        </div>
        <p className="text-gray-400 tracking-wide leading-relaxed">
          Fullstack Junior Developer skilled in React.js, Node.js, and MongoDB. I build responsive, modern web apps with 1 year experience. Passionate about learning and perfecting UI/UX.
        </p>
        <button
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-green-700 rounded-md cursor-pointer border border-green-600/40 shadow-[0_0_10px_#22c55e,0_0_10px_#22c55e] hover:shadow-[0_0_20px_#22c55e,0_0_40px_#22c55e] transition-all duration-200 uppercase tracking-wide"
          onClick={() => setIsOpen(true)}
        >
          <span className="relative flex select-none">
            Message me
            <ChevronRight />
          </span>
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-6">
            <Dialog.Panel className=" text-green-400 rounded-xl p-8 w-full max-w-md border border-green-500/50 shadow-lg">
              <Dialog.Title className="text-2xl font-bold text-green-400">My socials</Dialog.Title>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center justify-between bg-gray-800/50 p-3 rounded-md hover:bg-gray-800 transition">
                  <a href="https://github.com/termusred" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <span className="text-gray-400 italic">termusred</span>
                </li>
                <li className="flex items-center justify-between bg-gray-800/50 p-3 rounded-md hover:bg-gray-800 transition">
                  <a href="https://reddit.com/crackeater" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                    <i className="fab fa-reddit"></i> Reddit
                  </a>
                  <span className="text-gray-400 italic">crackeater228</span>
                </li>
                <li className="flex items-center justify-between bg-gray-800/50 p-3 rounded-md hover:bg-gray-800 transition">
                  <a href="https://t.me/abidov" className="flex items-center gap-2 text-green-400 hover:green-teal-300">
                    <i className="fab fa-telegram"></i> Telegram
                  </a>
                  <span className="text-gray-400 italic">Shokha</span>
                </li>
                <li className="flex items-center justify-between bg-gray-800/50 p-3 rounded-md hover:bg-gray-800 transition">
                  <a href="https://t.me/abidov" className="flex items-center gap-2 text-green-400 hover:green-teal-300">
                    <i className="fab fa-telegram"></i> Instagram
                  </a>
                  <span className="text-gray-400 italic">Shokha_notnice</span>
                </li>
              </ul>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full px-4 py-2 bg-green-600 text-gray-900 rounded-md hover:bg-green-500 transition"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </motion.div>
      <motion.div 
      className="w-1/3"
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	    transition:{duration:0.5}
      }}
      >
        <img
          src="https://github.com/termusred.png"
          alt="profile"
          className="rounded-full w-full max-w-[300px] mx-auto md:max-w-[400px] object-cover"
        />
      </motion.div>
    </div>
  );
}