export default function HomePage() {
  return (
    <main>
      <div className="bg-gradient-to-r from-blue-900/25 via-[#050505] to-[#050505]">
        {/* <div className="bg-[url('../../public/bg-section.svg')] border-t border-zinc-800 py-12"> */}
        <div className="border-t border-zinc-800 py-12">
          <section className="max-w-5xl flex flex-col sm:mx-auto mx-4">
            <div className="flex justify-center mb-4">
              <div className="flex flex-row items-center gap-3 bg-amber-950/40 text-amber-500 py-2 px-5 rounded-full">
                <div className="flex items-center justify-center bg-amber-900/40 w-5 h-5 rounded-full">
                  <div className="bg-amber-900 w-2 h-2 rounded-full" />
                </div>
                <span>work in progress</span>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <h1 className="text-8xl font-semibold leading-none text-center">
                <span className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  Build
                </span>{" "}
                your mobile applications React Native with{" "}
                <span className="inline-block bg-gradient-to-r from-pink-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
                  blocks
                </span>
              </h1>

              <div className="max-w-3xl mx-auto">
                <p className="text-3xl tracking-widest leading-relaxed text-center">
                  An open source UI component library that focuses on{" "}
                  <span className="py-1 px-2 rounded-md bg-rose-950 text-rose-500">
                    customization
                  </span>
                  ,
                  <span className="py-1 px-2 rounded-md bg-emerald-950 text-emerald-500">
                    developer
                  </span>{" "}
                  experience, and building mobile apps with{" "}
                  <span className="py-1 px-2 rounded-md bg-blue-950 text-blue-500">
                    react-native.
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-16">
              <button className="bg-white py-4 px-10 rounded-2xl text-black text-xl font-semibold">
                Get Started
              </button>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gray-500/10 py-24">
        <div className="max-w-2xl flex flex-col px-4 sm:mx-auto">
          <div className="flex flex-col gap-8">
            <p className="text-xl subpixel-antialiased tracking-wider">
              <span className="inline-block bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-400 bg-clip-text text-transparent">
                Design Blocks: Streamline your React Native development.
              </span>{" "}
              Build apps intuitively, with no steep learning curve. Our goal is
              to fast-track your next app to production.
            </p>

            <p className="text-xl subpixel-antialiased tracking-wider">
              We firmly believe in providing developers with the best tools. Our
              goal is to build a strong community where you come first,{" "}
              <span className="inline-block bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400 bg-clip-text text-transparent">
                empowering you to create great things.
              </span>
            </p>

            <p className="text-xl subpixel-antialiased tracking-wider">
              At Design Blocks, we aim to make our blocks the key for quick app
              assembly,{" "}
              <span className="text-gray-400">
                while always preserving the unique essence and personality of
                each project.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
