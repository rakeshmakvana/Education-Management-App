import { Box, Button, Container, Typography, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <Container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh', 
                backgroundColor: '#f9f9f9' 
            }}
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100%', 
                    maxWidth: '500px', 
                    width: '100%'
                }}
            >
                <Paper elevation={3} sx={{ padding: '40px', textAlign: 'center', width: '100%' }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Welcome to Education
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ mb: 4 }}>
                        Education Management System
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 4 }}>
                        Manage your school effectively by organizing classes, tracking attendance, assessing student performance, and facilitating seamless communication.
                    </Typography>
                    <Button
                        component={Link}
                        to="/choose"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        Login
                    </Button>
                    <Button
                        component={Link}
                        to="/Adminregister"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                    >
                        Sign up
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default Homepage;
