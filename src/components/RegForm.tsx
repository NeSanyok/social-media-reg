import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "./UI";
import { useNavigate } from "react-router-dom";
import { createEntityAdapter } from "@reduxjs/toolkit";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Ввкдите почту в правильном формате")
      .required("Обязательное поле"),
    phone: yup.string().required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, "Минимум 8 символов"),
    user: yup.string().required("Обязательное поле"),
    surname: yup.string().required("Обязательное поле"),
    city: yup.string().required("Обязательное поле"),
  })
  .required();

interface ILoginForm {
  user: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  city: string;
}

const RegForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      surname: "",
      user: "",
      phone: "",
      password: "",
      city: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    navigate("/main");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="user"
        render={({ field }) => (
          <Input
            type={"user"}
            placeholder={"Введите Имя"}
            {...field}
            isError={errors.user ? true : false}
            errorMessage={errors.user?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="surname"
        render={({ field }) => (
          <Input
            type={"password"}
            placeholder={"Введите Фамилию"}
            {...field}
            isError={errors.password ? true : false}
            errorMessage={errors.password?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            type={"number"}
            placeholder={"Номер Телефона"}
            {...field}
            isError={errors.phone ? true : false}
            errorMessage={errors.phone?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            type={"password"}
            placeholder={"Пароль"}
            {...field}
            isError={errors.password ? true : false}
            errorMessage={errors.password?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Почта"}
            {...field}
            isError={errors.email ? true : false}
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Город"}
            {...field}
            isError={errors.city ? true : false}
            errorMessage={errors.city?.message}
          />
        )}
      />
      <Button text={"Зарегестрироваться"} type={"submit"} />
    </form>
  );
};
export default RegForm;
