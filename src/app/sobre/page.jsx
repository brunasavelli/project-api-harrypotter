"use client";

import Link from "next/link";
import styles from './sobre.module.css'
import Header from "../components/Header/page";

export default function Sobre() {
    return (
        <div className="bg-[url('https://wallpapercave.com/wp/wp9021982.jpg')] bg-fixed bg-cover bg-center min-h-screen p-10 flex flex-col justify-center items-center text-white">
            <Header />
            <div className={styles.container}>
                <h2 className="text-4xl font-bold mb-6">Bem-vindo ao Projeto Harry Potter API</h2>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Este projeto foi desenvolvido para explorar os personagens do universo de Harry Potter.
                        Utilizamos a API pública <a href="https://hp-api.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">HP API</a> para obter informações sobre os bruxos, suas casas, patronos e muito mais.
                    </p>
                    <p className={styles.text}>
                        O objetivo é proporcionar uma experiência interativa e visual para os fãs de Harry Potter, permitindo explorar os detalhes de cada personagem.
                    </p>
                    <p className={styles.text}>
                        Desenvolvido com Next.js, React, e estilizado com Tailwind CSS.
                    </p>
                    <Link
                        href="/api"
                        className='bg-gradient-to-r from-yellow-600 to-red-900 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-900'
                    >
                        VEJA A API
                    </Link>
                </div>
            </div>
        </div>
    );
}