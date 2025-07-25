import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-white/80 border-b border-gray-200/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link href={"/"}><h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ArtFinder</h1></Link>
                    <div className="md:flex items-center text-sm text-gray-600">
                        <span>MP-4 for CS392!</span>
                    </div>
                </div>
            </div>
        </header>
    )
}