import CarFilter from 'components/CatalogPage/CarFilter/CarFilter';
import ProductCardSet from 'components/Common/ProductCardSet/ProductCardSet';
import MainTitle from 'components/Common/MainTitle/MainTitle';

const CatalogPage = () => (
  <section>
    <MainTitle title="Catalog" />
    <CarFilter />
    <ProductCardSet />
  </section>
);

export default CatalogPage;
