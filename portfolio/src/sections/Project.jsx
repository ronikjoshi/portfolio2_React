import React, { useEffect, useState } from "react";
import Items from "../Utils/Items";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import BottomLine from "../components/BottomLine";

export default function Project() {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();

  const [ref, inView] = useInView({ triggerOnce: true });

  // Handle Home page (show only first 3)
  useEffect(() => {
    if (location.pathname === "/" && Items.length > 3) {
      setItems(Items.slice(0, 3));
    }
  }, [location.pathname]);

  const filterItem = (category) => {
    setActiveBtn(category);

    if (category === "all") {
      return location.pathname === "/"
        ? setItems(Items.slice(0, 3))
        : setItems(Items);
    }

    const filtered = Items.filter((item) => item.category === category);
    setItems(location.pathname === "/" ? filtered.slice(0, 3) : filtered);
  };

  // Tailwind filter button style
  const filterBtn = (type) =>
    `px-4 py-2 rounded-full border transition ${
      activeBtn === type
        ? "bg-orange-500 text-white border-orange-500"
        : "border-neutral-600 text-gray-300 hover:bg-neutral-800"
    }`;

  return (
    <div className={`${location.pathname !== "/" ? "pt-20" : ""}`}>
      <div className="py-16 px-6 md:px-20 text-white">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-gray-400">Some of my recent Projects</h3>
            <h1 className="text-4xl font-semibold">
              Featured <span className="text-orange-500">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <button className={filterBtn("all")} onClick={() => filterItem("all")}>
            All
          </button>

          <button
            className={filterBtn("business")}
            onClick={() => filterItem("business")}
          >
            Business
          </button>

          <button
            className={filterBtn("personal")}
            onClick={() => filterItem("personal")}
          >
            Personal
          </button>

          <button
            className={filterBtn("game")}
            onClick={() => filterItem("game")}
          >
            Game
          </button>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-neutral-800/60 border border-neutral-700 hover:border-orange-500 transition"
            >
              {/* Image */}
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-xl font-semibold text-orange-500">
                  {item.title}
                </h3>

                <Link to={`/project/${item.id}`} className="mt-4">
                  <button className="px-4 py-2 border border-orange-500 bg-orange-500 text-white rounded-md hover:bg-transparent hover:text-orange-500 transition">
                    See Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All button — only on Home */}
        {location.pathname === "/" && (
          <div className="text-right mt-8">
            <Link to="/project">
              <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition">
                See All <FiArrowRight />
              </button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
