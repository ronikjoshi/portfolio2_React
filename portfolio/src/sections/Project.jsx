import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import BottomLine from "../components/BottomLine";
import Items from "../Utils/Items";

const Project = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [active, setActive] = useState("all");

  // ⭐ Scroll trigger for the whole Project section
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) setAnimateSection(true);
  }, [inView]);

  // Filtering
  const filteredItems = useMemo(() => {
    if (active === "all") return Items;
    return Items.filter((item) => item.category === active);
  }, [active]);

  const visibleItems = useMemo(() => {
    return isHome ? filteredItems.slice(0, 3) : filteredItems;
  }, [filteredItems, isHome]);

  const categories = [
    { key: "all", label: "All" },
    { key: "business", label: "Business" },
    { key: "personal", label: "Personal" },
    { key: "game", label: "Game" },
  ];

  return (
    <motion.div
      ref={ref}
      className={`${!isHome ? "" : ""}`}
      
      // ⭐ Whole project section fades + scales in together
      initial={{ opacity: 0, scale: 0.95 }}
      animate={animateSection ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto py-12 px-4">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h3 className="text-neutral-300">Some of my recent Projects</h3>
          <h1 className="text-4xl font-semibold">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <BottomLine />
        </div>

        {/* Filters */}
        <div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`px-4 py-1.5 text-sm rounded-md border-2 transition-all duration-300
                  ${active === cat.key 
                    ? "bg-primary text-white border-primary" 
                    : "bg-transparent text-white border-primary hover:bg-primary"}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-lg overflow-hidden bg-[#313131] shadow-lg hover:shadow-primary transition-shadow duration-300"
              >
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <Link to={`/project/${item.id}`}>
                    <button className="px-4 py-1.5 text-sm rounded-md bg-primary text-white border-2 border-transparent hover:bg-transparent hover:border-primary transition duration-300">
                      See Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* See All button (only on home) */}
        {isHome && (
          <div className="mt-6 text-right">
            <Link to="/project">
              <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-md hover:bg-transparent border-2 border-primary hover:text-primary transition-all duration-300">
                <span>See All</span>
                <FiArrowRight />
              </button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
