import { FC } from "react";
import { WhiteBlock } from "./white-block";
import { cn } from "@/lib/utils";
import { CheckoutItemsDetails } from "./checkout-items-details";
import { Package, Percent, Truck } from "lucide-react";
import { Button } from "../ui/button";
import { Currency } from "./currency";

interface CheckoutSidebarProps {
  className?: string,
  totalAmount: number,
}

const VAT = 15;
const DELIVERY_PRICE = 250;

const CheckoutSidebar: FC<CheckoutSidebarProps> = (props) => {
  const { className, totalAmount } = props;

  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock
      className={cn("p-6 sticky top-4", className)}
    >
      <div
        className="flex flex-col gap-1"
      >
        <span
          className="text-xl"
        >
          Total:
        </span>
        <span
          className="text-4xl font-extrabold"
        >
          <Currency>
            {totalPrice} 
          </Currency>
        </span>
      </div>

      <CheckoutItemsDetails
        icon={Package}
        title="Cost of goods"
        value={totalAmount}
      />
      <CheckoutItemsDetails
        icon={Percent}
        title="Taxes"
        value={vatPrice}
      />
      <CheckoutItemsDetails
        icon={Truck}
        title="Delivery"
        value={DELIVERY_PRICE}
      />

      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Proceed to payment
      </Button>
    </WhiteBlock>
  )
}

export { CheckoutSidebar }