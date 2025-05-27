import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-sm flex flex-col">
      <Link href={`/blogs/${id}`} className="overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[250px] object-cover rounded-t-xl"
          priority
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <h5 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h5>

        <p className="text-gray-700 text-sm mb-5 leading-relaxed">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        {/* Author + Date + Category Badge */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-auto">
          <div className="flex items-center gap-2">
            <Image
              src={assets.profile} // update with actual avatar or placeholder
              alt="Author"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-gray-800 font-medium">Adrio Devid</span>
          </div>

          <span className="text-gray-400">•</span>

          <span className="whitespace-nowrap">Aug 24, 2023</span>

          <span className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold whitespace-nowrap">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
