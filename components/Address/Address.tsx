import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import MuiTextField from "../TextField";
import MuiAutoComplete from "../AutoComplete";
import { AddressProps } from "./Address.types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Address = ({ control, errors, data }: AddressProps) => {
  return (
    <>
      <Grid container>
        <Typography variant="h5" fontWeight="bold">
          Domicilio
        </Typography>
      </Grid>
      <Grid container marginTop={3} marginBottom={3} spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <MuiTextField
            control={control}
            name="street"
            label="Calle o Avenida"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
          <MuiTextField
            control={control}
            name="intNumber"
            label="Número exterior"
            required={true}
            type="number"
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
          <MuiTextField
            control={control}
            name="extNumber"
            label="Número interior"
            required={false}
            type="number"
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
          <MuiTextField
            control={control}
            name="cp"
            label="Código Postal"
            required={true}
            rules={/^\d{5}$/}
            errors={errors}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <MuiTextField
            control={control}
            name="colony"
            label="Colonia"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.cities}
            name="idCity"
            label="Ciudad o Población"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.states}
            name="idState"
            label="Entidad Federativa"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <MuiAutoComplete
            control={control}
            options={data.countries}
            name="idCountry"
            label="País"
            required={true}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Button
            variant="contained"
            endIcon={<CloudUploadIcon />}
            disabled
            sx={{ height: "100%", width: "100%" }}
          >
            Comprobante de Domicilio
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Address;
