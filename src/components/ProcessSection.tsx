import { Icon } from 'umi';

export default function ProcessSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200 mb-6">
                        <span className="text-emerald-700 text-sm font-medium">⚡ Simple Four-Step Process</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        How to Order Parts?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From uploading files to receiving finished products, it only takes four simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="group text-center relative">
                        {/* 连接线 */}
                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0"></div>

                        <div className="relative z-10">
                            {/* 数字 */}
                            <div className="mb-6">
                                <span className="text-6xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    1
                                </span>
                            </div>

                            {/* 图标 */}
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                                    <Icon icon="mdi:upload" className="text-3xl text-blue-600" />
                                </div>
                            </div>

                            {/* 内容 */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Upload your files</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Multiple designs for different parts can be imported at the same time to produce a single quote. In less than a minute, a detailed cost estimation appears on the screen.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group text-center relative">
                        {/* 连接线 */}
                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0"></div>

                        <div className="relative z-10">
                            {/* 数字 */}
                            <div className="mb-6">
                                <span className="text-6xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    2
                                </span>
                            </div>

                            {/* 图标 */}
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                                    <Icon icon="mdi:cog" className="text-3xl text-blue-600" />
                                </div>
                            </div>

                            {/* 内容 */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose the process</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                First, select the manufacturing process you require. You can then choose from over 130 materials, including metals and plastics, and from a wide range of finishes and certifications.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group text-center relative">
                        {/* 连接线 */}
                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0"></div>

                        <div className="relative z-10">
                            {/* 数字 */}
                            <div className="mb-6">
                                <span className="text-6xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    3
                                </span>
                            </div>

                            {/* 图标 */}
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                                    <Icon icon="mdi:shopping-cart" className="text-3xl text-blue-600" />
                                </div>
                            </div>

                            {/* 内容 */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Order your parts online</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Once you have selected the required options, all you need to do is confirm the order and pay for it on the secure payment platform. Your design will be analysed by our engineers.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="group text-center relative">
                        <div className="relative z-10">
                            {/* 数字 */}
                            <div className="mb-6">
                                <span className="text-6xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    4
                                </span>
                            </div>

                            {/* 图标 */}
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                                    <Icon icon="mdi:package-variant" className="text-3xl text-blue-600" />
                                </div>
                            </div>

                            {/* 内容 */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Receive your parts</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Within a short amount of time, you will receive the parts you ordered directly to your shipping address. You can track your package at any time in your personal account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}