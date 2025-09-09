"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Spin } from "antd";
import styles from './[id].module.css'
import Link from "next/link";

export default function CharacterPage() {
    const { id } = useParams();
    const [bruxo, setBruxo] = useState(null);
    const [loading, setLoading] = useState(true);

    // Função para buscar os detalhes do bruxo
    const fetchBruxo = async () => {
        try {
            const response = await axios.get(
                `https://hp-api.onrender.com/api/characters`
            );
            const data = response.data;
            const selectedBruxo = data.find((item) => item.id === id);
            setBruxo(selectedBruxo);
        } catch (error) {
            console.error("Erro ao buscar detalhes do bruxo:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchBruxo();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spin size="large" />
                <p>Carregando detalhes do bruxo...</p>
            </div>
        );
    }

    if (!bruxo) {
        return <p>Bruxo não encontrado.</p>;
    }

    return (
        <div className={styles.container}>
            <Link 
                href="/api" 
                className='bg-gradient-to-r from-yellow-600 to-red-900 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-900'>
                    Voltar para a lista
            </Link>
            <div className={styles.card}>
                <div className={styles.cardTop}>
                    <div className={styles.textTop}>
                        <h1 className={styles.name}>{bruxo.name}</h1>
                        <div className={styles.houseText}>
                            <p
                                className={bruxo.house === "Gryffindor" ? "text-red-600"
                                    : bruxo.house === "Slytherin" ? "text-green-600 font-semibold"
                                        : bruxo.house === "Hufflepuff" ? "text-yellow-500 font-semibold"
                                            : bruxo.house === "Ravenclaw" ? "text-blue-600 font-semibold"
                                                : "text-gray-500"}
                            >
                                {bruxo.house || "Desconhecida"}
                            </p>
                            {bruxo.house === "Gryffindor" && (
                                <img src="https://img.icons8.com/?size=100&id=0MaghjCIlU4Y&format=png&color=000000" alt="Gryffindor" className="w-6 h-6" />
                            )}
                            {bruxo.house === "Slytherin" && (
                                <img src="https://img.icons8.com/?size=100&id=cRceI952fhbT&format=png&color=000000" alt="Slytherin" className="w-6 h-6" />
                            )}
                            {bruxo.house === "Hufflepuff" && (
                                <img src="https://img.icons8.com/?size=100&id=z7tMHw3wXwUG&format=png&color=000000" alt="Hufflepuff" className="w-6 h-6" />
                            )}
                            {bruxo.house === "Ravenclaw" && (
                                <img src="https://img.icons8.com/?size=100&id=6Xj9rtUmyktD&format=png&color=000000" alt="Ravenclaw" className="w-6 h-6" />
                            )}
                        </div>
                    </div>
                    <img
                        src={bruxo.image || "https://via.placeholder.com/150"}
                        alt={bruxo.name}
                        className={styles.image}
                    />
                </div>
                <div className={styles.cardBottom}>
                    <p className={styles.text}><strong>Nomes alternativos:</strong> {bruxo.alternate_names}</p>
                    <p className={styles.text}><strong>Ancestralidade:</strong> {bruxo.ancestry}</p>
                    <p className={styles.text}><strong>Patrono:</strong> {bruxo.patronus}</p>
                    <p className={styles.text}><strong>Ator:</strong> {bruxo.actor || "Desconhecido"}</p>
                </div>
            </div>
        </div>
    );
}
