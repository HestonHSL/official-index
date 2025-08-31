import { Icon } from 'umi';
import slaImage from '../assets/CapabilitiesSection/1-SLA-Stereolithography.jpg';
import slsImage from '../assets/CapabilitiesSection/2-SLS-SelectiveLaserSintering.jpg';
import mjfImage from '../assets/CapabilitiesSection/3-MJF-MultiJetFusion.jpg';
import slmImage from '../assets/CapabilitiesSection/4-SLM-SelectiveLaserMelting.png';
import fdmImage from '../assets/CapabilitiesSection/5-FDM-FusedDepositionModeling.jpg';

export default function CapabilitiesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-2">
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

                <div className="flex flex-col space-y-8">
                    {/* 第一行：3张卡片 */}
                    <div className="flex justify-around">
                        {/* SLA Stereolithography */}
                        <div className="w-[31%]">
                            <div className="group relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon="mdi:laser-pointer" className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">SLA</h3>
                                    <h4 className="text-lg font-semibold text-purple-600 mb-4">Stereolithography</h4>
                                    <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Visual part prototyping. High resolution. Low cost.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Dimensional accuracy of ±0.2% with a lower limit of ±0.2mm.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Lead times from 3 business days</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Standard Resin, High-Detail Resin, Translucent Resin, Transparent Resin, etc.</span>
                                        </li>
                                    </ul>
                                    <div className="relative overflow-hidden rounded-xl mt-auto">
                                        <img src={slaImage} alt="SLA Stereolithography" className="w-full h-48 object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SLS Selective Laser Sintering */}
                        <div className="w-[31%]">
                            <div className="group relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon="mdi:fire" className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">SLS</h3>
                                    <h4 className="text-lg font-semibold text-orange-600 mb-4">Selective Laser Sintering</h4>
                                    <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Functional prototyping. Low-run production.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Dimensional accuracy of +0.3% with a lower limit of +0.3mm.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Lead times from 3 business days</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Nylon PA11, Nylon PA12, Nylon PA12 Glass Fill, etc.</span>
                                        </li>
                                    </ul>
                                    <div className="relative overflow-hidden rounded-xl mt-auto">
                                        <img src={slsImage} alt="SLS Selective Laser Sintering" className="w-full h-48 object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MJF Multi Jet Fusion */}
                        <div className="w-[31%]">
                            <div className="group relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon="mdi:printer-3d" className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">MJF</h3>
                                    <h4 className="text-lg font-semibold text-blue-600 mb-4">Multi Jet Fusion</h4>
                                    <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Functional prototyping. Low-run production.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Dimensional accuracy of +0.3% with a lower limit of +0.3mm.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Lead times from 3 business days</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>HP Nylon PA12</span>
                                        </li>
                                    </ul>
                                    <div className="relative overflow-hidden rounded-xl mt-auto">
                                        <img src={mjfImage} alt="MJF Multi Jet Fusion" className="w-full h-48 object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 第二行：2张卡片 */}
                    <div className="flex justify-around">
                        {/* SLM Selective Laser Melting */}
                        <div className="w-[31%]">
                            <div className="group relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon="mdi:gear" className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">SLM</h3>
                                    <h4 className="text-lg font-semibold text-gray-600 mb-4">Selective Laser Melting</h4>
                                    <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Metal parts rapid prototyping. Production grade.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Dimensional accuracy of +0.2% with a lower limit of +0.2mm.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Lead times from 5 business days</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Aluminum, Stainless Steel, Titanium, Tool Steel, Inconel, etc.</span>
                                        </li>
                                    </ul>
                                    <div className="relative overflow-hidden rounded-xl mt-auto">
                                        <img src={slmImage} alt="SLM Selective Laser Melting" className="w-full h-48 object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FDM Fused Deposition Modeling */}
                        <div className="w-[31%]">
                            <div className="group relative h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl h-full flex flex-col">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon="mdi:printer-3d" className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">FDM</h3>
                                    <h4 className="text-lg font-semibold text-green-600 mb-4">Fused Deposition Modeling</h4>
                                    <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Plastic parts rapid prototyping. Low cost.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Dimensional accuracy of +0.2% with a lower limit of +0.2mm.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>Lead times from 3 business days</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                            <span>ABS, PETG, PLA, etc.</span>
                                        </li>
                                    </ul>
                                    <div className="relative overflow-hidden rounded-xl mt-auto">
                                        <img src={fdmImage} alt="FDM Fused Deposition Modeling" className="w-full h-48 object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
