import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

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

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const {
    state: { product },
  } = useLocation();

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

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      success: {
        render() {
          setTimeout(() => {
            navigate("/admin/produtos");
          }, 2000);
          return "Produto editado com sucesso! 😃";
        },
      },
      pending: "Produto sendo editado... 😑",
      error: "Não foi possível editar o produto 😔",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <p>{errors?.name?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={product.price / 100}
          />
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
            defaultValue={product.category}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categoria..."
                menuPortalTarget={document.body}
                defaultValue={product.category}
              />
            )}
          />
          <p>{errors?.category?.message}</p>
        </InputContainer>

        <InputContainer>
          <CheckboxContainer>
            <input
              type="checkbox"
              defaultChecked={product.offer}
              {...register("offer")}
            />
            <Label>Produto em oferta ?</Label>
          </CheckboxContainer>
        </InputContainer>

        <SubmitButton type="submit">Editar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
