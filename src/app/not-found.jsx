import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-8 text-center">
            <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/ef/94/95/ef949502ce5be5e2939e08215dc09588.jpg')] bg-cover bg-center opacity-30"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto justify-center items-center">
                
                <div className="relative mb-10">
                    <h1 className="text-[10rem] md:text-[14rem] font-bold text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-gray-500 bg-clip-text tracking-wide animate-pulse transform hover:scale-110 hover:rotate-2 transition-all duration-700 cursor-pointer">
                        404
                    </h1>
                    
                    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin [animation-duration:2s]"></div>
                    <div className="absolute inset-4 border-2 border-cyan-400/40 rounded-full animate-spin [animation-direction:reverse] [animation-duration:3s]"></div>
                    <div className="absolute inset-8 border-2 border-gray-500/30 rounded-full animate-spin [animation-duration:3.5s]"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-gray-500/20 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                    Página <span className="text-blue-400">Desapareceu</span>!
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed font-serif">
                    Parece que esta página foi atingida por um feitiço de desaparecimento. 
                    <br />
                    Mesmo os melhores bruxos não conseguem encontrá-la!
                </p>

                <div className="mb-10 p-4 border-l-4 border-blue-400 bg-black/30 rounded-r-lg">
                    <p className="text-blue-200 italic text-lg">
                        "Nem todos os que vagam estão perdidos..."
                    </p>
                    <p className="text-gray-400 text-sm mt-2 font-serif">— Mas esta página definitivamente está! 🧙‍♂️</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                        href="/" 
                        className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                        <span className="flex items-center gap-2 font-serif">
                            🏰 Voltar para Hogwarts
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                    </Link>
                    
                    <Link 
                        href="/api" 
                        className="group bg-transparent border-2 border-blue-500 hover:border-blue-400 text-blue-300 hover:text-blue-200 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="flex items-center gap-2 font-serif">
                            ⚡ Ver Bruxos
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}