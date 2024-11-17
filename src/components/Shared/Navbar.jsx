import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import style from "./shared.module.css";
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
      <section className={style["nav-ctn"]}>
        <RxHamburgerMenu
          size={20}
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <div className={style["nav-title"]}>
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
            className={` ${style["sidebar-ctn"]} ${
              isClosing ? "-translate-x-full" : "translate-x-0"
            } transition-transform duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={style["close-btn-sidebar"]}>
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
