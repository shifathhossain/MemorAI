'use client';

import { Container, AppBar, Toolbar, Typography, Box, Paper } from "@mui/material";
import { SignIn } from "@clerk/nextjs";
import Link from 'next/link';

export default function SignInPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1f4037, #99f2c8)',
            py: 6
        }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: '100%' }}>
                <Toolbar variant="dense">
                    <Link href="http://localhost:3000/" passHref>
                        <Typography variant="h6" component="a" sx={{ fontWeight: 'bold', color: '#fff', fontFamily: 'Lucida Handwriting', textDecoration: 'underline' }}>
                            MemorAI
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>

            <Container maxWidth="sm" sx={{ mt: 12 }}>
                <Paper elevation={10} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            textAlign: 'center',
                            background: '#fff',
                            p: 4,
                            borderRadius: '16px'
                        }}
                    >
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                            Create Your Account
                        </Typography>
                        <Typography 
                            variant="body1" 
                            color="textSecondary" 
                            sx={{ mb: 2 }} 
                            fontStyle='italic' 
                            >
                            Join MemorAI and start creating your own flashcards effortlessly
                        </Typography>
                        <SignIn />
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
