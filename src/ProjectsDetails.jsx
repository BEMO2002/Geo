import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
const ProjectsDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupImg, setPopupImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://geoduke.runasp.net/api/projects?pageNumber=1&pageSize=100")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setProject(found);
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
          Loading project details...
        </span>
      </div>
    );
  }

  if (!project)
    return (
      <div className="p-8 text-center text-[#0a4267]">Project not found.</div>
    );

  // Separate main image and other images
  const mainImage = project.images?.find((img) => img.isMain);
  const otherImages = project.images?.filter((img) => !img.isMain);

  return (
    <div className="max-w-[1400px] mx-auto p-4 md:p-8 mt-22 bg-white rounded-[24px] shadow-lg border border-[#0a4267]/10 flex flex-col md:flex-row gap-8 items-stretch pt-20">
      {/* الصور */}
      <div className="md:w-[45%] w-full flex flex-col gap-4 justify-center">
        {/* الصورة الرئيسية */}
        {mainImage && (
          <img
            src={mainImage.url}
            alt={project.title}
            className="w-full h-[320px] md:h-[400px] object-cover object-center rounded-[16px] border-4 border-[#0a4267] cursor-pointer"
            onClick={() => setPopupImg(mainImage.url)}
          />
        )}
        {/* باقي الصور */}
        {otherImages && otherImages.length > 0 && (
          <div className="flex gap-3 overflow-x-auto">
            {otherImages.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={project.title}
                className="h-24 w-36 object-cover rounded-lg cursor-pointer border border-[#0a4267]/40 hover:border-[#0a4267] transition"
                onClick={() => setPopupImg(img.url)}
              />
            ))}
          </div>
        )}
      </div>
      {/* النصوص */}
      <div className="flex-1 flex flex-col justify-center items-start p-2 md:p-10 shadow text-left h-full overflow-hidden">
        <button
          className="mb-6 font-bold text-[#0a4267] flex items-center gap-1 hover:underline"
          onClick={() => navigate(-1)}
        >
          <MdArrowBack size={22} />
          Back
        </button>
        <p className="text-sm text-gray-500 mb-2">
          {new Date(project.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-[#222]">
          {project.title}
        </h1>
        <h2 className="text-lg font-semibold text-[#0a4267] mb-2">
          {project.client}
        </h2>
        <p className=" text-[#444444] mb-2 font-medium">
          Value: {project.value}
        </p>
        <p className="text-[#444444] mb-4 font-medium">
          {project.brief}
        </p>
        <div
        dangerouslySetInnerHTML={{ __html: project.description }}
        className="whitespace-pre-line  leading-relaxed mb-4 text-[#444] max-h-[180px] overflow-auto pr-2">
          
        </div>
      </div>
      {/* Popup for image viewing */}
      {popupImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setPopupImg(null)}
        >
          <img
            src={popupImg}
            alt="Project Detail Large"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border-4 border-[#0a4267] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-[#0a4267] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            onClick={() => setPopupImg(null)}
          >
            <MdOutlineClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsDetails;
