"use client"

import { CheckoutSidebar } from "@/components/shared/checkout-sidebar";
import { Container } from "@/components/shared/container";
import { useCart } from "@/components/shared/hooks/use-cart";
import { Title } from "@/components/shared/title";
import { NextPage } from "next";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"

// import * as z from "zod"
import { CheckoutCart } from "@/components/shared/checkout/checkout-cart";
import { CheckoutPersonalForm } from "@/components/shared/checkout/checkout-personal-form";
import { CheckoutAddressForm } from "@/components/shared/checkout/checkout-address-form";

// const schema = z.object({
//   email: z.string(),
//   phone: z.string(),
//   address: z.string(),
//   comment: z.string(),
//   fullName: z.string(),
// })

const CheckoutPage: NextPage = () => {
  const { cartItems, totalAmount, deleteCartItem, handlerCountButton } = useCart();
  // const { register, handleSubmit } = useForm({
  //   resolver: zodResolver(schema),
  //   defaultValues: {
  //     email: "",
  //     phone: "",
  //     address: "",
  //     comment: "",
  //     fullName: "",
  //   }
  // })

  return (
    <Container
      className="mt-5"
    >
      <Title
        size="xl"
        className="font-extrabold mb-8 text-[36px]"
      >
        Place an order
      </Title>

      <div
        className="flex gap-10"
      >
        <div
          className="flex flex-col gap-10 flex-1 mb-20"
        >
          <CheckoutCart
            cartItems={cartItems}
            deleteCartItem={deleteCartItem}
            handlerCountButton={handlerCountButton}
          />

          <CheckoutPersonalForm />

          <CheckoutAddressForm />
        </div>

        <div
          className="w-[450px]"
        >
          <CheckoutSidebar
            totalAmount={totalAmount}
          />
        </div>
      </div>

    </Container>
  )
}

export default CheckoutPage;