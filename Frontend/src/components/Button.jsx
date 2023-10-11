import { motion } from "framer-motion";

function Button({ children }) {
  return (
    <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="bg-[#0e8784] text-white]">
      {children}
    </motion.a>
    // <button type="button" className="bg-green-200 py-[1rem] px-[2rem] rounded-xl w-fit">{children}</button>
  );
}

export default Button;
