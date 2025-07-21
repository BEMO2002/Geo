import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://geoduke.runasp.net/api/solutions", {
        params: { pageNumber: 1, pageSize: 10 },
      })
      .then((res) => {
        setSolutions(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredSolutions = search
    ? solutions.filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(search.toLowerCase())) ||
          (item.description &&
            item.description.toLowerCase().includes(search.toLowerCase()))
      )
    : solutions;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#0a4267] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-[#0a4267] text-lg font-semibold">
          Loading solutions...
        </span>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-8 pt-20 relative">
      <div className="container mx-auto max-w-[1703px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl md:text-3xl uppercase font-bold text-left text-base">
            Solutions
          </h2>
          <div className="relative flex items-center w-80 max-w-full">
            <input
              type="text"
              placeholder="Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-primary/50 rounded-md px-3 py-2 focus:outline-none text-[#000] w-full pr-20"
              style={{ minWidth: "200px" }}
            />
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-md rounded-l-none font-semibold transition"
              type="button"
              tabIndex={-1}
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredSolutions.length === 0 ? (
            <div className="text-center text-[#0a4267] font-semibold col-span-3">
              No solutions found.
            </div>
          ) : (
            filteredSolutions.map((item) => {
              const firstImage =
                item.images && item.images.length > 0
                  ? item.images[0].url
                  : null;
              return (
                <div
                  key={item.id}
                  className="flex flex-col bg-white rounded-lg  overflow-hidden h-full"
                >
                  {firstImage && (
                    <div className="w-full h-64 flex-shrink-0">
                      <img
                        src={firstImage}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-between p-8 text-left">
                    <h3 className="text-2xl font-extrabold mb-2 leading-tight text-[#222]">
                      {item.title}
                    </h3>
                    <p className="text-[#444444] mb-6 line-clamp-2">
                      {item.description}
                    </p>
                    <button
                      className="  font-semibold underline text-primary w-fit   text-lg cursor-pointer "
                      onClick={() => navigate(`/solutions/${item.slug}`)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <style jsx>{`
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Solutions;
