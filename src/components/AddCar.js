import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogTitle, DialogContent, TextField } from "@mui/material";

export default function AddCar({ addCar }) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    price: "",
    year: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAdd = () => {
    setOpen(false);
    addCar(car);
    setCar({
      ...car,
      brand: "",
      model: "",
      color: "",
      fuel: "",
      price: "",
      year: "",
    });
  };
  const handleCancel = () => {
    setOpen(false);
    setCar({
        ...car,
        brand: "",
        model: "",
        color: "",
        fuel: "",
        price: "",
        year: "",
      });
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const inputChanged = (event) => {
    console.log("inputti changed");
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Add car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogTitle>Add Car</DialogTitle>

          <TextField
            autoFocus={true}
            value={car.brand}
            onChange={inputChanged}
            margin="dense"
            label="Brand"
            name="brand"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.model}
            onChange={inputChanged}
            margin="dense"
            label="Model"
            name="model"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.color}
            onChange={inputChanged}
            margin="dense"
            label="Color"
            name="color"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.fuel}
            onChange={inputChanged}
            margin="dense"
            label="Fuel"
            name="fuel"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            name="price"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            name="year"
            fullWidth={true}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
