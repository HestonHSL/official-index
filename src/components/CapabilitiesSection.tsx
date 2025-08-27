import { Icon } from 'umi';

export default function CapabilitiesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
                        <span className="text-blue-700 text-sm font-medium">🔧 Professional Manufacturing Capabilities</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our 3D Printing Manufacturing Capabilities
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From prototyping to mass production, we provide comprehensive 3D printing solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* FDM 3D Printing */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:printer-3d" className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">FDM 3D Printing</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    PLA, ABS, PETG, TPU materials
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    Tolerance ±0.2mm
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    Max size 400×400×400mm
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    Lead time 1-3 days
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* SLA Stereolithography */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:laser-pointer" className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">SLA Stereolithography</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    High-precision resin materials
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    Tolerance ±0.1mm
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    Surface finish Ra0.8
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    Lead time 2-5 days
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* SLS Selective Laser Sintering */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:fire" className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">SLS Laser Sintering</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    PA12, PA6, TPU materials
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    Tolerance ±0.3mm
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    No support structures needed
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    Lead time 3-7 days
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Metal 3D Printing */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:gear" className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Metal 3D Printing</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                    Titanium, Stainless Steel, Aluminum
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                    Tolerance ±0.1mm
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                    Density &gt;99.5%
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                    Lead time 5-10 days
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
