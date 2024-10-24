import React, { useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Students from '../../assets/img1.png';
import Classes from '../../assets/img2.png';
import Teachers from '../../assets/img3.png';
import Fees from '../../assets/img4.png';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);
    const { currentUser } = useSelector((state) => state.user);
    const adminID = currentUser._id;

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, 'Sclass'));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList ? studentsList.length : 0;
    const numberOfClasses = sclassesList ? sclassesList.length : 0;
    const numberOfTeachers = teachersList ? teachersList.length : 0;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            bgcolor: '#e3f2fd', 
                            borderRadius: 2,
                        }}
                    >
                        <img src={Students} alt="Students" width={80} height={80} />
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Total Students
                        </Typography>
                        <CountUp start={0} end={numberOfStudents} duration={2.5} style={{ fontSize: '1.5rem', color: '#388e3c' }} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3} lg={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            bgcolor: '#ffe0b2', 
                            borderRadius: 2,
                        }}
                    >
                        <img src={Classes} alt="Classes" width={80} height={80} />
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Total Classes
                        </Typography>
                        <CountUp start={0} end={numberOfClasses} duration={5} style={{ fontSize: '1.5rem', color: '#e65100' }} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3} lg={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            bgcolor: '#c8e6c9', 
                            borderRadius: 2,
                        }}
                    >
                        <img src={Teachers} alt="Teachers" width={80} height={80} />
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Total Teachers
                        </Typography>
                        <CountUp start={0} end={numberOfTeachers} duration={2.5} style={{ fontSize: '1.5rem', color: '#388e3c' }} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3} lg={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            bgcolor: '#f8bbd0', 
                            borderRadius: 2,
                        }}
                    >
                        <img src={Fees} alt="Fees" width={80} height={80} />
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Fees Collection
                        </Typography>
                        <CountUp start={0} end={23000} duration={2.5} prefix="$" style={{ fontSize: '1.5rem', color: '#e91e63' }} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminHomePage;
