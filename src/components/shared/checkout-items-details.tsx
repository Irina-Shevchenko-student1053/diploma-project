import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC } from "react";
import { Currency } from "./currency";

interface CheckoutItemsDetailsProps {
  icon?: LucideIcon,
  title?: string,
  value?: string | number,
  className?: string,
}

const CheckoutItemsDetails: FC<CheckoutItemsDetailsProps> = (props) => {
  const { icon: Icon, title, value, className } = props;

  return (
    <div
      className={cn("flex my-4", className)}
    >
      <span
        className="flex flex-1 text-lg text-neutral-500"
      >
        <div className="flex items-center">
          {Icon && <Icon size={18} className="mr-2 text-gray-300" />}
          {title}
        </div>
        <div
          className="flex flex-1 text-lg text-neutral-500 relative -top-1 mx-2"
        />
      </span>
      <span
        className="font-bold text-lg"
      >
        <Currency>
          {value}
        </Currency>
      </span>
    </div>
  )
}

export { CheckoutItemsDetails }