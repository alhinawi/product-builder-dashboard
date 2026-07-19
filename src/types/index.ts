import type { IProduct } from "../interfaces";

export type ProductFormFields = Pick<
  IProduct,
  "title" | "description" | "imageURL" | "price"
>;

export type ProductFormErrors = Record<keyof ProductFormFields, string>;