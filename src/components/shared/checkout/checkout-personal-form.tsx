import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { Input } from "@/components/ui/input";
import { FormInput } from "../form/form-input";

interface CheckoutPersonalFormProps {
  className?: string
}

const CheckoutPersonalForm: FC<CheckoutPersonalFormProps> = (props) => {
  const { className } = props;

  return (
    <WhiteBlock
      title="2. Personal data"
      className={className}
    >
      <div
        className="grid grid-cols-2 gap-5"
      >
        <Input
          name="firtsName"
          type="text"
          className="text-base"
          placeholder="Name"
        />
        <Input
          name="lastName"
          type="text"
          className="text-base"
          placeholder="Last Name"
        />
        <Input
          name="email"
          type="email"
          className="text-base"
          placeholder="Name"
        />
        <FormInput
          name="phone"
          type="text"
          className="text-base"
          placeholder="Phone"
        />
      </div>
    </WhiteBlock>
  )
}

export { CheckoutPersonalForm }