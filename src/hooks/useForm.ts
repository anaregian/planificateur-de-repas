import React, { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const addToArray = (field: any, value: any) => (e: React.MouseEvent<HTMLElement>) => {
    setValues({
      ...values,
      [field]: [...values[field], value]
    });
  };

  const removeFromArray = (field: any, value: any) => (e: React.MouseEvent<HTMLElement>) => {
    setValues({
      ...values,
      [field]: [...values[field], value]
    });
  };

  return { handleChange, values };
};
