export const MyDay = () => {
    return (
        <section>
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">MY DAY</h2>
            <div className="relative">
                <div className="w-full aspect-square relative">
                    <svg viewBox="0 0 100 100" className="w-full transform -rotate-90">
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            className="stroke-gray-200"
                            strokeWidth="20"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            className="stroke-blue-500"
                            strokeWidth="20"
                            strokeDasharray="42 100"
                            strokeDashoffset="0"
                        />
                    </svg>
                </div>
                <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                        {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
                            <div key={letter} className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                                <span className="text-sm">Activity {letter}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
