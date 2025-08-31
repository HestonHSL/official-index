import { Icon } from 'umi';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Icon icon="mdi:printer-3d" className="text-white text-lg" />
                            </div>
                            <span className="text-xl font-bold">PrintHub</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Professional 3D printing solutions provider, offering comprehensive manufacturing services from prototyping to mass production.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Icon icon="mdi:facebook" className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Icon icon="mdi:twitter" className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Icon icon="mdi:linkedin" className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Icon icon="mdi:youtube" className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">3D Printing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Rapid Prototyping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Custom Manufacturing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Design Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Post-Processing</a></li>
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Technologies</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">SLA</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">SLS</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">SLM</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">MJF</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FDM</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-start space-x-3">
                                <Icon icon="mdi:map-marker" className="text-blue-400 mt-1 flex-shrink-0" />
                                <span className="text-sm">Shenzhen, China</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Icon icon="mdi:phone" className="text-blue-400 flex-shrink-0" />
                                <span className="text-sm">+86 XXX-XXXX-XXXX</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Icon icon="mdi:email" className="text-blue-400 flex-shrink-0" />
                                <span className="text-sm">info@printhub.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Icon icon="mdi:clock" className="text-blue-400 flex-shrink-0" />
                                <span className="text-sm">Mon-Fri: 9:00-18:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2024 PrintHub. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
