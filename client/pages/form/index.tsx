import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import MuiAutoComplete from "../../components/AutoComplete";
import MuiTextField from "../../components/TextField";
import MuiDatePicker from "../../components/DatePicker";
import { getCatalogues, createformAnswer } from "../../graphql/form.graphql"
import { useQuery, useMutation } from '@apollo/client';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useSnackbar } from 'notistack';

export default function App() {
    const { enqueueSnackbar } = useSnackbar();
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const { loading, data } = useQuery(getCatalogues)
    const [MutateCreateForm, { data: dataForm, loading: loadingForm, error: errorForm }] = useMutation(createformAnswer);

    const onSubmit = (data: any) => {
        MutateCreateForm({ variables: { data: data } });
        errorForm && enqueueSnackbar('Se Realizó el registro correctamente', { variant: "success" });
    }

    return (
        !loading && (
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
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
                        <MuiTextField control={control} name="businessName" label="Razón social" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="tradename" label="Nombre comercial" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.industries} name="idIndustry" label="Industria" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.regimens} name="idRegime" label="Régimen Fiscal" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiDatePicker control={control} name="constitutionDate" label="Fecha de constitución" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="rfc" label="RFC" required={true} rules={{ maxLength: 12, minLength: 12 }} errors={errors} helperText="12 valores alfanuméricos" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.nationalities} name="idNationality" label="Nacionalidad" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="phone" label="Número telefónico" required={true} rules={{ maxLength: 10, minLength: 10 }} errors={errors} helperText="10 dígitos" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="mail" label="Correo electrónico" required={true} type="email" />
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
                        <MuiAutoComplete control={control} options={data.banks} name="idBank" label="Banco" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="clabe" label="CLABE" required={true} rules={{ maxLength: 18, minLength: 18 }} errors={errors} helperText="18 dígitos" type="number" />
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
                        <MuiTextField control={control} name="street" label="Calle o Avenida" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <MuiTextField control={control} name="intNumber" label="Número exterior" required={true} type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <MuiTextField control={control} name="extNumber" label="Número interior" required={false} type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <MuiTextField control={control} name="cp" label="Código Postal" required={true} rules={{ maxLength: 5, minLength: 5 }} errors={errors} helperText="5 dígitos" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="colony" label="Colonia" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.cities} name="idCity" label="Ciudad o Población" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.states} name="idState" label="Entidad Federativa" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.countries} name="idCountry" label="País" required={true} />
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
                        <MuiTextField control={control} name="namePerson" label="Nombre" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.genders} name="idGender" label="Género" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiDatePicker control={control} name="birthday" label="Fecha de Nacimiento" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.states} name="idBirthState" label="Entidad de nacimiento" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.countries} name="idBirthCountry" label="País de nacimiento" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.nationalities} name="idNationalityPerson" label="Nacionalidad" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiTextField control={control} name="curpPerson" label="CURP" required={true} rules={{ maxLength: 18, minLength: 18 }} errors={errors} helperText="18 valores alfanuméricos" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiTextField control={control} name="rfcPerson" label="RFC" required={true} rules={{ maxLength: 12, minLength: 12 }} errors={errors} helperText="12 valores alfanuméricos" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <MuiAutoComplete control={control} options={data.maritalStatus} name="idMaritalStatus" label="Estado civil" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                        <MuiTextField control={control} name="address" label="Domicilio" required={true} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="mailPerson" label="Correo electrónico" required={true} type="email" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <MuiTextField control={control} name="phonePerson" label="Teléfono" required={true} rules={{ maxLength: 10, minLength: 10 }} errors={errors} helperText="10 dígitos" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <Button variant="contained" endIcon={<CloudUploadIcon />} disabled sx={{ height: "100%", width: "100%" }}>Documento de identificación</Button> 
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="end"
                    alignItems="flex-end"
                    gap={1}
                    style={{ marginBottom: '1.875rem' }}
                >
                    <Button variant="contained" type="submit">Enviar</Button>
                </Grid>
            </form >
        )
    );
}