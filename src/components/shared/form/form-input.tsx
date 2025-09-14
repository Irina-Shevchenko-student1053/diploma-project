"use client"

import { FC, InputHTMLAttributes } from "react";
import { RequiredSymbol } from "../required-symbol";
import { Input } from "@/components/ui/input";
import { ErrorText } from "../error-text";
import { ClearButton } from "../clear-button";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label?: string,
  className?: string,
}

const FormInput: FC<FormInputProps> = (props) => {
  const { name, label, required, className, ...otherProps } = props;

  return (
    <div
      className={className}
    >
      {
        label && (
          <p
            className="font-medium mb-2"
          >
            {label} {required && <RequiredSymbol />}
          </p>
        )
      }
      <div
        className="relative"
      >
        <Input
          name={name}
          className="h-12 text-base"
          {...otherProps}
        />
        <ClearButton
          onClick={() => { }}
        />
      </div>

      <ErrorText
        text="This field is required"
        className="mt-2"
      />
    </div>
  )
}

export { FormInput };