// import "./RegistrationPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { SCRegistrationPage } from "./RegistrationPage.styled";
import RegForm from "../../components/RegForm";
import { useRegDataMutation } from "../../store/api/authApi";

export const RegistrationPage = () => {
  return (
    <SCRegistrationPage>
      <Heading variant={"h1"} text={"Регистрация"} />
      <RegForm />
      {/* <form action="#">
        <Input type={"email"} placeholder={"Электронная почта"} />
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"} />
        <Input type={"password"} placeholder={"Подтверждение пароля"} />
        <Button text={"Зарегистрироваться"} />
      </form> */}
      <RegistrationInfo
        linkText={"Aвторизоваться"}
        hasAccountText={"У вас есть аккаунт?"}
        authWithText={"Зарегистрироваться с помощью"}
      />
    </SCRegistrationPage>
  );
};
