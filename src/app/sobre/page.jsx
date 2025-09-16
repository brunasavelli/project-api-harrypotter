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
                <h3>Essa API armazena e organiza dados dos personagens de Harry Potter, oferecendo acesso a informações detalhadas sobre bruxos, bruxas, criaturas mágicas e demais figuras do universo criado por J.K. Rowling. Com ela, é possível consultar desde dados básicos, como nomes e casas de Hogwarts, até características específicas, como varinhas, patronos, habilidades mágicas e participações em momentos marcantes da saga. Assim, a API serve como uma fonte prática e estruturada para desenvolvedores, pesquisadores ou fãs que desejam explorar com profundidade o mundo bruxo de forma integrada em suas aplicações.</h3>
            </div>
            <div className={styles.mainTop}>
                <div className={styles.trioDescription}>
                    <p><em>"A felicidade pode ser encontrada até mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz."</em></p>
                </div>
            </div>
            <div className={styles.mainBottom}>
                <div className={styles.box}>
                    <img src="/images/wizardingWorld.png" alt="Mundo Bruxo"  className={styles.icon}/>
                    <p className={styles.description}>Conheça o Mundo Bruxo</p>
                </div>
                <div className={styles.box}>
                    <img src="/images/hogwarts.png" alt="Escudo de Hogwarts"  className={styles.icon}/>
                    <p className={styles.description}>Descrubra sua casa de Hogwarts</p>
                </div>
                <div className={styles.box}>
                    <img src="/images/patronus.png" alt="Patrono"  className={styles.icon}/>
                    <p className={styles.description}>Descubra seu Patrono</p>
                </div>
            </div>
        </div>
    );
}