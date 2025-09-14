import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CheckoutAddressFormProps {
  className?: string
}

const CheckoutAddressForm: FC<CheckoutAddressFormProps> = (props) => {
  const { className } = props;

  return (
    <WhiteBlock
      title="3. Delivery address"
      className={className}
    >
      <div
        className="flex flex-col gap-5"
      >
        <Input
          name="address"
          type="text"
          className="text-base"
          placeholder="Address"
        />
        <Textarea
          rows={5}
          className="text-base"
          placeholder="Comments on orders"
        />
      </div>
    </WhiteBlock>
  )
}

export { CheckoutAddressForm }