import calculationPrices from "../utils/calculationPrices";
import { FormData } from "../types";


interface TotalPriceProps {
  formData: FormData;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ formData }) => {
  console.log(formData);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Total Harga</h1>
      <div className="flex justify-between">
        <p>Total</p>
        <p className="font-semibold">Rp{calculationPrices(formData).totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TotalPrice;
