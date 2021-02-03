import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import MateriaCard from './components/MateriaCard';
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

  const [materias, setMaterias] = useState(
    [
      { materia: 'Seguridad en el Desarrollo de Software', profesor: 'Mtro. Iván Antonio', horario: 'martes 16-18, jueves 14 -16' },
      { materia: 'Matemáticas para Ingeniería', profesor: 'Mtro. David García', horario: ' miércoles 15-18, viernes 16-18' },
      { materia: 'Desarrollo Web Profesional', profesor: 'Mtro. Alfonso Felipe', horario: ' miércoles 13-15, viernes 13-15' },
      { materia: 'Planeación y Organización del trabajo', profesor: 'Mtra. Alejandra Morán', horario: ' martes 14-16, jueves 13-14' },
    ]
  );

  const agregarMateria = () =>{
    console.log("Materia Agregada");
    setMaterias([
      ...materias,
      {materia: "", profesor: "", horario: ""}
    ]);
  };

  const eliminarMateria = (id) =>{
    materias.splice(id, 1);
    setMaterias([...materias]);
  };

  const renderMaterias = () => {
    return materias.map((materia, index) => (
      <Grid key={index} item sx={12} sm={3}>
        <MateriaCard datos={materia} id={index} onDelete={eliminarMateria}/>
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
        onClick={agregarMateria}
        >
          Agregar
        </Button>
      </Grid>
      <Grid container spacing={3}>
        {renderMaterias()}
      </Grid>
    </Paper>
  );
}

export default App;
