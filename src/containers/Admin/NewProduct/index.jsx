import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  Container,
  Form,
  InputContainer,
  Label,
  Input,
  UploadLabel,
  Select,
  SubmitButton,
  CheckboxContainer,
} from "./styles.js";

import api from "../../../services/api.js";

import { Image } from "@phosphor-icons/react";
import { toast } from "react-toastify";

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get("/categories");

      setCategories(data);
    }

    getCategories();
  }, []);

  const schema = yup.object({
    name: yup.string().required("Este campo é obrigatório."),
    price: yup
      .number()
      .positive("O preço precisa ser positivo.")
      .required("Este campo é obrigatório.")
      .typeError("Este campo é obrigatório."),
    category: yup.object().required("Este campo é obrigatório."),
    offer: yup.bool(),
    file: yup
      .mixed()
      .test("required", "Escolha a imagem do produto.", (value) => {
        return value && value.length > 0;
      })
      .test("fileSize", "Carregue arquivos até 5MB", (value) => {
        return value && value.length > 0 && value[0].size <= 50000;
      })
      .test("type", "Apenas extensões PNG ou JPEG", (value) => {
        return (
          value &&
          value.length > 0 &&
          (value[0].type === "image/jpeg" || value[0].type === "image/png")
        );
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category.id);
    productFormData.append("offer", data.offer);
    productFormData.append("file", data.file[0]);

    await toast.promise(api.post("/products", productFormData), {
      success: {
        render() {
          setTimeout(() => {
            navigate("/admin/produtos");
          }, 2000);
          return "Produto criado com sucesso! 😃";
        },
      },
      pending: "Produto sendo criado... 😑",
      error: "Não foi possível criar o produto 😔",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <p>{errors?.name?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          <p>{errors?.price?.message}</p>
        </InputContainer>

        <InputContainer>
          <UploadLabel>
            <Image />
            <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(data) => {
                setFileName(data?.target?.files[0]?.name);
                register("file").onChange(data);
              }}
            />
            {fileName || "Upload do produto"}
          </UploadLabel>
          <p>{errors?.file?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categoria..."
                menuPortalTarget={document.body}
              />
            )}
          />
          <p>{errors?.category?.message}</p>
        </InputContainer>

        <InputContainer>
          <CheckboxContainer>
            <input type="checkbox" {...register("offer")} />
            <Label>Produto em oferta ?</Label>
          </CheckboxContainer>
        </InputContainer>

        <SubmitButton type="submit">Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
