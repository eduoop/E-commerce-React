import { Cart } from "../models/Card";
import { Product } from "../models/Product";

function formatData(product: Product | Cart ) {
  const day = product.dateInclusion.split("-")[0];
  const month = product.dateInclusion.split("-")[1];
  const year = product.dateInclusion.split("-")[2];

  const finalDate = `${day}/${month}/${year}`;

  return finalDate;
}

export default formatData;
