import { TypeCard } from "@/types";
import styles from "./Card.module.scss";

export const Card = ({
	name,
	phone_code,
	capital,
	region,
	subregion,
	nationality,
	timezones,
}) => {
	return (
		<div className={styles.card}>
			<h1 className={styles["card__title"]}>{name}</h1>
			<h2 className={styles["card__label"]}>{phone_code}</h2>
			<h2 className={styles["card__label"]}>{capital}</h2>
			<h2 className={styles["card__label"]}>{region}</h2>
			<h2 className={styles["card__label"]}>{subregion}</h2>
			<h2 className={styles["card__label"]}>{nationality}</h2>
			<div className={styles["timezones"]}>
				{timezones.map((timezone, index) => {
					return (
						<>
							<h2 key={index}>{timezone.zoneName}</h2>
							<h2 key={index}>{timezone.gmtOffsetName}</h2>
						</>
					);
				})}
			</div>
		</div>
	);
};
