import { useState  } from "react";
import { productList, formInputsList } from "./data";
import type { IProduct } from "./interfaces";
import type { ChangeEvent, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

function App() {

  const defaultProduct: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    }
  }

  /* ------- STATE -------  */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProduct);


  /* ------- HANDLER -------  */

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(product);

    setProduct({ ...product, [name]: value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Submitted Product:", product);
  }

  const onCancelHandler = () => {
    setProduct(defaultProduct);
    close();
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
        value={product[input.name]}
        onChange={onChangeHandler}
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
        <form className="flex flex-col gap-y-3 " onSubmit={onSubmitHandler}>
          {renderFormInputs}
          <div className="flex gap-x-3">
            <Button className="bg-gray-400  hover:bg-gray-500" type="button" onClick={onCancelHandler} >
              Cancel
            </Button>
            <Button
              className="bg-indigo-700  hover:bg-indigo-800"
              onClick={open}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
