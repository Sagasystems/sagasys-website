"use client";

import { scrollToTop } from "@/app/lib/functions";
import {
  Variants,
  useAnimationControls,
  useScroll,
  motion,
} from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function BackToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed rounded bottom-8 right-8 p-4 bg-orange-500 hover:bg-white transition-all ease-in duration-100 group z-[9999]"
      onClick={scrollToTop}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
    >
      <div className="group-hover:text-orange-500 text-white">
        <ChevronUp width={32} height={32} />
      </div>
    </motion.button>
  );
}
