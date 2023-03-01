import { useState, useEffect } from "react"
import ResponsiveAppBar from '../components/ui/appBar';
import Footer from '../components/ui/footer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import ContactForm from './../components/ui/contactForm';

export default function Contact() {
    const [name, setName] = useState('shamim');

    useEffect(() => {
        fetch('/api/hello')
            .then((Response) => Response.json())
            .then((data) => setName(data.name));
    })

    return (
        <>
            <header>
                <ResponsiveAppBar />
            </header>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container sx={{ py: 8 }} bgcolor='backgroud.paper' maxWidth="md">
                        <Grid container spacing={4}>
                            <ContactForm />
                        </Grid>
                    </Container>
                </Box>

            </main>
            <Footer />
        </>
    )
}
