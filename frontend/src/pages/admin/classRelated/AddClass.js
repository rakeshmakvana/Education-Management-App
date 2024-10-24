import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, TextField, Paper, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStuff } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import Popup from "../../../components/Popup";
import Classroom from "../../../assets/classroom.png";

const AddClass = () => {
    const [sclassName, setSclassName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const userState = useSelector(state => state.user);
    const { status, currentUser, response, tempDetails } = userState;

    const adminID = currentUser._id;
    const address = "Sclass";

    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const fields = {
        sclassName,
        adminID,
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setLoader(true);
        dispatch(addStuff(fields, address));
    };

    useEffect(() => {
        if (status === 'added' && tempDetails) {
            navigate("/Admin/classes/class/" + tempDetails._id);
            dispatch(underControl());
            setLoader(false);
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setMessage("Network Error");
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, navigate, response, dispatch, tempDetails]);

    return (
        <>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 10,
                    backgroundColor: '#f5f5f5', 
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, maxWidth: 550, width: '100%' }}>
                    <Stack spacing={2} alignItems="center">
                        <img
                            src={Classroom}
                            alt="classroom"
                            style={{ width: '80%', marginBottom: '16px' }}
                        />
                        <Typography variant="h5" gutterBottom>
                            Create a Class
                        </Typography>
                        <form onSubmit={submitHandler} style={{ width: '100%' }}>
                            <Stack spacing={3}>
                                <TextField
                                    label="Class Name"
                                    variant="outlined"
                                    value={sclassName}
                                    onChange={(event) => setSclassName(event.target.value)}
                                    required
                                    fullWidth
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    disabled={loader}
                                    sx={{ position: 'relative' }}
                                >
                                    {loader && <CircularProgress size={24} color="inherit" sx={{ position: 'absolute' }} />}
                                    Create
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => navigate(-1)}
                                    fullWidth
                                >
                                    Go Back
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Paper>
            </Box>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    );
};

export default AddClass;
