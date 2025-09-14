import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutItem } from "../checkout-item";
import { CartStateItem } from "@/lib/get-cart-details";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { CartStateProps } from "../store/cart";

interface CheckoutCartProps {
  className?: string;
  cartItems: CartStateItem[];
  deleteCartItem: CartStateProps["deleteCartItem"],
  handlerCountButton: (action: 'plus' | 'minus', id: string, quantity: number) => void
}

const CheckoutCart: FC<CheckoutCartProps> = (props) => {
  const { className, cartItems, deleteCartItem, handlerCountButton } = props;

  return (
    <WhiteBlock
      title="1. Cart"
      className={className}
    >
      <div
        className="flex flex-col gap-5"
      >
        {
          cartItems.map(item => (
            <CheckoutItem
              id={item.id}
              key={item.id}
              name={item.name}
              price={item.price}
              details={getCartItemDetails(item.ingredients, item.pizzaType, item.pizzaSize)}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              disabled={item.disabled}
              onClickCountButton={(type) => {
                handlerCountButton(type, item.id, item.quantity)
              }}
              onClickRemove={() => deleteCartItem(item.id)}
            />
          ))
        }
      </div>
    </WhiteBlock>
  )
}

export { CheckoutCart }