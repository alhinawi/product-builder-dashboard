import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { productList, formInputsList } from "./data";
import { useState } from "react";
import Input from "./components/ui/Input";

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

  const renderFormInputs = formInputsList.map((input) => (
    <div className="flex flex-col gap-y-0.5" key={input.id}>
      <label htmlFor={input.id} className="text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
      
      />
    </div>
  ));

  return (
    <main className="container mx-auto p-5">
      <Button
        className="bg-indigo-700  hover:bg-indigo-800 mb-5"
        onClick={open}
      >
        Add Product
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4 rounded-md ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="Add A New Product">
        <form className="flex flex-col gap-y-3 ">{renderFormInputs}
            <div className="flex gap-x-3">
          <Button className="bg-gray-400  hover:bg-gray-500" onClick={close}>
            Cancel
          </Button>
          <Button className="bg-indigo-700  hover:bg-indigo-800" onClick={open}>
            Submit
          </Button>
        </div>
        </form>
      
      </Modal>
    </main>
  );
}

export default App;
