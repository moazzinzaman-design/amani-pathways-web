export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 py-20 sm:py-28 animate-pulse">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Skeleton */}
                <div className="max-w-3xl mb-16">
                    <div className="h-6 w-32 bg-indigo-100 rounded-full mb-6" />
                    <div className="h-12 sm:h-16 w-3/4 bg-slate-200 rounded-2xl mb-5" />
                    <div className="h-24 w-full bg-slate-200 rounded-xl" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm h-80 flex flex-col">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl mb-6" />
                            <div className="h-6 w-1/2 bg-slate-200 rounded-lg mb-4" />
                            <div className="h-20 w-full bg-slate-100 rounded-lg" />
                            <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between">
                                <div className="h-4 w-20 bg-slate-100 rounded" />
                                <div className="h-4 w-12 bg-slate-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
