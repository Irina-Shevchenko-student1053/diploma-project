import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface ProductCardProps {
  id: string,
  name: string,
  price: number,
  imageUrl: string,
  className?: string,
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { id, name, price, imageUrl, className, } = props;

  return (
    <div
      className={cn(className)}
    >
      <Link
        href={`/product/${id}`}
      >
        <div
          className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]"
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-[215px] h-[215px] object-cover"
          />
        </div>

        <Title
          size="sm"
          className="mb-1 mt-3 font-bold"
        >
          {name}
        </Title>

        <p
          className="text-sm text-gray-400"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cupiditate ipsum quibusdam incidunt eius nam sunt labore minus minima fugit tempora, optio, saepe quam possimus quidem voluptates. Dolores, eum beatae.
        </p>

        <div
          className="flex justify-between items-center mt-4"
        >
          <span
            className="text-[20px]"
          >
            from <b>{price}</b> $
          </span>

          <Button
            variant="secondary"
          >
            <Plus
              size={20}
              className="mr-1"
            />
            Add
          </Button>
        </div>
      </Link>
    </div>
  )
}

export { ProductCard }