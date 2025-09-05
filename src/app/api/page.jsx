"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import styles from './api.module.css';

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
    <div className="bg-[url('https://wallpapercave.com/wp/wp9021982.jpg')] bg-fixed bg-cover bg-center min-h-screen p-10 flex flex-col justify-center">
      <div className="max-w-4x1 mx-auto">
        <h1 className={styles.hpTitle}>
          <span className="font-wizard text-gray-700">Bruxos de Harry Potter</span>
        </h1>

        <div className="text-center mb-8">
          <div className="mb-6">
            <button
              onClick={buscarBruxos}
              disable={loading}
              className="bg-gradient-to-r from-yellow-600 to-red-900 text-white px-8 py-3 rounded-lg hover:from-yellow-700 hover:to-red-950 disabled:bg-gray-400 font-semibold cursor-pointer transition-colors"
            >
              {loading ? "Carregando ... " : "🔍 Buscar Bruxos"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bruxos.map((bruxos) => (
          
          <div
            key={bruxos.id}
            className="bg-white/50 rounded-1g shadow-md rounded-lg flex flex-col-reverse justify-center items-center transition-transform duration-300 hover:scale-105 active:scale-95 p-6 w-70"
          >
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <h3 className="font-bold text-1g text-gray-800 text-2xl w-ful items-center justify-center flex">
                {bruxos.name}
              </h3>
              {/* <p className="text-gray-900">{bruxos.gender}</p> */}
              {/* <div className="text-gray-900">
                {bruxos.alternate_names.length > 0 ? (
                  bruxos.alternate_names.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))
                ) : (
                  <p>Sem nomes alternativos</p>
                )}
              </div> */}
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
              {/* <p className="text-gray-900">{bruxos.ancestry}</p> */}
              {/* <p className="text-gray-900">{bruxos.patronus}</p> */}
              {/* <p className="text-gray-900">{bruxos.dateOfBirth}</p> */}
            </div>

            <img
              src={
                bruxos.image ||
                "https://camo.githubusercontent.com/e7260310f5d1a8a9473a908e039f348a459078b0ba1876d12fbe0a26c8a0e1a7/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
              }
              alt={bruxos.name || "Nome não carregado"}
              className="w-50 h-50 object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
