import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adasaNavLogo from "../assets/adasaNavLogo.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav className="bg-[#1C1C1C] text-white border-b border-[#303030] ">
      <div className="navbar max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 items-center ">
        <Link to="/" className="right-nav flex items-center gap-3">
          <div className="">
            <img
              src={adasaNavLogo}
              alt="adasa"
              className="h-12 w-12 object-contain "
            />
          </div>
          <div className="">
            <h2 className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent  leading-tight">عدسة</h2>
            <span className=" text-xs text-orange-400/80 hidden sm:block tracking-wide">
              عالم التصوير الفوتوغرافي{" "}
            </span>
          </div>
        </Link>

        <div className="center-nav bg-[#161616] justify-self-center flex gap-3 rounded-full items-center border border-[#2C2C2C] p-1.5 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 text-sm rounded-full font-medium ${
                isActive
                  ? "linear text-white"
                  : "text-[#A6A6A6] hover:text-[#F5F5F5]"
              }`
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-4 py-2 text-sm rounded-full font-medium ${
                isActive
                  ? "linear text-white"
                  : "text-[#A6A6A6] hover:text-[#F5F5F5]"
              }`
            }
          >
            المدونة
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 text-sm rounded-full font-medium ${
                isActive
                  ? "linear text-white"
                  : "text-[#A6A6A6] hover:text-[#F5F5F5]"
              }`
            }
          >
            من نحن
          </NavLink>
        </div>

        <div className="left-nav flex items-center gap-3 justify-self-end">
          <button
            type="button"
            aria-label="search"
            className="grid h-10 w-10 place-items-center rounded-xl border border-transparent text-zinc-500 transition-colors duration-200  hover:border-[#303030] hover:bg-[#111111] hover:text-orange-500 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
          </button>
          <Link to="/blog" className="rounded-full linear px-6 py-4 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5">ابدأ القراءة</Link>
        </div>
      </div>
    </nav>
  );
}
