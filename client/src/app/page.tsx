"use client";

import styles from "./page.module.css";
import { CardList } from "@/components/CardList/CardList";
import { useState } from "react";
import { TypeCard } from "@/types";
import { endpoints } from "@/api/config";
import axios, { AxiosResponse } from "axios";

export default function Home() {
	const [cards, setCards] = useState<TypeCard[]>([]);
	const [search, setSearch] = useState<string>("");

	const fetchCardList = async () => {
		const response: AxiosResponse = await axios.post(endpoints.search, {
			q: search,
		});

		if (response.status !== 200) {
			return;
		}

		const data: TypeCard[] = await response.data;
		setCards(data);
	};

	return (
		<>
			<form className={styles["search-container"]} id="searchForm">
				<label htmlFor="query">Запрос:</label>
				<input
					type="text"
					id="query"
					className={styles["search-input"]}
					placeholder="Введите запрос"
					aria-label="Введите запрос"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit" id="searchBtn" className={styles["search-button"]} onClick={fetchCardList}>
					Найти
				</button>
			</form>

			<CardList cards={cards} />
		</>
	);
}
