import styles from './ProductForm.module.scss';
import Button from '../Button/Button.js';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = ({
  name,
  currentSize,
  getPrice,
  currentColor,
  sizes,
  colors,
  setCurrentColor,
  setCurrentSize,
}) => {
  const handleOrder = (e) => {
    e.preventDefault();
    console.log('Summary:');
    console.log('============');
    console.log('Name:', name);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize.name);
    console.log('color:', currentColor);
  };
  return (
    <form>
      <OptionSize
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        sizes={sizes}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button} onClick={handleOrder}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};
ProductForm.propTypes = {
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};
export default ProductForm;
