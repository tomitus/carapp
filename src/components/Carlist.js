import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import AddCar from './AddCar';
import EditCar from './EditCar';

export default function Carlist() {
  const [cars, setCars] = useState([]);
  const gridRef = React.useRef();
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);

  const addCar = (car) => {
    console.log("painike");
    console.log(cars);
    fetch("https://carrestapi.herokuapp.com/cars", {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(car)
    })

    .then(response => {
      if(response.ok) {
        fetchCars();
      }
    })
  };

const editCar = ( car, link ) => {
  fetch(link, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(car)
  })

  .then(response => {
    if(response.ok) {
      setMsg('Car edited successfully');
      setOpen(true);
      fetchCars();
    }
    else(
      alert("Something went wrong :'( ")
    )
  })
  .catch(err => console.error(err));
}

const deleteCar = (link) => {
if(window.confirm('Are you sure?')) {
  fetch(link, { method: 'DELETE'})
.then(response => {
  if(response.ok) {
    setMsg('Car deleted');
      setOpen(true);
      fetchCars();
  } else{
    alert("Something went wrong");
  }
})
.catch(err => console.log("err"))
}}
  




  const fetchCars = () => {
    fetch("https://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((responseData) => setCars(responseData._embedded.cars))
      .catch((err) => console.error(err));
  }
  
  React.useEffect(() => {
    fetchCars()
  }, []);

  const columns = [
    {
      field: "brand",
      sortable: true,
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    },
    {
      field: "model",
      sortable: true,
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    },
    {
      field: "color",
      sortable: true,
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    },
    {
      field: "fuel",
      sortable: true,
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    },
    {
      field: "price",
      sortable: true,
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    },
    {
      field: "year",
      sortable: true,
      filter: true,
      floatingFilter: true,
      suppressMenu: true,
    },
    {
      headerName: "", width: 200, field: '_links.self.href',  cellRenderer: params => 
      <EditCar editCar={editCar} params={params} />
      
  },
    {
      headerName: "", width: 200, field: '_links.self.href',  cellRenderer: params =>  
        <Button onClick={() => deleteCar(params.value)} color="error" >
          <DeleteIcon />
          </Button>
    },
    
  ];

  return (
    <div>
      <Stack spacing={2} direction="row">
        <AddCar addCar={addCar} />
        
      </Stack>
      
      <div
        className="ag-theme-material"
        style={{ height: "700px", width: "100%", margin: "auto" }}
      >
      <AgGridReact
        rowData={cars}
        ref={gridRef}
        rowSelection="single"
        onGridReady={(params) => (gridRef.current = params.api)}
        columnDefs={columns}
        pagination={true}
      ></AgGridReact>
      </div>
    </div>
  );
}
