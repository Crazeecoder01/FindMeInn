import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
    },
    mapContainer: {
        height: '85vh', width: '100%', position: 'relative'
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
    toggleButton: {
        position: 'absolute',
        top: theme.spacing(2),
        left: theme.spacing(2),
        backgroundColor: 'white',
        zIndex: 1,
    },
    closeButton: {
        marginLeft: 'auto',
    },
}));