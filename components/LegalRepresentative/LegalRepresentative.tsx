import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import MuiTextField from "../TextField";
import MuiAutoComplete from "../AutoComplete";
import { LegalRepresentativeProps } from "./LegalRepresentative.types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MuiDatePicker from "../../components/DatePicker";

const LegalRepresentative = ({
  control,
  errors,
  data,
}: LegalRepresentativeProps) => {
  return (
    <>
      <Grid container>
        <Typography variant="h5" fontWeight="bold">
          Representante legal
        </Typography>
      </Grid>
      <Grid container marginTop={3} marginBottom={3} spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <MuiTextField
            control={control}
            name="namePerson"
            label="Nombre"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.genders}
            name="idGender"
            label="Género"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiDatePicker
            control={control}
            name="birthday"
            label="Fecha de Nacimiento"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.states}
            name="idBirthState"
            label="Entidad de nacimiento"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.countries}
            name="idBirthCountry"
            label="País de nacimiento"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.nationalities}
            name="idNationalityPerson"
            label="Nacionalidad"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiTextField
            control={control}
            name="curpPerson"
            label="CURP"
            required={true}
            rules={/^\d{18}$/}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiTextField
            control={control}
            name="rfcPerson"
            label="RFC"
            required={true}
            rules={/^\d{12}$/}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.maritalStatus}
            name="idMaritalStatus"
            label="Estado civil"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <MuiTextField
            control={control}
            name="address"
            label="Domicilio"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <MuiTextField
            control={control}
            name="mailPerson"
            label="Correo electrónico"
            required={true}
            rules={"[a-z0-9]+@[a-z]+.[a-z]{2,3}"}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <MuiTextField
            control={control}
            name="phonePerson"
            label="Teléfono"
            required={true}
            rules={/^\d{10}$/}
            errors={errors}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Button
            variant="contained"
            endIcon={<CloudUploadIcon />}
            disabled
            sx={{ height: "100%", width: "100%" }}
          >
            Documento de identificación
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LegalRepresentative;
