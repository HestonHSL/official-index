import { Icon } from 'umi';

export default function IndustriesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
                        <span className="text-blue-700 text-sm font-medium">🏭 Industry Applications</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Precision Manufacturing Applications for Every Industry
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From aerospace to consumer products, we serve diverse industries with our advanced 3D printing solutions
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {/* Aerospace */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:rocket-launch" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Aerospace</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Precision components for aircraft and spacecraft</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:school" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Educational models and prototypes for learning</p>
                        </div>
                    </div>

                    {/* Industrial */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:factory" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Manufacturing tools and industrial equipment</p>
                        </div>
                    </div>

                    {/* Automotive */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:car-wrench" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Automotive</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Vehicle parts and automotive prototypes</p>
                        </div>
                    </div>

                    {/* Electronics */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:chip" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Electronics</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Electronic enclosures and circuit components</p>
                        </div>
                    </div>

                    {/* Medical & Dental */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:medical-bag" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Medical & Dental</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Medical devices and dental prosthetics</p>
                        </div>
                    </div>

                    {/* Consumer Products */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:cellphone" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Consumer Products</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Consumer goods and product prototypes</p>
                        </div>
                    </div>

                    {/* Energy */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:lightbulb" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Energy</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Energy sector components and equipment</p>
                        </div>
                    </div>

                    {/* Robotics & Machine Building */}
                    <div className="group text-center">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon icon="mdi:robot" className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Robotics & Machine Building</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Robotic parts and automation systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
