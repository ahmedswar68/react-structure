import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/DeleteSweep';
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { trans } from 'core/localization';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    addButton: {
        fill: lightBlue[800],
    },
    tooltip: {
        backgroundColor: '#000',
    }
});

export function TableAddButton(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip classes={{ tooltip: classes.tooltip }} placement="top" title={trans('add')}>
                <IconButton onClick={handleClickOpen}>
                    <AddIcon fontSize="large" color="primary" />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export function TableEditButton(props) {
    const classes = useStyles();
    return (
        <Tooltip classes={{ tooltip: classes.tooltip }} placement="top" title={trans('edit')}>
            <IconButton>
                <EditIcon />
            </IconButton>
        </Tooltip>
    )
}

export function TableDeleteButton(props) {
    const classes = useStyles();
    return (
        <Tooltip classes={{ tooltip: classes.tooltip }} placement="top" title={trans('remove')}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}