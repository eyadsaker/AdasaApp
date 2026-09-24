import Navbar from "../components/Navbar";
import data from "../data/posts.json";
import { useState, useMemo } from "react";
import { GridCard, ListCard } from "../components/BlogCards";
export default function Blog() {
  const categories = [
    "جميع المقالات",
    ...data.categories.map((cat) => cat.name),
  ];
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const filteredPosts = data.posts.filter((post) => {
    const matchesCategory =
      activeCategory === "جميع المقالات" || post.category === activeCategory;
    const matchesSearch = post.title.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });
  [activeCategory, searchQuery];

  const [viewMode, setViewMode] = useState("grid");

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <main className="grow ">
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 border-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 righ-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className=" inline-flex items-center gap-2 mb-8 animate-fade-in bg-[#25160D] rounded-full px-5 py-2.5 border border-[#683312]">
              <span className="animate-pulse relative inline-flex h-2 w-2 rounded-full bg-orange-500 opacity-75"></span>
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                ></path>
              </svg>
              <span className="text-sm font-medium text-orange-500">
                مدونتنا
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {" "}
              استكشف{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#F9871B] to-[#FAA41F]">
                {" "}
                مقالاتنا
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
        <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  placeholder="ابحث في المقالات..."
                  className="bg-[#161616] border border-[#262626] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 transition-colors w-full px-5 py-3 pr-12"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                      activeCategory === cat
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-transparent"
                        : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض شبكي"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض قائمة"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {paginatedPosts.map((post) =>
              viewMode === "grid" ? (
                <GridCard key={post.id} post={post} />
              ) : (
                <ListCard key={post.id} post={post} />
              ),
            )}
          </div>
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>

          <p className="text-center text-neutral-500 mt-4 text-sm">
            صفحة {currentPage} من {totalPages}
          </p>
        </div>
      </div>
    </main>
  );
}
