import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import api from "../../services/api";
import { useUser } from "../../hooks/UserContext";

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

import { Link } from "react-router";

export function Login() {
  const navigate = useNavigate();

  const { putUserInfo } = useUser();

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
  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando dados...",
        success: {
          render() {
            putUserInfo(userData);
            setTimeout(() => {
              navigate("/");
            }, 2000);
            return "Login realizado com sucesso. 👌";
          },
        },
        error: "Email ou senha incorretos. 😑",
      }
    );
  };

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
          Não possui conta? <Link to={"/cadastro"}>Clique aqui.</Link>
        </Warn>
      </RightContainer>
    </Container>
  );
}
