import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]); //sizes[0].name Nan w price i brak wybranego rozmiaru na starcie

  const getPrice = useMemo(() => {
    console.log('Price is changed');
    const size = sizes.find((element) => element.name === currentSize.name);
    console.log(size);
    return basePrice + size.additionalPrice;
  }, [sizes, basePrice, currentSize]);
  console.log(currentColor);

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice}$</span>
        </header>
        <ProductForm
          name={name}
          currentSize={currentSize}
          getPrice={getPrice}
          currentColor={currentColor}
          sizes={sizes}
          colors={colors}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};
Product.propTypes = {
  title: propTypes.string.isRequired,
  basePrice: propTypes.number.isRequired,
  colors: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired,
  name: propTypes.string.isRequired,
};
export default Product;
