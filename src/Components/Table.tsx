import { useState, useEffect } from "react"
import Checks from "./Checks"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Table = () => {
  const navigate = useNavigate();
  const [apidata, setApiData] = useState([]);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'UserId', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 450 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  const rows = apidata.map((row: Users) => ({
    userId: row.userId,
    id: row.id,
    title: row.title,
    body: row.body,
  }))
  const fetchApiData = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let parsedData = await data.json();
      setApiData(parsedData);
    }
    catch (e) {
      console.error(e);
    }

  }
  useEffect(() => {
    fetchApiData();
  }, [])

  const removeDataFromLocalStorage = () => {
    localStorage.removeItem('usersName');
    localStorage.removeItem('email');
    localStorage.removeItem('pnumber');
    navigate("/");
  }
  return (
    <>
      <div style={{ margin: "2rem 3rem" }}>
        <div style={{ display: "flex", alignItems: "center", placeContent: "flex-end", flexWrap: "wrap" }}>
          <h2 style={{ flex: "auto", fontFamily: "math" }}>Component - 1</h2>
          <Button variant="outlined" color="error" onClick={removeDataFromLocalStorage}>Log Out</Button>
        </div>
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
            pageSizeOptions={[5, 10, 25, 50, 100]}
            sx={{ fontSize: 16 }}
          />
        </div>
        <Checks />
      </div>
    </>
  )
}

export default Table