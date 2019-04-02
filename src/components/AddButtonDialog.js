import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import firestore from "./Firestore";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const styles = {
    fab: {
        margin: '50%',
        marginTop: -10,
        marginBottom: 10
    },

};

class AddButtonDialog extends Component {
    state = {
        open: false,
        email:''
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleTFChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        this.handleClose();
        const db = firestore.firestore();
          db.collection('Users').add({
            email: this.state.email
          });
          this.setState({
            email: ''
          });
    }
    render() {
        const { classes } = this.props;
        return(
            <div>
                <Fab onClick={this.handleClickOpen} color="secondary" aria-label="Add" className={classes.fab} >
                  <AddIcon />
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={this.state.email}
                    onChange={this.handleTFChange}
                    />
                </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(AddButtonDialog);
