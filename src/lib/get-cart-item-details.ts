
import { mapPizzaType, PizzaSize, PizzaType } from '@/components/shared/constants/pizza';
import { CartStateItem } from './get-cart-details';
import { ProductItemType } from '@/components/shared/types/product-type';

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize | null,
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} cm`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};