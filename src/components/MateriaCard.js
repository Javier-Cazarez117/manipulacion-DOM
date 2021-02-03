import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginTop: 12,
    },
    buttonRight: {
        marginLeft: 'auto!important'
    }
});

export default function CursoCard({datos, id, onDelete}){
    const classes =useStyles();

    const [editar, setEditar] = useState(false);

    const [materia, setMateria] = useState(datos);

    const toogleEditar = () => {
        setEditar(!editar);
    };

    const guardarMateria = () => {
        console.log("Materia Guardada");
        setEditar(false);
    }

    const onChange = (e) => {
        setMateria({
            ...materia,
            [e.target.name]: e.target.value,
        });
    };

    const llamarEliminar = () =>{
        if(onDelete){
            onDelete(id);
        }
    };

    useEffect(() =>{
        setMateria({...datos});
    }, [datos,id]);

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {!editar && (
                    <>
                        <Typography className={classes.title}>
                            Materia
                        </Typography>
                        <Typography component="h2">
                            {materia.materia}
                        </Typography>
                    </>
                )}
                {editar && (
                    <TextField 
                        label="Materia"
                        name="materia"
                        value={materia.materia}
                        onChange={onChange}
                    />
                )}
                {!editar && (
                    <>
                        <Typography className={classes.pos}>
                            Profesor
                        </Typography>
                        <Typography component="p">
                            {materia.profesor}
                        </Typography>
                    </>
                )}
                {editar && (
                    <TextField 
                        label="Profesor"
                        name="profesor"
                        value={materia.profesor}
                        onChange={onChange}
                    />
                )}
                {!editar && (
                    <>
                        <Typography className={classes.pos}>
                            Horario
                        </Typography>
                        <Typography component="p">
                            {materia.horario}
                        </Typography>
                    </>
                )}
                {editar && (
                    <TextField 
                        label="Horario"
                        name="horario"
                        value={materia.horario}
                        onChange={onChange}
                    />
                )}
            </CardContent>
            <CardActions>
                {!editar && (
                    <IconButton color="primary" onClick={toogleEditar}>
                        <Icon>edit</Icon>
                    </IconButton>
                )}
                {editar && (
                    <IconButton color="primary" onClick={guardarMateria}>
                      <Icon>save</Icon>
                    </IconButton>
                )}               
                <IconButton 
                    color="secondary" 
                    className={classes.buttonRight}
                    onClick={llamarEliminar}    
                >
                    <Icon>delete</Icon>
                </IconButton>
            </CardActions>
        </Card>
    );
};