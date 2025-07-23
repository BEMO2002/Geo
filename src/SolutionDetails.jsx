import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiDownload, FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        className="w-full flex items-center justify-between py-4 text-lg font-semibold focus:outline-none"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{title}</span>
        <span className="text-2xl">{open ? <FiMinus /> : <FiPlus />}</span>
      </button>
      {open && <div className="pb-4 px-2  text-gray-700">{children}</div>}
    </div>
  );
};

const SolutionDetails = () => {
  const { slug } = useParams();
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.geoduke.com/solutions", {
        params: { pageNumber: 1, pageSize: 100 },
      })
      .then((res) => {
        const found = res.data.find((item) => item.slug === slug);
        setSolution(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#0a4267] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-[#0a4267] text-lg font-semibold">
          Loading solution details...
        </span>
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="text-center text-red-700 font-semibold">
        Solution not found.
      </div>
    );
  }

  const mainImage =
    solution.images && solution.images.length > 0
      ? solution.images[0].url
      : null;

  return (
    <div className="container mx-auto mt-30 max-w-6xl px-4 py-12 flex flex-col md:flex-row gap-10">
      {/* Left: Main Image and Gallery */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        {mainImage && (
          <img
            src={mainImage}
            alt={solution.title}
            className="w-full h-[350px] object-cover rounded-lg mb-4"
          />
        )}
        {/* Gallery Thumbnails */}
        {solution.images && solution.images.length > 1 && (
          <div className="flex gap-3 mt-2">
            {solution.images.map((img, idx) => (
              <img
                key={img.id}
                src={img.url}
                alt={solution.title + " " + (idx + 1)}
                className="w-24 h-20 object-cover rounded cursor-pointer border border-gray-200 hover:border-primary"
                onClick={() => {
                  // Swap main image on click
                  const imgs = [...solution.images];
                  imgs.splice(idx, 1);
                  setSolution({ ...solution, images: [img, ...imgs] });
                }}
              />
            ))}
          </div>
        )}
      </div>
      {/* Right: Details */}
      <div className="md:w-1/2 w-full flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#0a4267]">
          {solution.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: solution.description }}
          className="text-lg text-gray-700 mb-4 whitespace-pre-line"
        ></div>
        <Accordion title="Overview">
          <div className="whitespace-pre-line">{solution.overview}</div>
        </Accordion>
        <Accordion title="System Components">
          <div className="whitespace-pre-line">{solution.systemComponents}</div>
        </Accordion>
        {/* Assets */}
        {solution.assets && solution.assets.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Downloads</h3>
            <ul className="flex md:flex-row flex-col flex-wrap justify-start  gap-5  ">
              {solution.assets.map((asset) => (
                <li key={asset.id}>
                  <a
                    href={asset.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-medium hover:text-red-700 transition"
                  >
                    {asset.name}
                    <FiDownload className="inline ml-2 mb-2" size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionDetails;
