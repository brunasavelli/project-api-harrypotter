"use client";

import React from 'react';
import Link from 'next/link';

export default function Sobre() {

    return (
        <div 
            className="min-h-screen bg-blue-200 p-20 items-center justify-center flex bg-cover bg-center"
            style={{ backgroundImage: "url('https://images6.alphacoders.com/130/thumb-1920-1302546.jpg')" }}
        >
            <h1 className="text-white text-4xl font-bold">Bem-vindo à página Sobre</h1>
        </div>
    )
}