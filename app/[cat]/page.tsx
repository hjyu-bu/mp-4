import Loading from "@/components/Loading";
import ArtContainer from "@/components/ArtContainer";
import {Suspense} from "react";

export default async function CategoryPage({params,}:{params:Promise<{cat:string}>}) {

    const cat = decodeURIComponent((await params).cat);

    return (
        <Suspense
            fallback={<Loading/>}
        >
            <ArtContainer category={cat}/>
        </Suspense>
    );
}