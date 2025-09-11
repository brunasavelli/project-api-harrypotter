"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header/page';

export default function Perfil() {

    return (
        <div 
            className="min-h-screen flex items-center justify-center bg-[url('https://wallpapercave.com/wp/wp9021982.jpg')] bg-fixed bg-cover bg-center px-4 py-10"
        >
            <Header />
            <div
                className='backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-3xl flex flex-col items-center space-y-6 text-center max-w-2xl w-full px-10 py-10 animate-fade-in mt-12'
            >
                <div className="relative flex justify-center items-center mb-2">
                    <img src="https://avatars.githubusercontent.com/u/158209933?v=4" alt="Foto de Bruna Savelli"
                        className='w-36 h-36 rounded-full border-4 border-orange-700 shadow-xl transition-transform duration-300 hover:scale-105' />
                    <span className="absolute bottom-2 right-2 bg-gradient-to-r from-yellow-600 to-red-900 w-6 h-6 rounded-full border-2 border-white animate-pulse"></span>
                </div>
                <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-900 bg-clip-text text-transparent drop-shadow-lg">
                    Sobre a Autora
                </h1>
                <p className="text-lg text-gray-800 mb-2">
                    Olá, visitante! Meu nome é <span className="font-semibold text-red-900">Bruna Savelli</span>.<br/>
                    Este site foi criado para armazenar e apresentar meu projeto de TCC sobre personagens de Harry Potter!
                </p>
                <p className="text-md text-gray-800 mb-4 text-justify">
                    Aqui você encontrará informações relacionadas aos personagens principais, secundários e figurantes, reunidos especialmente para o desenvolvimento do meu Trabalho de Conclusão de Curso. Fique à vontade para explorar e acompanhar o andamento do projeto!
                </p>
                <div className='flex flex-row justify-center items-center gap-4 mt-4'>
                    <Link
                        href="/sobre"
                        className='bg-gradient-to-r from-yellow-600 to-red-900 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-900'
                    >
                        SAIBA MAIS
                    </Link>
                    <Link
                        href="/api"
                        className='bg-gradient-to-r from-yellow-600 to-red-900 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-900'
                    >
                        API
                    </Link>
                </div>
            </div>
        </div>
    )
}