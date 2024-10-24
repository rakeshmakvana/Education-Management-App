import { AccountCircle, Group, School } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';
import { loginUser } from '../redux/userRelated/userHandle';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector((state) => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const navigateHandler = (user) => {
    if (user === 'Admin') {
      if (visitor === 'guest') {
        const email = 'yogendra@12';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === 'Student') {
      if (visitor === 'guest') {
        const rollNum = '1';
        const studentName = 'Dipesh Awasthi';
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === 'Teacher') {
      if (visitor === 'guest') {
        const email = 'tony@12';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage('Network Error');
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #F3F4F6, #E5E7EB)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Admin Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{
                padding: '30px',
                textAlign: 'center',
                backgroundColor: '#fff',
                color: '#333',
                height: '300px', // Fixed height for uniformity
                width: '100%',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
              onClick={() => navigateHandler('Admin')}
            >
              <AccountCircle fontSize="large" sx={{ color: '#7f56da', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Admin
              </Typography>
              <Typography variant="body2">
                Login as an administrator to manage the dashboard and app data.
              </Typography>
            </Paper>
          </Grid>

          {/* Student Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{
                padding: '30px',
                textAlign: 'center',
                backgroundColor: '#fff',
                color: '#333',
                height: '300px',
                width: '100%',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
              onClick={() => navigateHandler('Student')}
            >
              <School fontSize="large" sx={{ color: '#7f56da', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Student
              </Typography>
              <Typography variant="body2">
                Login as a student to explore course materials and assignments.
              </Typography>
            </Paper>
          </Grid>

          {/* Teacher Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{
                padding: '30px',
                textAlign: 'center',
                backgroundColor: '#fff',
                color: '#333',
                height: '300px',
                width: '100%',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
              onClick={() => navigateHandler('Teacher')}
            >
              <Group fontSize="large" sx={{ color: '#7f56da', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Teacher
              </Typography>
              <Typography variant="body2">
                Login as a teacher to manage courses, assignments, and student progress.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>

      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </Box>
  );
};

export default ChooseUser;
