import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../Utils/Items";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../assets/placeholder.jpg";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log("URL ID:", id);
    const match = Items.find((x) => x.id === Number(id));
    console.log("Matched Item:", match);
    setItem(match);
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!item) return <div className="p-10 text-white">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-neutral-300">
      <h1 className="text-center text-4xl font-semibold text-white mb-10">
        {item.title}
      </h1>

      <Slider {...settings}>
        {item.img.map((image, index) => (
          <div key={index} className="mt-6 px-3">
            <div className="rounded-lg overflow-hidden shadow-lg bg-[#313131] border-2 border-primary">
              <LazyLoadImage
                placeholderSrc={placeholderImage}
                src={image}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      <p className="mt-10 text-lg leading-relaxed">
        <span className="font-semibold text-white text-xl">Description: </span>
        {item.description}
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Features:</h2>
        <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {item.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Tools & Technologies:</h2>
        <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {item.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4 mt-12">
        <a href={item.liveLink} target="blank">
          <PrimaryBtn>
            <span>Visit Now</span>
            <FaLink />
          </PrimaryBtn>
        </a>

        <a href={item.codeLink} target="blank">
          <SecondaryBtn>
            <span>Source Code</span>
            <FaCode />
          </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
