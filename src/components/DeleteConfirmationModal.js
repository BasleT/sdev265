import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const DeleteConfirmationModal = ({ open, handleClose, onDelete }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Parent List</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this parent list? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onDelete} color="error">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
