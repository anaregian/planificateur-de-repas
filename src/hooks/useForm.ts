import React, { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return { handleChange, values };
};
