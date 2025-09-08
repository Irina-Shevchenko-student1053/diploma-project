import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import prisma from "@/lib/prisma";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          productItem: true,
          ingredients: true,
        }
      }

    }
  }).then(cat => cat.filter(c => c.products.length > 0))

  return (
    <>
      <Container
        className="mt-10"
      >
        <Title
          size="lg"
          className="font-extrabold"
        >
          All pizzas
        </Title>
      </Container>
      <TopBar
        categories={categories}
      />
      <Container
        className="pb-14 mt-10"
      >
        <div
          className="flex gap-24"
        >
          <div
            className="min-w-3xs"
          >
            <Filters />
          </div>

          <div
            className="flex-1"
          >
            <div
              className="flex flex-col gap-16"
            >
              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      products={category.products}
                      categoryId={category.id}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
