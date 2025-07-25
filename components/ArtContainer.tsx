import getArts from "@/lib/getArts";
import Art from "@/components/Art";
import Link from "next/link";
import type { ArtObject } from "@/types";

export default async function ArtContainer({category}:{category:string}) {

    let result = await getArts(category);

    if (!result) {
        return (
            <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Something went wrong...</h3>
                {result===undefined ?
                    <p className="text-gray-600">An error happened while calling the API..</p>
                    :
                    <p className="text-gray-600">Your category was not accepted, or you have exceeded the API limit</p>
                }
            </div>
        )
    }

    result = result.filter((art:ArtObject) => art.primaryimageurl)

    return (
        <div id="resultsSection">
            <div className="mb-8 text-center flex flex-col items-center justify-center gap-4 pt-5">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h3>
                <p className="text-gray-600">Found <span id="resultCount">{result.length}</span> Exhibits for &quot;<span id="searchCategory"
                                                                                                        className="font-semibold text-blue-600">{category}</span>&quot;
                </p>
            </div>

            <div className="flex justify-center p-4">
                <div id="iconGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { result.map((art:ArtObject) =>
                        <Art key={art.objectnumber} art={art}/> )
                    }
                </div>
            </div>

            <div className="text-center mt-12 pt-5 pb-7">
                <Link href={"/"}>
                    <button
                        id="backToSearch"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 font-medium"
                    >
                        Search Another Category
                    </button>
                </Link>
            </div>
        </div>
    )
}