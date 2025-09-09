"use client";

import React from "react";
import axios from "axios";

export default function Ciclo() {
    const [bruxos, setBruxos] = useState([]);
    const [step, setStep] = useState(1);
    const [isBruxo, setIsBruxo] = useState(false);
    const [showList, setShowList] = useState(false);

    const steps = ["PASSO 1: Renderização no SERVIDOR", "PASSO 2: Hidratação no CLIENTE", "PASSO 3: Montagem - Buscando dados da API", "PASSO 4: Pronto - Dados carregados"];
}