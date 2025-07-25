import Image from 'next/image';
import type { ArtObject } from "@/types";

export default function Art({art}:{art:ArtObject}) {

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
                <Image
                    src={art.primaryimageurl}
                    alt={art.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{art.title ? art.title : "No title provided"}</h2>
                <h6 className="text-xl font-semibold text-purple-800">{art.people ? art.people[0].name : "No author provided"}</h6>
                <p className="text-sm text-indigo-600 mb-2">Category : {art.classification ? art.classification : "No classification provided"}</p>
                <p className="text-gray-600 text-sm">{art.description ? art.description : "No description provided"}</p>
            </div>
        </div>
    )
}