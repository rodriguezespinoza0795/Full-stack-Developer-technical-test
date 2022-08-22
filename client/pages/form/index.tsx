import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import MuiAutoComplete from "../../components/AutoComplete";
import MuiTextField from "../../components/TextField";
import MuiDatePicker from "../../components/DatePicker";
import { getCatalogues } from "../../graphql/form.graphql"
import { useQuery } from '@apollo/client';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function App() {
    const { handleSubmit, control } = useForm();
    const { loading, data } = useQuery(getCatalogues)

    const onSubmit = (data: any) => {
        console.log('data', data)
    }

    return (
        !loading && (
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', padding: '3rem' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="end"
                    alignItems="flex-end"
                    gap={1}
                    style={{ marginBottom: '1.875rem' }}
                >
                    <Button variant="contained" type="submit">submit</Button>
                </Grid>
                <Grid container>
                    <Typography variant="h5" fontWeight='bold'>
                        Datos Generales
                    </Typography>
                </Grid>
                <Grid
                    container
                    marginTop={3}
                    marginBottom={3}
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="businessName" label="Razón social" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="tradename" label="Nombre comercial" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.industries} name="idIndustry" label="Industria" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.regimens} name="idRegime" label="Régimen Fiscal" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiDatePicker control={control} name="constitutionDate" label="Fecha de constitución" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="rfc" label="RFC" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.nationalities} name="idNationality" label="Nacionalidad" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="phone" label="Número telefónico" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="mail" label="Correo electrónico" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography variant="h5" fontWeight='bold'>
                        Cuenta Bancaria
                    </Typography>
                </Grid>
                <Grid
                    container
                    marginTop={3}
                    marginBottom={3}
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.banks} name="idBank" label="Banco" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="clabe" label="CLABE" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography variant="h5" fontWeight='bold'>
                        Domicilio
                    </Typography>
                </Grid>
                <Grid
                    container
                    marginTop={3}
                    marginBottom={3}
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <MuiTextField control={control} name="street" label="Calle o Avenida" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <MuiTextField control={control} name="intNumber" label="Número exterior" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <MuiTextField control={control} name="extNumber" label="Número interior" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <MuiTextField control={control} name="cp" label="Código Postal" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="colony" label="Colonia" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.cities} name="idCity" label="Ciudad o Población" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.states} name="idState" label="Entidad Federativa" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.countries} name="idCountry" label="País" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Button variant="contained" endIcon={<CloudUploadIcon />} disabled sx={{ height: "100%", width: "100%" }}>Comprobante de Domicilio</Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography variant="h5" fontWeight='bold'>
                        Representante legal
                    </Typography>
                </Grid>
                <Grid
                    container
                    marginTop={3}
                    marginBottom={3}
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <MuiTextField control={control} name="namePerson" label="Nombre" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.genders} name="idGender" label="Género" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiDatePicker control={control} name="birthday" label="Fecha de Nacimiento" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.states} name="idBirthState" label="Entidad de nacimiento" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.countries} name="idBirthCountry" label="País de nacimiento" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.nationalities} name="idNationalityPerson" label="Nacionalidad" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiTextField control={control} name="curpPerson" label="CURP" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiTextField control={control} name="rfcPerson" label="RFC" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.maritalStatus} name="idMaritalStatus" label="Estado civil" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                        <MuiTextField control={control} name="address" label="Domicilio" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="phonePerson" label="Correo electrónico" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="mailPerson" label="Teléfono" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Button variant="contained" endIcon={<CloudUploadIcon />} disabled sx={{ height: "100%", width: "100%" }}>Documento de identificación</Button> 
                    </Grid>
                </Grid>
            </form >
        )
    );
}