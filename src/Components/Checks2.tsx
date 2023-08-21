import { FormControlLabel, Checkbox, Box } from "@mui/material"
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const Checks2 = () => {
    const [checked, setChecked] = useState([false, false, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1], checked[2]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked, checked[2]]);
    };
    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], checked[1], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4 }}>
            <FormControlLabel
                label="Graphic_design"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="Product_design"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="Web_design"
                control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
            />
        </Box>
    );
    const [flag, setFlag] = useState(false)
    const handleIconClick = () => {
        setFlag(!flag);
    }
    return (
        <>
            <div>
                <span style={{ display: "flex", alignItems: "center" }}>
                    <FormControlLabel
                        label="Design"
                        control={
                            <Checkbox
                                checked={checked[0] && checked[1] && checked[2]}
                                // indeterminate={checked[0] !== checked[1] || checked[0] !== checked[2] || checked[1] !== checked[2]}
                                onChange={handleChange1}
                            />
                        }
                        sx={{ marginRight: "7rem" }}
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
            </div>
        </>
    )
}

export default Checks2

