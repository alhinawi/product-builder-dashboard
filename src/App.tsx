import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { productList } from "./data";
import { useState } from "react";

function App() {

      /* ------- STATE -------  */
      const [isOpen, setIsOpen] = useState(false);


    /* ------- HANDLER -------  */

    function open() {
      setIsOpen(true);
    }
  
    function close() {
      setIsOpen(false);
    }

  /* ------- RENDER -------  */

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container mx-auto p-5">
      <Button className="bg-indigo-700  hover:bg-indigo-800 mb-5" onClick={open} >
            Add Product
          </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4 rounded-md ">
        {renderProductList}
      </div>
      <Modal  isOpen={isOpen} closeModal={close} title="Add a New Product">
        <div className="flex gap-x-2">
          <Button className="bg-gray-300  hover:bg-gray-800" onClick={close}>
            Cancel
          </Button>
          <Button  className="bg-indigo-700  hover:bg-indigo-800" onClick={open}>
            Submit
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
