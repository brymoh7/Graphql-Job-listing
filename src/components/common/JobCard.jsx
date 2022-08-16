import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import CompanyAvatar from "./CompanyAvatar";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "100%",
  },
  clickableArea: {
    height: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    paddingTop: 5,
    paddingBottom: 0,
  },
  content: {
    paddingTop: 5,
  },
});

export default function JobCard({
  jobDescription: { title, company, companySlug, location, jobSlug, imageUrl },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        component={Link}
        to={"c/" + companySlug + "/" + jobSlug}
        className={classes.clickableArea}
      >
        <CardHeader
          avatar={<CompanyAvatar imageUrl={imageUrl} companyName={company} />}
          title={company}
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
