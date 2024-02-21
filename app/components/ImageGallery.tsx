"use client";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";

interface iAppProps {
  images: Array<string>;
}

const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleImageClick = (image : any) => {
    setBigImage(image);
  }
  return (
    <div className="flex flex-col lg:flex-row  gap-4 ">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              alt="Image"
              src={urlFor(image).url()}
              width={150}
              height={150}
              priority
              className="object-cover object-center cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg  bg-gray-100">
        <Image 
        src={urlFor(bigImage).url()}
        alt="Image"
        width={500}
        height={500}
        className="w-full h-full object-cover object-center"
        
        />
        <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase text-white">Sale</span>

      </div>
    </div>
  );
};

export default ImageGallery;
