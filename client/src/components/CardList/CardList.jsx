import styles from "./CardList.module.css";
// import { TypeCard } from "@/types";
import { Card } from "../Card/Card";

// type TypeProps = {
// 	cards: TypeCard[];
// };

export const CardList = ({ cards }) => {
	return (
		<>
			<h2>Карточки</h2>
			<div id="results" className={styles["results-container"]} role="region" aria-live="polite">
				{cards.map((card) => (
					<Card
						key={card.name}
						name={card.name}
						phone_code={card.phone_code}
						capital={card.capital}
						region={card.region}
						subregion={card.subregion}
						nationality={card.nationality}
						timezones={card.timezones}
					/>
				))}
			</div>
			<Card
				name="Россия"
				phone_code={123}
				capital="Москва"
				region="Евразия"
				subregion="Европа"
				nationality="Русы"
				timezones={[{ gmtOffsetName: "UTC+03:00", zoneName: "UTC+03:00" }]}
			/>
		</>
	);
};
