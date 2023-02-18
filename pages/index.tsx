import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardComponent from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenidos a la prueba técnica para FullStack Developer
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "800px",
        }}
      >
        <CardComponent
          href="https://github.com/rodriguezespinoza0795/full-stack-developer-technical-test"
          title="Repositorio"
          description="Leer StepbyStep.md para conocer los pasos para desarrollar este proyecto"
        />
        <CardComponent
          href="https://www.figma.com/file/RE7Lc7yhRijAe8Ms73Uy0h/full-stack-developer-technical-test?node-id=2719%3A2781"
          title="Diseño"
          description="Diseño de interfaces en Figma con interacción en los componentes."
        />
        <CardComponent
          href="https://fullstack-kredfeed.herokuapp.com/graphql"
          title="GraphQL"
          description="Api alojada en Heroku y base de datos en Azure"
        />
        <CardComponent
          href="/form"
          title="Formulario"
          description="Completar formulario"
          external={false}
        />
      </Box>
    </>
  );
};

export default Home;
