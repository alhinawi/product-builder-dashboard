import Button from "./ui/Button";
import Image from "./Image";
import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
interface Props {
  product?: IProduct;
}

const ProductCard = ({ product }: Props) => {
  if (!product) return null;

  const { imageURL, title, description, price } = product;
  return (
    <div className="border border-gray-300 p-2 rounded-md flex flex-col ">
        <Image
          imageSrc={imageURL}
          altText={title}
          className="rounded-md mb-2 h-72 object-fit"
        />
      <h3 className="font-bold">{title}</h3>
      <p className="">
        {txtSlicer(description, 50)}
      </p>
      <div className="flex gap-0.5 mt-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex gap-2 mt-2 items-center justify-between">
        <span className="text-lg font-semibold text-indigo-600">{price}$</span>
        <Image
          imageSrc={product.imageURL}
          altText={product.title}
          className="w-10 h-10 rounded-full object-bottom cursor-pointer"
        />
      </div>
      <div className="flex gap-x-2 mt-5 text-white">
        <Button
          className="bg-indigo-600   hover:bg-indigo-500"
          onClick={() => {
            console.log("clicked");
          }}
        >
          EDIT
        </Button>
        <Button className="bg-red-600  hover:bg-red-500"   onClick={() => {
            alert("clicked");
          }}>DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
