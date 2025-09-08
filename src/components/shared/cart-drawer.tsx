"use client"

import { FC, ReactNode } from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { useCartStore } from "./store/cart";

interface CartDrawerProps {
  className?: string,
  children?: ReactNode,
}

const CartDrawer: FC<CartDrawerProps> = (props) => {
  const { children, className } = props;
  const { cartItems, totalAmount, updateItemQuantity, deleteCartItem } = useCartStore();

  const handlerCountButton = (action: 'plus' | 'minus', id: string, quantity: number) => {
    const newQuantity = action === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  }

  return (
    <Sheet>
      <SheetTrigger
        asChild
      >
        {children}
      </SheetTrigger>
      <SheetContent
        className={cn("flex flex-col justify-between pb-0 bg-[#F4F1EE]", className)}
      >
        <SheetHeader>
          <SheetTitle>
            There are <span className="font-bold">{cartItems.length} three items</span> in your cart.
          </SheetTitle>
        </SheetHeader>

        <div
          className="overflow-y-auto flex-1"
        >
          <div
            className="mb-2"
          >
            {
              cartItems.map((item, index) => (
                <CartDrawerItem
                  key={`${item.id}-${index}`}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(item.ingredients, item.pizzaType, item.pizzaSize)}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(action) => handlerCountButton(action, item.id, item.quantity)}
                  onClickDelete={() => deleteCartItem(item.id)}
                />
              ))
            }
          </div>
        </div>

        <SheetFooter className=" bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} $</span>
            </div>

            <Link href="/checkout">
              <Button
                // onClick={() => setRedirecting(true)}
                // loading={redirecting}
                type="submit"
                className="w-full h-12 text-base">
                Place an order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { CartDrawer }