import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faNewspaper,
  faUsers,
  faFolderOpen,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import data from "../data/posts.json";
import { Link } from "react-router-dom";
export default function About() {
  const uniqueAuthors = Array.from(
    new Map(data.posts.map((post) => [post.author.name, post.author])).values(),
  );

  return (
    <main className="grow">
      <div className="bg-[#0a0a0a]">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div class="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className=" inline-flex items-center gap-2 mb-8 animate-fade-in bg-[#25160D] rounded-full px-5 py-2.5 border border-[#683312]">
              <span className="animate-pulse relative inline-flex h-2 w-2 rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-orange-500">
                من نحن
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي{" "}
              <span className=" bg-clip-text text-transparent bg-linear-to-r from-[#F9871B] to-[#FAA41F]">
                الإعلام والإلهام
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="glass-card hover:scale-105 transition-transform duration-300 bg-[#171512] rounded-2xl p-6 border border-zinc-800">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-2xl text-orange-500 mb-1"
                />
                <p className="text-2xl md:text-3xl font-bold  bg-clip-text text-transparent bg-linear-to-r from-[#F9871B] to-[#FAA41F] ">
                  +2مليون
                </p>
                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>
              <div className="glass-card hover:scale-105 transition-transform duration-300 bg-[#171512] rounded-2xl p-6 border border-zinc-800">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="text-2xl text-orange-500 mb-1"
                />
                <p className="text-2xl md:text-3xl font-bold  bg-clip-text text-transparent bg-linear-to-r from-[#F9871B] to-[#FAA41F] ">
                  +500
                </p>
                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>
              <div className="glass-card hover:scale-105 transition-transform duration-300 bg-[#171512] rounded-2xl p-6 border border-zinc-800">
                <FontAwesomeIcon
                  icon={faPenNib}
                  className="text-2xl text-orange-500 mb-1"
                />
                <p className="text-2xl md:text-3xl font-bold  bg-clip-text text-transparent bg-linear-to-r from-[#F9871B] to-[#FAA41F] ">
                  +50
                </p>
                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>
              <div className="glass-card hover:scale-105 transition-transform duration-300 bg-[#171512] rounded-2xl p-6 border border-zinc-800">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-2xl text-orange-500 mb-1"
                />
                <p className="text-2xl md:text-3xl font-bold  bg-clip-text text-transparent bg-linear-to-r from-[#F9871B] to-[#FAA41F] ">
                  +15
                </p>
                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#111111] border-y border-[#262626]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span class="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                قيمنا
                <span class="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full"></span>
              </h2>
              <p class="text-lg text-neutral-400 max-w-2xl mx-auto">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div class="relative">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-4xl text-orange-500 mb-4 block"
                  />{" "}
                  <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    الجودة أولاً
                  </h3>
                  <p class="text-neutral-400 text-sm">
                    محتوى مدروس ومكتوب بخبرة
                  </p>
                </div>
              </div>
              <div class="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div class="relative">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-4xl text-orange-500 mb-4 block"
                  />{" "}
                  <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    تركيز عملي
                  </h3>
                  <p class="text-neutral-400 text-sm">
                    أمثلة واقعية يمكنك تطبيقها اليوم
                  </p>
                </div>
              </div>
              <div class="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div class="relative">
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="text-4xl text-orange-500 mb-4 block"
                  />{" "}
                  <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    المجتمع
                  </h3>
                  <p class="text-neutral-400 text-sm">تعلم مع آلاف المصورين</p>
                </div>
              </div>
              <div class="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div class="relative">
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    className="text-4xl text-orange-500 mb-4 block"
                  />{" "}
                  <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    دائماً محدث
                  </h3>
                  <p class="text-neutral-400 text-sm">
                    أحدث الاتجاهات وأفضل الممارسات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className=" inline-flex items-center gap-2 mb-8 animate-fade-in bg-[#25160D] rounded-full px-5 py-2.5 border border-[#683312]">
                <span className="animate-pulse relative inline-flex h-2 w-2 rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-orange-500">
                  فريقنا
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تعرف على كتابنا
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniqueAuthors.map((author, index) => (
                <div
                  key={index}
                  className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="relative inline-block mb-4">
                    <img
                      alt={author.name}
                      src={author.avatar}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-lg">
                    {author.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-medium mb-4">
                    {author.role}
                  </p>

                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div class="absolute inset-0 opacity-30"><div class="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>
          </div>
          <div className="relative max-w-4xl mx-auto sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">لديك أسئلة؟ دعنا نتحدث!</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:hello@adasah.com" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>تواصل معنا</a>
              <Link class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300" to="/blog" >تصفح المقالات</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
