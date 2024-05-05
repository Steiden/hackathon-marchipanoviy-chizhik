import styles from "./CardList.module.scss";
import { TypeCard } from "@/types";
import { Card } from "../Card/Card";

type TypeProps = {
	cards: TypeCard[];
};

export const CardList = ({ cards }: TypeProps) => {
	return (
		<>
			<h2>Карточки</h2>
			<div id="results" className={styles["results-container"]} role="region" aria-live="polite">
				{cards.map((card: TypeCard) => (
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
		</>
	);
};
