import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.black, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
    },
    searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' }, color: 'black',
    },
    toolbar: {
        display: 'flex', justifyContent: 'space-between',
    },
    logo: {
        height: '40px',
        marginRight: theme.spacing(2),
    },
}));