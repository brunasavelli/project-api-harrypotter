"use client";

import { useState, useEffect, use } from "react";
import { Card, Spin, Button, Descriptions } from "antd";
import { ArrowLeftOutlined, UserOutlined, EnvironmentOutlined, BankOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";

export default function WizardDetailsPage({ params }) {
    const [bruxo, setBruxo] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchBruxo = async (bruxoId) => {
        try{
            const response = await axios.get(`https://hp-api.onrender.com/api/characters/${bruxoId}`);
            setBruxo(response.data);
        } catch (error) {
            console.error("Erro ao buscar bruxo:", error);
            setBruxo(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchBruxo(resolvedParams.id);
        }
    }, [resolvedParams?.id]);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes do bruxo...</p>
                </div>
            </div>
        );
    }

    if (!bruxo) {
        return (
            <div className={styles.container}>
                <div className={styles.errorWrapper}>
                    <h3>Bruxo não encontrado</h3>
                    <Link href="/api">
                        <Button type="primary" icon={<ArrowLeftOutlined />}>
                            Voltar para API
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/api">
                    <Button icon={<ArrowLeftOutlined />} className={styles.backButton}>
                        Voltar
                    </Button>
                </Link>
                <h2 className={styles.title}>Detalhes do Bruxo</h2>
            </div>

            <div className={styles.contentWrapper}>
                <Card className={styles.mainCard}>
                    <div>
                        <div>
                            <UserOutlined className={styles.avatarIcon} />
                        </div>
                        <div>
                            <h3 className={styles}>{bruxo.name}</h3>
                            <p className={styles}>{bruxo.house}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}