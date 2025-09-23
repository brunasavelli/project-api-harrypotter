"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PostPage() {
    const [loading, setLoading] = useState(false);
    const [addCharacter, setAddCharacter] = useState([]);
    const [character, setCharacter] = useState([]);
    const [error, setError] = useState(false);
    const [form, setForm] = useState({
        name: "",
        house: "",
        ancestry: "",
        patronus: "",
        image: ""
    });

    const criarNovoPersonagem = async (e) => {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.post("https://hp-api.onrender.com/api/characters", {
                name: form.name.trim(),
                house: form.house.trim(),
                ancestry: form.ancestry.trim(),
                patronus: form.patronus.trim(),
                image: form.image.trim()
            });

            setAddCharacter([response.data, ...addCharacter]);
            setForm({
                name: "",
                house: "",
                ancestry: "",
                patronus: "",
                image: ""
            });
            
            toast.success("Personagem criado com sucesso! 🪄", {
                toastId: 'success-create'
            });
        } catch (error) {
            setError(true);
            toast.error("Erro ao criar personagem. Tente novamente!", {
                toastId: 'error-create'
            });
            console.error("❌ Erro ao criar personagem:", error);
        } finally {
            setLoading(false);
        }
    };

    const atualizarForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className="">
            <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/ef/94/95/ef949502ce5be5e2939e08215dc09588.jpg')] bg-cover bg-center"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <Link href="/api" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4">
                        ← Voltar aos Bruxos
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text mb-2">
                        Adicionar Novo Bruxo
                    </h1>
                    <p className="text-gray-300 font-light">Crie um novo personagem para o mundo mágico</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white font-medium mb-2">Nome do Personagem</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={atualizarForm}
                                placeholder="Ex: Harry Potter"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Casa de Hogwarts</label>
                            <select
                                name="house"
                                value={form.house}
                                onChange={atualizarForm}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                            >
                                <option value="" className="text-gray-800">Selecione uma casa</option>
                                <option value="Gryffindor" className="text-gray-800">🦁 Gryffindor</option>
                                <option value="Slytherin" className="text-gray-800">🐍 Slytherin</option>
                                <option value="Hufflepuff" className="text-gray-800">🦡 Hufflepuff</option>
                                <option value="Ravenclaw" className="text-gray-800">🦅 Ravenclaw</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Ancestralidade</label>
                            <input
                                type="text"
                                name="ancestry"
                                value={form.ancestry}
                                onChange={atualizarForm}
                                placeholder="Ex: half-blood, pure-blood, muggle-born"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Patronus</label>
                            <input
                                type="text"
                                name="patronus"
                                value={form.patronus}
                                onChange={atualizarForm}
                                placeholder="Ex: stag, doe, phoenix"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">URL da Imagem</label>
                            <input
                                type="url"
                                name="image"
                                value={form.image}
                                onChange={atualizarForm}
                                placeholder="https://exemplo.com/imagem.jpg"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <button 
                            onClick={criarNovoPersonagem} 
                            disabled={!form.name.trim() || loading}
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    Criando...
                                </span>
                            ) : (
                                "✨ Criar Personagem"
                            )}
                        </button>
                    </div>
                </div>

                {addCharacter.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Personagens Criados Recentemente
                        </h2>
                        <div className="grid gap-6">
                            {addCharacter.map((char, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                                    <div className="flex items-center gap-6">
                                        {char.image && (
                                            <img 
                                                src={char.image} 
                                                alt={char.name} 
                                                className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">{char.name}</h3>
                                            <div className="space-y-1 text-gray-300">
                                                <p><span className="text-yellow-400">Casa:</span> {char.house}</p>
                                                <p><span className="text-yellow-400">Ancestralidade:</span> {char.ancestry}</p>
                                                <p><span className="text-yellow-400">Patronus:</span> {char.patronus}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

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
        </div>
    )
}