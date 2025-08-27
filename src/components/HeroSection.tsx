import yayJpg from '../assets/yay.jpg';
import { Icon } from 'umi';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle system
        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }> = [];

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
                ctx.fill();

                // Draw connections
                particles.forEach((otherParticle, j) => {
                    if (i === j) return;
                    const distance = Math.sqrt(
                        Math.pow(particle.x - otherParticle.x, 2) +
                        Math.pow(particle.y - otherParticle.y, 2)
                    );
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.8 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 overflow-hidden">
            {/* Canvas background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
            />

            {/* Tech background elements */}
            <div className="absolute inset-0" style={{ zIndex: 1 }}>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Tech circuit lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-20"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-20"></div>
                <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent opacity-20"></div>
                <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-20"></div>

                {/* Hexagon pattern */}
                <div className="absolute top-10 right-20 opacity-10">
                    <div className="w-32 h-32 border border-blue-300 transform rotate-45"></div>
                </div>
                <div className="absolute bottom-10 left-20 opacity-10">
                    <div className="w-24 h-24 border border-indigo-300 transform rotate-45"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4" style={{ zIndex: 2 }}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/50">
                                <span className="text-blue-700 text-xs font-medium">🚀 Industry-leading 3D printing services</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="text-gray-900">
                                    Professional 3D Printing
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                    On-Demand Manufacturing
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                PrintHub - Your 3D printing innovation partner, from concept to reality, we make creativity accessible
                            </p>
                        </div>

                        {/* Core advantages - List */}
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                                    <Icon icon="mdi:factory" className="text-white text-xs" />
                                </div>
                                <div>
                                    <span className="text-gray-900 font-semibold text-sm">3 Manufacturing Centers</span>
                                    <span className="text-gray-500 text-xs ml-2">• Covering nationwide, nearby service</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                                    <Icon icon="mdi:lightning-bolt" className="text-white text-xs" />
                                </div>
                                <div>
                                    <span className="text-gray-900 font-semibold text-sm">24h Delivery</span>
                                    <span className="text-gray-500 text-xs ml-2">• Fastest 24-hour completion</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                                    <Icon icon="mdi:flask" className="text-white text-xs" />
                                </div>
                                <div>
                                    <span className="text-gray-900 font-semibold text-sm">8 Technologies</span>
                                    <span className="text-gray-500 text-xs ml-2">• 200+ material choices</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                                    <Icon icon="mdi:target" className="text-white text-xs" />
                                </div>
                                <div>
                                    <span className="text-gray-900 font-semibold text-sm">99.9%</span>
                                    <span className="text-gray-500 text-xs ml-2">• Customer satisfaction</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed text-sm">
                                From concept design to mass production, we provide comprehensive 3D printing solutions. Including FDM, SLA, SLS, metal printing and other technologies,
                                supporting engineering plastics, resins, metal powders and other materials.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center text-base font-medium shadow-lg hover:shadow-xl border border-blue-500/30">
                                    <Icon icon="mdi:cloud" className="mr-2" />
                                    Get Instant Quote
                                </button>

                                <button className="bg-white/60 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl border border-white/50 hover:bg-white/80 transition-all duration-300 flex items-center shadow-lg">
                                    <Icon icon="mdi:play" className="mr-2" />
                                    Watch Demo
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center">
                                    <Icon icon="mdi:lock" className="mr-1" />
                                    All uploads are secure
                                </span>
                                <span className="flex items-center">
                                    <Icon icon="mdi:lightning-bolt" className="mr-1" />
                                    Smart instant pricing
                                </span>
                                <span className="flex items-center">
                                    <Icon icon="mdi:target" className="mr-1" />
                                    Professional support
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="relative">
                        <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-2xl">
                            <div className="relative">
                                <img
                                    src={yayJpg}
                                    alt="3D printing samples"
                                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                                />
                                <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-2 py-1 rounded-full shadow-lg">
                                    <span className="text-xs font-medium">🔥 Hot Sale</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="text-center p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50">
                                    <div className="text-2xl font-bold text-blue-600">24h</div>
                                    <div className="text-gray-600 text-xs">Fastest delivery</div>
                                </div>
                                <div className="text-center p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50">
                                    <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                                    <div className="text-gray-600 text-xs">Customer satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
