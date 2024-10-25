"use client";
import { Button } from "@/app/components/ui/button";
import notImage from "@/app/img/j.jpg";
import maybeImage from "@/app/img/jepjep.jpg";
import IsImage from "@/app/img/kj.png";
import AreImage from "@/app/img/s.jpg";
import SuperImage from "@/app/img/tae.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";

export function AnimatedModalDemo() {
  const images = [
    SuperImage,
    notImage,
    maybeImage,
    IsImage,
   AreImage,
  ];
  return (
    <div className="">
      <Modal>
        <ModalTrigger className="bg-violet-700 dark:bg-white dark:text-black text-white flex justify-center items-center px-2 py-1 text-sm rounded-md group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            My recent projects
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            😻
          </div>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              My Recent Projects in{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                <Link href="https://github.com/Myzino">Github</Link>
              </span>{" "}
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              <Link href="/">Cancel</Link>
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              <Link href="https://github.com/Myzino">
                <Button>Visit Now!</Button>
              </Link>
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
