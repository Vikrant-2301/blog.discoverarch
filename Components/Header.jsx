"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingPosts = [
  {
    id: 1,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    category: "Design",
    title: "The Future of UX/UI Design in a Rapidly Changing World",
    author: "Emily Watson",
    date: "September 15, 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    category: "Innovation",
    title: "How AI is Revolutionizing Creative Industries",
    author: "Michael Lee",
    date: "October 1, 2023",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  },
];

const FullscreenCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings} className="h-full">
        {trendingPosts.map((post) => (
          <div key={post.id} className="relative h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${post.image})`,
                filter: "brightness(0.6)",
              }}
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16 text-white max-w-4xl">
              <p className="uppercase font-semibold text-sm md:text-base mb-2 tracking-widest">
                {post.category}
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                {post.title}
              </h2>
              <div className="flex items-center space-x-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm opacity-75">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullscreenCarousel;
