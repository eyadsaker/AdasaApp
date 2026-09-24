import { useParams, Link } from "react-router-dom";
import data from "../data/posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronLeft, faCalendar, faClock, faCamera, faTags, faList } from "@fortawesome/free-solid-svg-icons";
export default function BlogPost() {
  const { slug } = useParams();
  const post = data.posts.find((p) => p.slug === slug);

  if (!post) return <div className="text-white p-20">المقال غير موجود</div>;

  const sections = post.content.split(/\n(?=## )/).map((block) => {
    const [firstLine, ...rest] = block.split("\n");
    const isHeading = firstLine.startsWith("## ");
    return {
      heading: isHeading ? firstLine.replace("## ", "") : null,
      paragraphs: (isHeading ? rest.join("\n") : block)
        .split("\n\n")
        .filter(Boolean),
    };
  });

  const relatedPosts = data.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="grow ">
      <article className="bg-[#0a0a0a] min-h-screen">
        <div className="relative h-[60vh] min-h-125 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

          <div className="absolute top-8 right-8 left-8">
            <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <Link to="/" className="text-white/70 hover:text-white">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white/30 text-xs"
              />
              <Link to="/blog" className="text-white/70 hover:text-white">
                المدونة
              </Link>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white/30 text-xs"
              />
              <span className="text-orange-400 font-medium truncate max-w-50">
                {post.category}
              </span>
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  to={`/blog?category=${post.category}`}
                  className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full"
                >
                  {post.category}
                </Link>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                />
                <div>
                  <p className="font-bold text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  "{post.excerpt}"
                </p>
              </div>

              <div className="prose-custom">
                {sections.map((section, i) => (
                  <div key={i}>
                    {section.heading && (
                      <h2
                        id={`section-${i}`}
                        className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                      >
                        <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                          <FontAwesomeIcon
                            icon={faCamera}
                            className="text-orange-500"
                          />
                        </span>
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-neutral-300 leading-relaxed mb-6 text-lg"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <FontAwesomeIcon
                      icon={faTags}
                      className="text-orange-500"
                    />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* share buttons block: static, copy from your HTML */}

              <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                  />
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {post.author.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FontAwesomeIcon
                        icon={faList}
                        className="text-orange-500"
                      />
                    </div>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    {sections
                      .filter((s) => s.heading)
                      .map((s, i) => (
                        <Link
                          key={i}
                          to={`#section-${i}`}
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 group"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500">
                            {i + 1}
                          </span>
                          <span className="text-sm">{s.heading}</span>
                        </Link>
                      ))}
                  </nav>
                </div>

                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-orange-500 text-xl mb-2"
                      />
                      <p className="text-white font-bold">{post.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-orange-500 text-xl mb-2"
                      />
                      <p className="text-white font-bold text-sm">
                        {post.date}
                      </p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
              <Link
                to="/blog"
                className="hidden sm:flex items-center gap-2 text-orange-500"
              >
                عرض الكل
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {rp.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 line-clamp-2 mb-3">
                      {rp.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          src={rp.author.avatar}
                          alt={rp.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        {rp.author.name}
                      </span>
                      <span>{rp.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
