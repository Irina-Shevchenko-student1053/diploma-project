import { ChoosePizzaForm } from "@/components/shared/choose-pizza-form";
import { Container } from "@/components/shared/container";
import { GroupVariants } from "@/components/shared/group-variants";
import { PizzaImage } from "@/components/shared/pizza-image";
import { Title } from "@/components/shared/title";
import prisma from "@/lib/prisma";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface ProductIdProps {
  params: { id: string }
}

const ProductId: NextPage<ProductIdProps> = async (props) => {
  const { id } = await props.params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      ingredients: true,
      productItem: true,
    }
  });

  if (!product) return notFound();

  return (
    <Container
      className="flex flex-col my-10"
    >
      {/* <div
        className="flex flex-1"
      >
        <PizzaImage
          src={product.imageUrl}
          name={product.name}
          size={40}
        />

        <div
          className="w-[490px] bg-[#FCFCFC] p-7"
        >
          <Title
            size="md"
            className="font-extrabold mb-1"
          >
            {product.name}
          </Title>

          <p
            className="text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, necessitatibus odio unde, nisi maxime illo quod error, excepturi vero aliquid culpa dolor debitis similique rem reiciendis facere aut fuga est.
          </p>
          <GroupVariants
            value="2"
            items={[
              { name: "Small", value: "1" },
              { name: "Middle", value: "2" },
              { name: "Large", value: "3", disabled: true },
            ]}
          />
        </div>
      </div> */}
      <ChoosePizzaForm
        product={product}
      />
    </Container>
  )
}

export default ProductId;