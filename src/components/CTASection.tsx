export default function CTASection() {
    return (
        <section className="py-20 bg-blue-600">
            <div className="max-w-4xl mx-auto text-center px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Start Your 3D Printing Project
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                        Upload your design files now and get professional quotes and technical support
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl">
                            Get Started Now
                        </button>
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-400 transition-all duration-300 border border-white/20">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
