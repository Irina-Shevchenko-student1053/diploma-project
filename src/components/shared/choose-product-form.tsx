import { cn } from "@/lib/utils";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui/button";
import { ProductType } from "./types/product-type";

interface ChooseProductFormProps {
  product: ProductType,
  className?: string
  onClickAddCart?: () => void,
}

const ChooseProductForm: FC<ChooseProductFormProps> = (props) => {
  const { product: { name, imageUrl }, className, onClickAddCart } = props;
  const textDetaills = "Lorem inpsum";
  const totalPrice = 500;

  return (
    <div
      className={
        cn("flex flex-1", className)
      }
    >
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div
        className="w-[490px] bg-[#f7f6f5] p-7"
      >
        <Title
          size="md"
          className="font-extrabold mb-1"
        >
          {name}
        </Title>

        <p
          className="text-gray-400"
        >
          {textDetaills}
        </p>

        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart {totalPrice}
        </Button>
      </div>
    </div>
  )
}

export { ChooseProductForm }