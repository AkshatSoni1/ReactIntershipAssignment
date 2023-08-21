import { FormControlLabel, Checkbox, Box } from "@mui/material"
import { useState } from "react";
import Checks2 from "./Checks2";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const Checks = () => {
  const [checked, setChecked] = useState([false, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Customer_success"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  const [flag, setFlag] = useState(false)
  const handleIconClick = () => {
    setFlag(!flag);
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", flexWrap: "wrap" }}>
        <h2 style={{ marginTop: "2rem" ,fontFamily: "math"}}>Component - 2</h2>
        <span style={{ display: "flex", alignItems: "center" }}>

          <FormControlLabel
            label="Customer_service"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                // indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
            sx={{ marginRight: "2rem" }}
          />
          {!flag ?
            <ExpandMoreIcon
              onClick={handleIconClick}
              sx={{
                "&:hover": {
                  color: "lightskyblue",
                  cursor: "pointer"
                }
              }}
            />
            :
            <ExpandLessIcon
              onClick={handleIconClick}
              sx={{
                "&:hover": {
                  color: "lightskyblue",
                  cursor: "pointer"
                }
              }}
            />
          }
        </span>
        {flag && children}
        <Checks2 />
      </div>
    </>
  )
}

export default Checks
