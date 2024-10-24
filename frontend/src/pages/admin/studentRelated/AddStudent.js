import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/userRelated/userHandle';
import Popup from '../../../components/Popup';
import { underControl } from '../../../redux/userRelated/userSlice';
import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
import { CircularProgress, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, Box, Container } from '@mui/material';

const AddStudent = ({ situation }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { sclassesList } = useSelector((state) => state.sclass);

    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('');
    const [className, setClassName] = useState('');
    const [sclassName, setSclassName] = useState('');

    const adminID = currentUser._id;
    const role = "Student";
    const attendance = [];

    useEffect(() => {
        if (situation === "Class") {
            setSclassName(params.id);
        }
    }, [params.id, situation]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(getAllSclasses(adminID, "Sclass"));
    }, [adminID, dispatch]);

    const changeHandler = (event) => {
        if (event.target.value === 'Select Class') {
            setClassName('Select Class');
            setSclassName('');
        } else {
            const selectedClass = sclassesList.find(
                (classItem) => classItem.sclassName === event.target.value
            );
            setClassName(selectedClass.sclassName);
            setSclassName(selectedClass._id);
        }
    }

    const fields = { name, rollNum, password, sclassName, adminID, role, attendance };

    const submitHandler = (event) => {
        event.preventDefault();
        if (sclassName === "") {
            setMessage("Please select a classname");
            setShowPopup(true);
        } else {
            setLoader(true);
            dispatch(registerUser(fields, role));
        }
    }

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl());
            navigate(-1);
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setMessage("Network Error");
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#f9f9f9',
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
            }}>
                <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                    Add Student
                </Typography>
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="name"
                    />

                    {situation === "Student" && (
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel>Select Class</InputLabel>
                            <Select
                                value={className}
                                onChange={changeHandler}
                            >
                                <MenuItem value='Select Class'>Select Class</MenuItem>
                                {sclassesList.map((classItem, index) => (
                                    <MenuItem key={index} value={classItem.sclassName}>
                                        {classItem.sclassName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        label="Roll Number"
                        variant="outlined"
                        value={rollNum}
                        onChange={(event) => setRollNum(event.target.value)}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        disabled={loader}
                    >
                        {loader ? <CircularProgress size={24} color="inherit" /> : 'Add'}
                    </Button>
                </form>
            </Box>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Container>
    );
}

export default AddStudent;