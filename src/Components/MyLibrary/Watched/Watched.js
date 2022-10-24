import "./Watched.css";
import { motion } from "framer-motion";

export default function Watched() {
  const transition = { type: "spring", duration: 1 };
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="watched__container"
    >
      <h2 className="watched__title">watched</h2>
    </motion.div>
  );
}
