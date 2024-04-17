import { ProductsDataType } from '@/app/services/classes';
import { ProductServices } from '@/app/services/product-services';
import { useEffect, useState } from 'react';
import ProductFilter from '../filteredProducts/FilteredProducts';
import ProductCard from '../productCard/ProductCard';
import RecommendedItems from '../recommendedItems/RecommendedItems';
import OtherAdds from '../otherAdds/OtherAdds';
import TodaysDeal from '../todaysDeal/TodaysDeal';
import Loading from '../loading/Loading';


const ProductList = (props:any) => {

  const userInput = props.searchParams;
  const [category, setCategory] = useState<string>("");
  const [filterProducts, setFilterProducts] = useState<ProductsDataType[]>([]);
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let filteredProducts;
        if (category === "") {
          filteredProducts = await ProductServices.getProducts();
        } else {
          filteredProducts = await ProductServices.filterProducts(category);
        }

        if (userInput) {
          const filteredProductsBySearch = filteredProducts.filter(
            (p: ProductsDataType) =>
              p.name.toLowerCase().includes(userInput.toLowerCase())
          );
          setFilterProducts(filteredProductsBySearch);
        } else {
          setFilterProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, userInput]);

  return (
    <div>
      <div className="row m-0 position-relative">
        <div className="col-2 position-absolute bg-white h-100 border-end">
          <ProductFilter
            setCategory={setCategory}
          />
          <RecommendedItems/>
          {filterProducts.length >=15 ? (<><OtherAdds/><TodaysDeal/></>):''}
        </div>
        {loading ? (
          <div
            className="min-vh-100 row m-0 col-12 d-flex flex-row flex-wrap justify-content-start me-0"
            style={{
              padding: "5% 1% 2% 24%",
              backgroundColor: "#f0efeb",
              minHeight: "90vh",
            }}
          >
            <Loading/>
          </div>
        ) : (
          <div
            className="col-12 d-flex flex-row flex-wrap justify-content-start me-0"
            style={{
              padding: "5% 1% 2% 24%",
              backgroundColor: "rgb(11, 11,)",
              minHeight: "90vh",
            }}
          >
            {filterProducts.length !== 0 ? (
              filterProducts.map((p: ProductsDataType) => (
                <ProductCard key={p.id} products={p}/>
              ))
            ) : (
              <div className="text-center d-flex flex-column w-100 align-self-center">
                <h1>Sorry, no results found!</h1>
                <span className="text-secondary fs-5">
                  Please check the spelling or try searching for something else
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList