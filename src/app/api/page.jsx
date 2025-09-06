"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Card, Spin, Pagination } from "antd";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './api.module.css';

export default function Api() {
  const [bruxos, setBruxos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // função para buscar todos os bruxos
  const fetchBruxos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      setBruxos(response.data);
      toast.success("Bruxos carregados com sucesso!", {
        toastId: 'success-load'
      });
    } catch (error) {
      console.error("Erro ao buscar bruxos:", error);
      toast.error("Erro ao carregar bruxos.", {
        toastId: 'error-load'
      });
    } finally {
      setLoading(false);
    }
  };

  // Executa a busca quando o componente carrega
  useEffect(() => {
    fetchBruxos();
  }, []);

  // Calcula quais bruxos mostrar na página atual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBruxos = bruxos.slice(startIndex, endIndex);

  // Função para mudar de página
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  // Função para mudar a quantidade de itens por página
  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  }

  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp9021982.jpg')] bg-fixed bg-cover bg-center min-h-screen p-10 flex flex-col justify-center items-center">
      <div className="max-w-4x1 mx-auto justify-center items-center">
        <h1 className={styles.hpTitle}>
          <span className="font-wizard text-gray-700">Bruxos de Harry Potter</span>
        </h1>

        {loading ? (
          // Tela de carregamento
          <div className="flex flex-col justify-center items-center">
            <Spin size="large" />
            <p>Carregando bruxos...</p>
          </div>
        ) : (
          <>
            {/* Controles de paginação */}
            <div className="flex justify-center items-center mb-6 bg-white/80 h-15 rounded-full p-4">
              <Pagination
                total={bruxos.length}
                showTotal={(total) => `Total ${total} bruxos`}
                pageSize={pageSize}
                current={currentPage}
                showSizeChanger={true}
                pageSizeOptions={["5", "10", "20"]}
                onChange={handlePageChange}
                onShowSizeChange={handlePageSizeChange}
              />
            </div>

            {/* Lista de bruxos em cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {bruxos.map((bruxos) => (
                <Link
                  key={bruxos.id}
                  href={`/api/character/${bruxos.id}`}
                  className="bg-white/50 rounded-1g shadow-md rounded-lg flex flex-col-reverse justify-center items-center transition-transform duration-300 hover:scale-105 active:scale-95 p-6 w-70"
                >
                  <div className="w-full p-4 flex flex-col justify-center items-center">

                    {/* Informações do bruxo */}
                    <h3 className="font-bold text-1g text-gray-800 text-2xl w-ful items-center justify-center flex">
                      {bruxos.name}
                    </h3>
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
                  </div>

                  <img
                    src={
                      bruxos.image ||
                      "https://camo.githubusercontent.com/e7260310f5d1a8a9473a908e039f348a459078b0ba1876d12fbe0a26c8a0e1a7/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
                    }
                    alt={bruxos.name || "Nome não carregado"}
                    className="w-50 h-50 object-cover rounded-full"
                  />
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Container para mostrar as notificações toast */}
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {/* <div className="text-center mb-8">
          <div className="mb-6">
            <button
              onClick={fetchBruxos}
              disable={loading}
              className="bg-gradient-to-r from-yellow-600 to-red-900 text-white px-8 py-3 rounded-lg hover:from-yellow-700 hover:to-red-950 disabled:bg-gray-400 font-semibold cursor-pointer transition-colors"
            >
              {loading ? "Carregando ... " : "🔍 Buscar Bruxos"}
            </button>
          </div>
        </div> */}
      </div>

    </div>
  );
}
