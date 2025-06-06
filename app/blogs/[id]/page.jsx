"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get("/api/blog", {
        params: {
          id: params.id,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch blog data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  if (loading) {
    return <div className="p-10 text-center">Loading blog...</div>;
  }

  if (!data) {
    return <div className="p-10 text-center text-red-500">Blog not found.</div>;
  }

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt="Logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started <Image src={assets.arrow} alt="Arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt={`${data.author} photo`}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={800}
          height={480}
          alt={data.title}
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-4">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google Plus" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
