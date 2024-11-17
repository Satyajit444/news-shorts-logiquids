import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Track closing animation
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const activeCategory = new URLSearchParams(location.search).get("category");

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`?category=${category.toLowerCase()}`);
    closeModal();
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsModalOpen(false);
    }, 300); // Match this to the CSS transition duration
  };

  return (
    <nav className="h-16">
      <section className="bg-white bg-opacity-50 backdrop-blur-md p-4 text-gray-800 flex items-center fixed w-full z-10 shadow-xl">
        <RxHamburgerMenu
          size={20}
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-xl font-bold">Inshorts</h1>
        </div>
      </section>

      {isModalOpen && (
        <div
          id="modal-overlay"
          className={`fixed inset-0 bg-black ${
            isClosing ? "bg-opacity-0" : "bg-opacity-50"
          } z-50 cursor-pointer transition-opacity duration-300`}
          onClick={handleOverlayClick}
        >
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#303036] shadow-lg p-4 z-50 modal transform ${
              isClosing ? "-translate-x-full" : "translate-x-0"
            } transition-transform duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="text-white justify-between w-full flex font-bold mb-4">
              <div className="text-[#6d6d70] font-medium">Categories</div>
              <IoClose size={20} onClick={closeModal} />
            </button>

            <ul className="space-y-2 w-full">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.toLowerCase();

                return (
                  <li
                    key={cat}
                    className={`${
                      isActive ? "bg-[#43434b]" : "hover:bg-[#43434b]"
                    } text-white w-full px-6 py-2 cursor-pointer`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
