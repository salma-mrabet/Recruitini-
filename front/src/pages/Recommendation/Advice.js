// import React from 'react'

// export default function Advice() {
//   return (
//     <div>Advice</div>
//   )
// }




import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions,ListItem } from "@mui/material";
import Grid from '@mui/material/Grid';

export default function Advice(props) {
   
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid ListItem xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="cv_how_to.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  How to write a CV
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ol>
                    <li>Choose clear, legible fonts</li>
                    <li>Be consistent with your CV layout</li>
                    <li>Be consistent with your CV layout</li>
                    <li>Get photos off of your CV</li>
                    <li>Make your CV brief and relevant</li>
                  </ol>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=> window.location.href='https://zety.com/blog/how-to-write-a-cv' }>
                Read the full article here. </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid ListItem xs={6}>
          <ListItem>2</ListItem>
        </Grid>
        <Grid ListItem xs={6}>
          <ListItem>3</ListItem>
        </Grid>
        <Grid ListItem xs={6}>
          <ListItem>4</ListItem>
        </Grid>
      </Grid>
    </>
  );
}
