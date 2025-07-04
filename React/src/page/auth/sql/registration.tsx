import { TextField } from "@mui/material";
import { useState } from "react";


const Registration = () => {
    const [formData, setFormData] = useState({username: '',email: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.Name]: e.target.value });
    };

    const handelRegistration= async (event) =>{
        event.preventDefault();
        
        console.log("this is the from data - - -",Name,Password);

        try {
            const response = await fetch('http://localhost:5000/registration', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', // Indicate JSON content
                },
                body: JSON.stringify(formData), // Convert data to JSON string
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            // Handle successful response (e.g., clear form, show success message)
        } catch (error) {
          console.error('Error:', error);
          // Handle errors (e.g., show error message to user)
        }
        
    }
    return (
        <form onSubmit={handelRegistration} className="flex flex-col items-center gap-2 bg-blue-200 p-6 rounded-2xl ">
            <TextField id="outlined-basic" name="Name" label="Name" variant="outlined" value={formData.Name} onChange={handleChange} />
            <TextField id="outlined-basic" name="Password" label="Password" variant="outlined" value={formData.Password} onChange={handleChange} />
            <button>Registration</button>
        </form>
    );
};

export default Registration;