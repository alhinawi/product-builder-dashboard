import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const renderProductList = productList.map((product) => (
  <ProductCard key={product.id} product={product} />
));

function App() {


  return (
 <div>
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 m-5 gap-4 p-2  rounded-md object-cover ">
      {renderProductList}
    </div>
 </div>
  );
}

export default App;




