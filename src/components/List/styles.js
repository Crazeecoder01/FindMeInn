import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', overflow: 'auto',
    },
    closeButton: {
        marginLeft: 'auto',
    },
    menuItem: {
        display: 'block',
        padding: '10px',
    }
}));
