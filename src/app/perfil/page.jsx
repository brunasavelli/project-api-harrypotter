"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header/page';

export default function Perfil() {

    return (
        <div 
            className="min-h-screen flex items-center justify-center bg-[url('https://i.pinimg.com/736x/ef/94/95/ef949502ce5be5e2939e08215dc09588.jpg')] bg-fixed bg-cover bg-center px-4 py-10"
        >
            <Header />
            <div
                className='backdrop-blur-lg bg-white/10 shadow-2xl rounded-3xl flex flex-col items-center space-y-8 text-center max-w-2xl w-full px-10 py-12 animate-fade-in mt-16 relative'
            >
                <div className="relative flex justify-center items-center mb-2">
                    <img src="https://avatars.githubusercontent.com/u/158209933?v=4" alt="Foto de Bruna Savelli"
                        className='w-40 h-40 rounded-full border-4 border-gray-400 shadow-xl transition-transform duration-300 hover:scale-105' />
                    <span className="absolute bottom-2 right-2 bg-blue-900 w-7 h-7 rounded-full border-2 border-gray-200 animate-pulse"></span>
                </div>
                <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-lg flex items-center justify-center gap-3">
                    <span>Sobre a Autora</span>
                    <span className="inline-block"></span>
                </h1>
                <p className="text-xl text-gray-200 mb-2 font-medium font-sans">
                    Olá, visitante! Meu nome é <span className="font-semibold text-blue-200">Bruna Savelli</span>.<br/>
                    Este site foi criado para armazenar e apresentar meu projeto de TCC sobre personagens de Harry Potter!
                </p>
                <p className="text-lg text-gray-300 mb-6 text-justify">
                    Aqui você encontrará informações relacionadas aos personagens principais, secundários e figurantes, reunidos especialmente para o desenvolvimento do meu Trabalho de Conclusão de Curso. Fique à vontade para explorar e acompanhar o andamento do projeto!
                </p>
                <div className='flex flex-row justify-center items-center gap-6 mt-4'>
                    <Link
                        href="/sobre"
                        className='bg-gradient-to-r from-gray-800 to-blue-700 text-gray-100 font-bold px-7 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 flex items-center gap-2'
                    >
                        SAIBA MAIS
                    </Link>
                    <Link
                        href="/api"
                        className='bg-gradient-to-r from-gray-800 to-blue-700 text-gray-100 font-bold px-7 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 flex items-center gap-2'
                    >
                        API
                    </Link>
                </div>
            </div>
        </div>
    )
}