"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { AppBar, Toolbar, Avatar, Card, CardActions, CardContent, CardHeader, Collapse, Grid, IconButton, Typography, Tooltip } from "@mui/material";
import { red, blueGrey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import User from "@mui/icons-material/Person";
import Login from "@mui/icons-material/Login";

const Main = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
    };
    return (
        <>
            <AppBar
                sx={{ boxShadow: "none" }}
                position="static"
                color="transparent">
                <Toolbar
                    variant="dense"
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                    <IconButton>
                        <Tooltip title="Login">
                            <Avatar
                                sx={{ bgcolor: blueGrey[500], width: 24, height: 24 }}
                                aria-label="recipe">
                                <Login sx={{ fontSize: 14 }} />
                            </Avatar>
                        </Tooltip>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main>
                <div className="main__container">
                    <Grid
                        container
                        spacing={4}>
                        <Grid size={12}>
                            <div className="main__container__banner">
                                <Slider {...settings}>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>Carrousel</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>2</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>3</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>4</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>5</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>6</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>7</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>8</h3>
                                        </div>
                                    </div>
                                    <div className="main__container__banner__item">
                                        <div className="main__container__banner__item__content">
                                            <h3>9</h3>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <h1>Card 1</h1>
                            </Card>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <h1>Card 2</h1>
                            </Card>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <CardHeader
                                    // avatar={
                                    //     <Avatar
                                    //         sx={{ bgcolor: red[500] }}
                                    //         aria-label="recipe">
                                    //         R
                                    //     </Avatar>
                                    // }
                                    // action={
                                    //     <IconButton aria-label="settings">
                                    //         <MoreVertIcon />
                                    //     </IconButton>
                                    // }
                                    title="Card 3"
                                    // subheader="September 14, 2016"
                                />
                                {/* <CardContent>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}>
                                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse
                            in={false}
                            timeout="auto"
                            unmountOnExit>
                            <CardContent>
                                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                                <Typography sx={{ marginBottom: 2 }}>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
                                <Typography sx={{ marginBottom: 2 }}>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until
                                    lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                    onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to
                                    a boil.
                                </Typography>
                                <Typography sx={{ marginBottom: 2 }}>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                                    Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is
                                    just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
                            </CardContent>
                        </Collapse> */}
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    );
};

export default Main;
