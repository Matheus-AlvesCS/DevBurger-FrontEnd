import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import api from "../../services/api";

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

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório."),
      email: yup
        .string()
        .email("O Email precisa ser válido.")
        .required("Este campo é obrigatório."),
      password: yup
        .string()
        .min(6, "A senha precisa ter no mínimo 6 caractéres.")
        .required("Este campo é obrigatório."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais.")
        .required("Confirme a senha."),
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
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 201) {
        toast.success("Cadastro feito com sucesso! 😁");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (status === 409) {
        toast.error("Email já cadastrado. Faça login para continuar. 😐");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Não foi possivel realizar o cadastro. 😞");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="devburger-logo" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <FormButton type="submit">Cadastrar-se</FormButton>
        </Form>
        <Warn>
          Já possui conta? <Link to={"/login"}>Clique aqui.</Link>
        </Warn>
      </RightContainer>
    </Container>
  );
}
