import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import { GeneralData } from "../../components/GeneralData";
import { BankAccount } from "../../components/BankAccount";
import { Address } from "../../components/Address";
import { LegalRepresentative } from "../../components/LegalRepresentative";
import { getCatalogues, createformAnswer } from "../../graphql/form.graphql";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { loading, data } = useQuery(getCatalogues);
  const [MutateCreateForm] = useMutation(createformAnswer);

  const onSubmit = async (data: any) => {
    MutateCreateForm({ variables: { data: data } });
    enqueueSnackbar("Se Realizó el registro correctamente", {
      variant: "success",
    });
    router.push("/");
  };

  return (
    !loading && (
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <GeneralData control={control} errors={errors} data={data} />
        <BankAccount control={control} errors={errors} data={data} />
        <Address control={control} errors={errors} data={data} />
        <LegalRepresentative control={control} errors={errors} data={data} />
        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="flex-end"
          gap={1}
          style={{ marginBottom: "1.875rem" }}
        >
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Grid>
      </form>
    )
  );
}
