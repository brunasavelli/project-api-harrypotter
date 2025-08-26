"use client";

import React from 'react';
import { useState } from 'react';
import axios from "axios"

export default function Api() {
  const [bruxos, setBruxos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarBruxos = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://hp-api.onrender.com/api/characters");
      const data = response.data;
      setBruxos(data);
    } catch (error) {
      console.error("Erro ao buscar bruxos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4x1 mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Bruxos de Harry Potter</h1>

        <div className="text-center mb-8">
          <div className="mb-6">
            <button onClick={buscarBruxos} disable={loading} className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 font-semibold">
              {loading ? "Carregando ... " : "🔍 Buscar Bruxos"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bruxos.map((bruxos) => (
          <div key={bruxos.id} className="bg-white p-6 rounded-1g shadow-md rounded-lg flex flex-row justify-center items-center space-x-20">
            <div className='w-60'>
              <h3 className='font-bold text-1g text-gray-800 text-2xl'>{bruxos.name}</h3>
              <p className='text-gray-500'>{bruxos.gender}</p>
              <div className="text-gray-500">
          {bruxos.alternate_names.length > 0 ? (
            bruxos.alternate_names.map((name, index) => (
              <p key={index}>{name}</p>
            ))
          ) : (
            <p>Sem nomes alternativos</p>
          )}
        </div>
              <p className='text-gray-500'>{bruxos.house}</p>
              <p className='text-gray-500'>{bruxos.ancestry}</p>
              <p className='text-gray-500'>{bruxos.patronus}</p>
              <p className='text-gray-500'>{bruxos.dateOfBirth}</p>
            </div>
            
            <img 
              src={bruxos.image || "https://camo.githubusercontent.com/e7260310f5d1a8a9473a908e039f348a459078b0ba1876d12fbe0a26c8a0e1a7/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"} 
              alt={bruxos.name || "Nome não carregado"} 
              className='w-50 h-60 object-cover rounded-2xl'/>
          </div>
        ))}

      </div>
    </div>
  )
}