import React from "react";
import { useForm } from "react-hook-form";

interface IProps {}

const ReactHookForm: React.FC<IProps> = (props) => {
  const { register, handleSubmit, watch } = useForm();

  console.log(watch("firstName"));

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName")} />
    </form>
  );
};

export default ReactHookForm;
