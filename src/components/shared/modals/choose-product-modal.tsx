"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FC, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ProductType } from "../types/product-type";
import { ChooseProductForm } from "../choose-product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";

interface ChooseProductModalProps {
  product: ProductType,
}

const ChooseProductModal: FC<ChooseProductModalProps> = (props) => {
  const { product } = props;
  const router = useRouter();
  const isPizzaForm = !!product.productItem[0].pizzaType;

  const handlerProduct = useMemo(() => { //what best to use here  useMemo or useCallback?
    if (isPizzaForm) return (
      <ChoosePizzaForm
        product={product}
      />
    )
    return (
      <ChooseProductForm
        product={product}
      />
    )
  }, [product, isPizzaForm])

  return (
    <Dialog
      open={Boolean(product)}
      onOpenChange={() => router.back()}
    >
      <DialogTitle />
      <DialogContent
        className='p-0 min-h-[500px] bg-white overflow-hidden'
        style={{
          width: '1060px',
          maxWidth: '1060px',
        }}
      >
        {handlerProduct}
      </DialogContent>
    </Dialog>
  )
}

export { ChooseProductModal }