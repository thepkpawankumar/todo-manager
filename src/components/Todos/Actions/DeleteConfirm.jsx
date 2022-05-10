import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

export const DeleteConfirm = ({ open, close, yes }) => {
  //const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ITEM?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          No
        </Button>
        <Button onClick={yes} color="primary" variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const DeleteAllConfirm = ({ open, close, yes }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ALL ITEMS?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete all items?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          No
        </Button>
        <Button onClick={yes} color="primary" variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
