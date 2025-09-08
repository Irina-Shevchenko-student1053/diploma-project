import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { CartButton } from "./cart-button";

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header
      className={cn("", className)}
    >
      <Container
        className="flex items-center justify-between py-8"
      >
        <Link
          href={"/"}
          className="cursor-pointer"
        >
          <div
            className="flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              width={35}
              height={35}
              alt="Logo"
            />
            <div>
              <h1
                className="text-2xl uppercase font-black"
              >
                Pizza
              </h1>
              <p
                className="text-sm text-gray-400 leading-3"
              >
                It doesn't get any tastier than this.
              </p>
            </div>
          </div>
        </Link>
        <div
          className="flex items-center gap-3"
        >
          <Button
            variant="outline"
            className="flex items-center gap-1"
          >
            <User
              size={16}
            />
            Sign in
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  )
}

export { Header }