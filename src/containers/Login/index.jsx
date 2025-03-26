import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  FormButton,
  Warn,
} from "./styles";
import Logo from "../../assets/logo.svg";

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("O Email precisa ser válido.")
        .required("Este campo é obrigatório."),
      password: yup
        .string()
        .min(6, "A senha precisa ter no mínimo 6 caractéres.")
        .required("Este campo é obrigatório."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => console.log(data);

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="devburger-logo" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>DevBurger!</span> <br /> Acesse com seu
          <span> Login e Senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <FormButton type="submit">Entrar</FormButton>
        </Form>
        <Warn>
          Não possui conta? <a>Clique aqui.</a>
        </Warn>
      </RightContainer>
    </Container>
  );
}
