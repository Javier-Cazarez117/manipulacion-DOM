import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import AsignaturaCard from './components/AsignaturaCard';
import { useState } from 'react';

const useStyles = makeStyles((theme) =>({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  toolBar: {
    textAlign: "right",
    paddingBottom: 18,
  }
}));

function App() {
  const classes = useStyles();

  const [asignaturas, setAsignaturas] = useState(
    [
      { materia: 'Seguridad en el Desarrollo de Software', profesor: 'Mtro. Iván Antonio', horario: 'martes 16-18, jueves 14 -16' },
      { materia: 'Matemáticas para Ingeniería', profesor: 'Mtro. David García', horario: ' miércoles 15-18, viernes 16-18' },
      { materia: 'Desarrollo Web Profesional', profesor: 'Mtro. Alfonso Felipe', horario: ' miércoles 13-15, viernes 13-15' },
      { materia: 'Planeación y Organización del trabajo', profesor: 'Mtra. Alejandra Morán', horario: ' martes 14-16, jueves 13-14' },
    ]
  );

  const agregarAsignatura= () =>{
    console.log("Agregar Asignatura");
    setAsignaturas([
      ...asignaturas,
      {materia: "", profesor: "", horario: ""}
    ]);
  };

  const eliminarAsignatura = (id) =>{
    asignaturas.splice(id, 1);
    setAsignaturas([...asignaturas]);
  };

  const renderAsignaturas = () => {
    return asignaturas.map((asignatura, index) => (
      <Grid key={index} item sx={12} sm={3}>
        <AsignaturaCard datos={asignatura} id={index} onDelete={eliminarAsignatura}/>
      </Grid>
    ));
  };
  return (
    <Paper className={classes.paper}>
      <Grid item xs={12} className={classes.toolBar}>
        <Button 
        variant="contained"
        color="primary"
        startIcon={<Icon>add</Icon>}
        onClick={agregarAsignatura}
        >
          Agregar
        </Button>
      </Grid>
      <Grid container spacing={3}>
        {renderAsignaturas()}
      </Grid>
    </Paper>
  );
}

export default App;
