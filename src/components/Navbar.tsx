export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                <span className="text-white font-bold text-xl">3D</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-gray-900">
                                PrintHub
                            </span>
                            <div className="text-xs text-gray-500">Future manufacturing, start now</div>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#" className="group relative text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="flex items-center">
                                <span className="mr-2 group-hover:scale-110 transition-transform">⚡</span>
                                Capabilities
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                        </a>
                        <a href="#" className="group relative text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="flex items-center">
                                <span className="mr-2 group-hover:scale-110 transition-transform">🏭</span>
                                Industries
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                        </a>
                        <a href="#" className="group relative text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="flex items-center">
                                <span className="mr-2 group-hover:scale-110 transition-transform">📚</span>
                                Resources
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                        </a>
                        <a href="#" className="group relative text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="flex items-center">
                                <span className="mr-2 group-hover:scale-110 transition-transform">🏢</span>
                                Company
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                        </a>
                    </div>

                    {/* Right side functions */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
                            <span className="mr-2">☁️</span>
                            Instant Quote
                        </button>
                        <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                            <span className="mr-2">🛒</span>
                            <span className="text-emerald-600 font-medium">$0.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
