import styles from './MyCars.module.css'

const MyCars = ({ brand, name, year, color, price }) => {
  return (
    <div>
      <div className={styles.background_cars}>
        <h1 className={styles.title_car}>Marca do veículo: {brand}</h1>
        <p className={styles.description_cars}>Nome do veículo:<span className={styles.text_cars}>{name}</span> </p>
        <p className={styles.description_cars}>Ano de fabricação:<span className={styles.text_cars}>{year}</span> </p>
        <p className={styles.description_cars}>Cor de fábrica:<span className={styles.text_cars}>{color}</span> </p>
        <p className={styles.description_cars}>Preço sugerido:<span className={styles.text_cars}>{price}</span> </p>
      </div>
    </div>
  );
};

export default MyCars;
