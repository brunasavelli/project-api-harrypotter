"use client";

import React from 'react';
import Link from 'next/link';

export default function Perfil() {

    return (
        <div 
            className="min-h-screen bg-blue-200 p-20 items-center justify-center flex bg-[url('https://images6.alphacoders.com/130/thumb-1920-1302546.jpg')] bg-fixed bg-cover bg-center h-96 w-full"
        >
            <div
                className='justify-center items-center p-6 rounded-1g shadow-md rounded-lg flex flex-col space-y-4 text-center w-200'
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} >
                <img src="https://avatars.githubusercontent.com/u/158209933?v=4" alt="Foto de Bruna Savelli"
                    className='w-50 rounded-full shadow-2xl' />
                <h1 className="text-3xl font-bold text-blue-900 mb-4">
                    Sobre a Autora
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                    Olá, visitante! Meu nome é <span className="font-semibold text-blue-800">Bruna Savelli</span>.
                    Este site foi criado para armazenar e apresentar meu projeto de TCC sobre personagens de Harry Potter!
                </p>
                <p className="text-md text-gray-600 mb-4 text-align justify-center">
                    Aqui você encontrará informações relacionadas aos personagens principais, secundários e figurantes, reunidos especialmente para o desenvolvimento do meu Trabalho de Conclusão de Curso. Fique à vontade para explorar e acompanhar o andamento do projeto!
                </p>
                <div className='flex flex-row justify-evenly items-center'>
                    <button className='mt-6 gap-6 flex flex-row'>
                        <Link
                            href="/sobre"
                            className='bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow  hover:bg-blue-900'>
                            SAIBA MAIS
                        </Link>
                        <Link
                            href="/api"
                            className='bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow  hover:bg-blue-900'>
                            API
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}