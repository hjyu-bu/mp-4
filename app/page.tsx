"use client";
import {useState} from "react";
import Link from "next/link";

/*
All files are assumed to be rendered in server by default, in next.js
If you want to render it in client(user's computer), so that we can use state-management like useState(), we need to put "use client" at the top

page.tsx : In create-next-app, /app/page.tsx contains conditionally rendered components for Router.
Each conditionally rendered component will have filename page.tsx, with different component names.
Therefore, each component needs to be in a separate folder so that there are no duplicate filenames.
*/

export default function Home() {

    const [cat, setCat] = useState<string>("");

    return (
      <div id="searchSection" className="mb-12 flex flex-col items-center justify-center gap-8 p-6 pt-7">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Harvard Museum of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Art</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search for exhibits in harvard museum of art!
          </p>

          <div className="w-full max-w-4xl mx-auto rounded-2xl p-8 shadow-xl">
              <div className="space-y-6 relative">
                  <input
                      type="text"
                      id="categoryInput"
                      placeholder="e.g. Van Gogh, Claude Monet, Mona Lisa..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg"
                      value={cat}
                      onChange={(e) => setCat(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <Link href={`/${cat}`}><p>Search</p></Link>
                  </div>
              </div>
          </div>
      </div>
  );
}
