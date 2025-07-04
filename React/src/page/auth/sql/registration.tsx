import { TextField } from "@mui/material";


const Registration = () => {
    return (
        <div className="flex flex-col items-center gap-2 bg-blue-200 p-6 rounded-2xl ">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <button>Registration</button>
        </div>
    );
};

export default Registration;