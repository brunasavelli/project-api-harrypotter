"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';

export default function Api() {
  const [bruxos, setBruxos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarBruxos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      const data = response.data;
      setBruxos(data);
    } catch (error) {
      console.error("Erro ao buscar bruxos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('https://images6.alphacoders.com/130/thumb-1920-1302546.jpg')] bg-fixed bg-cover bg-center min-h-screen p-10">
      <button className='mt-6 gap-6 flex flex-row'>
        <Link
          href="/sobre"
          className='bg-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow  hover:bg-blue-900'>
          SAIBA MAIS
        </Link>
        <Link
          href="/perfil"
          className='bg-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow  hover:bg-blue-900'>
          PERFIL
        </Link>
      </button>
      <div className="max-w-4x1 mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          Bruxos de Harry Potter
        </h1>

        <div className="text-center mb-8">
          <div className="mb-6">
            <button
              onClick={buscarBruxos}
              disable={loading}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 font-semibold"
            >
              {loading ? "Carregando ... " : "🔍 Buscar Bruxos"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bruxos.map((bruxos) => (
          <div
            key={bruxos.id}
            className="bg-white/50 rounded-1g shadow-md rounded-lg flex flex-row justify-center items-center p-6 space-x-20 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <div>
              <h3 className="font-bold text-1g text-gray-800 text-2xl w-35">
                {bruxos.name}
              </h3>
              <p className="text-gray-900">{bruxos.gender}</p>
              <div className="text-gray-900">
                {bruxos.alternate_names.length > 0 ? (
                  bruxos.alternate_names.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))
                ) : (
                  <p>Sem nomes alternativos</p>
                )}
              </div>
              <p
                className={
                  bruxos.house === "Gryffindor" ? "text-red-600 font-semibold flex"
                    : bruxos.house === "Slytherin" ? "text-green-600 font-semibold flex"
                      : bruxos.house === "Hufflepuff" ? "text-yellow-500 font-semibold flex"
                        : bruxos.house === "Ravenclaw" ? "text-blue-600 font-semibold flex"
                          : "text-gray-500 flex items-center justify-between"
                }
              >
                <span>{bruxos.house}</span>
                {bruxos.house === "Gryffindor" && (
                  <img src="https://img.icons8.com/?size=100&id=0MaghjCIlU4Y&format=png&color=000000" alt="Gryffindor" className="w-6 h-6 ml-2" />
                )}
                {bruxos.house === "Slytherin" && (
                  <img src="https://img.icons8.com/?size=100&id=cRceI952fhbT&format=png&color=000000" alt="Slytherin" className="w-6 h-6 ml-2" />
                )}
                {bruxos.house === "Hufflepuff" && (
                  <img src="https://img.icons8.com/?size=100&id=z7tMHw3wXwUG&format=png&color=000000" alt="Hufflepuff" className="w-6 h-6 ml-2" />
                )}
                {bruxos.house === "Ravenclaw" && (
                  <img src="https://img.icons8.com/?size=100&id=6Xj9rtUmyktD&format=png&color=000000" alt="Ravenclaw" className="w-6 h-6 ml-2" />
                )}
              </p>
              <p className="text-gray-900">{bruxos.ancestry}</p>
              <p className="text-gray-900">{bruxos.patronus}</p>
              <p className="text-gray-900">{bruxos.dateOfBirth}</p>
            </div>

            <img
              src={
                bruxos.image ||
                "https://camo.githubusercontent.com/e7260310f5d1a8a9473a908e039f348a459078b0ba1876d12fbe0a26c8a0e1a7/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
              }
              alt={bruxos.name || "Nome não carregado"}
              className="w-50 h-60 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
