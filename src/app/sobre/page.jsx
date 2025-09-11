"use client";

import Link from "next/link";
import styles from './sobre.module.css'
import Header from "../components/Header/page";

export default function Sobre() {
    return (
        <div className="bg-[url('https://i.pinimg.com/736x/ef/94/95/ef949502ce5be5e2939e08215dc09588.jpg')] bg-fixed bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
            <Header />
            <div className={styles.imageContainer}>
                <img src="/images/hpTitle.png" alt="Título de Harry Potter" className={styles.hpImageTitle} />
            </div>
            <div className={styles.textContainer}>
                <h3>Essa API armazena dados dos personagens de Harry Potter, permitindo acessar informações detalhadas sobre bruxos, bruxas e outros personagens do universo criado por J.K. Rowling.</h3>
            </div>
            <div className={styles.main}>
                <div className={styles.trioImage}>
                    <img src="/images/trioDeOuro.png" alt="" />
                </div>
                <div className={styles.trioDescription}>
                    <p>O Trio de Ouro — Harry, Rony e Hermione — é a prova de que a verdadeira magia está na amizade.
                        Harry traz a coragem, Rony a lealdade e Hermione a sabedoria.
                        Juntos, transformaram trevas em esperança e mostraram que nenhum destino é maior do que a força de três corações unidos.</p>
                </div>
            </div>
            {/* <div className={styles.container}>
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
            </div> */}
        </div>
    );
}