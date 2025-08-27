export default function TopBar() {
    return (
        <div className="bg-blue-600 text-white py-3">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center text-emerald-100">
                            <span className="mr-2">✨</span>
                            New users get 20% off! (Code: NEW20)
                        </span>
                        <span className="flex items-center text-cyan-100">
                            <span className="mr-2">🚀</span>
                            Refer friends: Get 10% off - Give 10% off
                        </span>
                        <span className="flex items-center text-blue-100">
                            <span className="mr-2">💬</span>
                            Online support: 24/7 available
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-red-500 px-3 py-1 rounded-full text-xs font-medium">
                            🔥 Limited time: Metal printing 20% off
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
