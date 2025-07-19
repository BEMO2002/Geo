import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [allProjects, setAllProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://geoduke.runasp.net/api/projects", {
        params: { pageNumber: 1, pageSize },
      })
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [pageSize]);

  // For search, fetch all projects (up to 100 for practical search)
  useEffect(() => {
    axios
      .get("https://geoduke.runasp.net/api/projects", {
        params: { pageNumber: 1, pageSize: 100 },
      })
      .then((res) => setAllProjects(res.data));
  }, []);

  const filteredProjects = search
    ? allProjects.filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(search.toLowerCase())) ||
          (item.client &&
            item.client.toLowerCase().includes(search.toLowerCase())) ||
          (item.value &&
            item.value.toLowerCase().includes(search.toLowerCase())) ||
          (item.brief &&
            item.brief.toLowerCase().includes(search.toLowerCase())) ||
          (item.description &&
            item.description.toLowerCase().includes(search.toLowerCase())) ||
          (item.createdAt &&
            new Date(item.createdAt)
              .toLocaleDateString("en-US")
              .includes(search))
      )
    : projects;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#0a4267] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-[#0a4267] text-lg font-semibold">
          Loading projects...
        </span>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-8 pt-20 relative">
      <div className="container mx-auto max-w-[1703px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-base">
            Projects
          </h2>
          <div className="flex flex-row gap-2 items-center">
            <div className="relative flex items-center  w-80 max-w-full">
              <input
                type="text"
                placeholder="Search by anything..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-primary/50 rounded-md px-3 py-2 focus:outline-none  text-[#000] w-full pr-20 "
                style={{ minWidth: "200px" }}
              />
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-md rounded-l-none font-semibold transition "
                type="button"
                tabIndex={-1}
              >
                Search
              </button>
            </div>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="border border-primary/50 rounded-md px-3 py-2 focus:outline-none  text-primary"
            >
              {[5, 10, 20, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size} per page
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {filteredProjects.length === 0 ? (
            <div className="text-center text-[#0a4267] font-semibold">
              No projects found.
            </div>
          ) : (
            filteredProjects.map((item) => {
              const mainImage = item.images?.find((img) => img.isMain);
              return (
                <div
                  key={item.id}
                  className="flex flex-col-reverse md:flex-row bg-white md:rounded-[24px] rounded-lg shadow-[0px_4px_4px_0px_#DBE8E3] border border-[#0a4267]/10 overflow-hidden md:h-[400px] mb-4"
                >
                  {/* النص */}
                  <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-12 text-left h-full overflow-hidden">
                    <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight text-[#222]">
                      {item.title}
                    </h3>
                    <p className="text-[#444444] mb-6 max-w-2xl line-clamp-3 md:line-clamp-none">
                      {item.brief || item.description}
                    </p>
                    <button
                      className="bg-red-700 text-white px-8 py-3 mb-3 rounded-none font-bold text-lg hover:bg-white hover:text-red-700 border-2 border-red-700 transition duration-300"
                      onClick={() => navigate(`/projects/${item.slug}`)}
                    >
                      Project Details
                    </button>
                  </div>
                  {/* الصورة */}
                  {mainImage && (
                    <div className="md:w-1/2 w-full h-48 md:h-full flex-shrink-0">
                      <img
                        src={mainImage.url}
                        alt={item.title}
                        className="w-full h-full object-cover object-center md:rounded-none"
                      />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
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
  );
};

export default Projects;
