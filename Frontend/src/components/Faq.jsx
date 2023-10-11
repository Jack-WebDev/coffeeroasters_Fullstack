import { useState } from "react";
import data from "../data";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [active, setActive] = useState(null);

  const handleClick = (q) => {
    setActive(active === q.id ? null : q.id);
  };

  return (
    <div className="bg-gray-700 grid gap-[5rem] text-center">
      <p>FAQ</p>
      {data.map((q) => (
        <div key={q.id}>
          <div>
            <h1 onClick={() => handleClick(q)}>{q.question}</h1>
            <i
              className={
                active === q.id ? "fa-solid fa-minus" : "fa-solid fa-plus"
              }
            ></i>
          </div>
          <div className="flex">
            <AnimatePresence>
              {active === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div>
                    <p>{q.options.type1.title}</p>
                    <p>{q.options.type1.text}</p>
                  </div>
                  <div>
                    <p>{q.options.type2.title}</p>
                    <p>{q.options.type2.text}</p>
                  </div>

                  <div>
                    <p>{q.options.type3.title}</p>
                    <p>{q.options.type3.text}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
