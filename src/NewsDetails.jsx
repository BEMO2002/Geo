import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const NewsDetails = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://geoduke.runasp.net/api/news")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setNews(found);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#0a4267] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-[#0a4267] text-lg font-semibold">
          Loading news details...
        </span>
      </div>
    );
  }

  if (!news)
    return (
      <div className="p-8 text-center text-[#0a4267]">News not found.</div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md border border-[#0a4267]/10">
      <button
        className="mb-4 font-bold text-[#0a4267] flex items-center gap-1"
        onClick={() => navigate(-1)}
      >
        <MdArrowBack size={22} />
        Back
      </button>
      <img
        src={news.image?.url}
        alt={news.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-sm text-gray-500 mb-4">
        {new Date(news.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="text-2xl font-bold text-[#0a4267] mb-2">{news.title}</h1>
      <h2 className="text-lg font-semibold text-[#0a4267] mb-2">
        {news.subTitle}
      </h2>
      <p className="text-base  leading-relaxed">{news.description}</p>
    </div>
  );
};

export default NewsDetails;
