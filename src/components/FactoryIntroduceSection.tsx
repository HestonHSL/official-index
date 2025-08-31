import factoryImage1 from '../assets/factoryIntroduceSection/1.png';
import factoryImage2 from '../assets/factoryIntroduceSection/2.jpg';
import factoryImage3 from '../assets/factoryIntroduceSection/3.jpg';

export default function FactoryIntroduceSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
                        <span className="text-blue-700 text-sm font-medium">🏭 Professional Manufacturing Facility</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Advanced Manufacturing Facility
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        State-of-the-art 3D printing facility with comprehensive capabilities
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                [Company Name] was established in [Year] and is a national high-tech enterprise dedicated to the research, application, and innovation of 3D printing technology. Headquartered in Shenzhen, the company spans a total area of approximately [XX] thousand square meters, providing comprehensive industrial-grade 3D printing solutions.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                These include 3D printing equipment, materials, software, professional training, and a full suite of 3D printing services—such as reverse engineering, data modeling, scanning and slicing, additive manufacturing, and post-processing.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                With a strong commitment to independent R&D, [Company Name] has established a complete product lineup covering SLA, SLS, SLM, DMLS, MJF, and FDM technologies. The company operates over 120 metal 3D printers and more than 80 resin and nylon 3D printers, offering industry-leading performance in terms of printing speed, precision, and stability.
                            </p>
                        </div>

                        {/* Key statistics */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                                <div className="text-gray-600 text-sm">Metal 3D Printers</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
                                <div className="text-gray-600 text-sm">Resin & Nylon Printers</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                                <div className="text-gray-600 text-sm">Technology Types</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-3xl font-bold text-blue-600 mb-2">1.8m</div>
                                <div className="text-gray-600 text-sm">Max Print Size</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                Our products are widely applied across industries such as prototyping, footwear, sculpture, medical, dental, automotive, ceramics, mechanical equipment, and architecture. With a solid presence in both domestic and international markets, our products are exported across Asia, Europe, North America, and Australia, making [Company Name] one of the leading players in the Chinese 3D printing industry.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Guided by the core values of "Innovation, Dedication, Execution, Gratitude, and Win-Win Collaboration", and driven by the mission to "Advance Intelligent Manufacturing and Empower the Industrial Sector", [Company Name] continues to innovate and strive for excellence. Through persistent effort and forward-thinking development, we are determined to become a leader in the field of intelligent manufacturing.
                            </p>
                        </div>
                    </div>

                    {/* Right images */}
                    <div className="flex flex-col space-y-6">
                        {/* Main factory image */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src={factoryImage1}
                                alt="Advanced 3D printing facility"
                                className="w-full h-80 object-cover"
                            />
                        </div>

                        {/* Second factory image */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={factoryImage2}
                                alt="3D printing equipment"
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        {/* Third factory image */}
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={factoryImage3}
                                alt="Production facility"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
