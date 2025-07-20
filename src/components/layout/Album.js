import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '@fontsource/roboto/500.css';
import cards from "./data.json";

export default function Album() {
  return (
    <Container sx={{ paddingBottom: '10%', paddingTop: '5%' }} maxWidth="lg">
      <Typography sx={{ py: 5, textAlign: 'center' }} variant="h2" component="h1">
        Projects
      </Typography>

      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{ pt: '56.25%' }}
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + card.img})` }}
                // image= { card.img }
              />
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={card.link}
                  target="_blank"
                  size="small"
                  variant="contained"
                  sx={{ marginX: 1 }}
                >
                  View
                </Button>

                <Button
                  href={card.link2}
                  target="_blank"
                  size="small"
                  variant="contained"
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
