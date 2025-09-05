"use client";

import React from 'react';
import Link from 'next/link';
import styles from './sobre.module.css';

export default function Sobre() {

    return (
        <div className="bg-[url('https://wallpapercave.com/wp/wp9021982.jpg')] bg-fixed bg-cover bg-center min-h-screen p-10 flex flex-col justify-center items-center">
            <h1 className={styles.hpTitle}>
                <span className="font-wizard text-gray-700">Bem-vindo à página Sobre</span>
            </h1>
        </div>
    )
}