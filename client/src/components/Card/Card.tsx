import { TypeCard } from "@/types";
import styles from "./Card.module.scss";

export const Card = ({ name, phone_code, capital, region, subregion, nationality, timezones }: TypeCard) => {
    return (
        <div className={styles.card}>
            <h1>{name}</h1>
            <h2>{phone_code}</h2>
            <h2>{capital}</h2>
            <h2>{region}</h2>
            <h2>{subregion}</h2>
            <h2>{nationality}</h2>
            <h2>{timezones}</h2>
        </div>
    )
}
