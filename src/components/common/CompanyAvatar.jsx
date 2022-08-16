import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CompanyAvatar({ imageUrl, companyName }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {imageUrl ? (
        <Avatar alt={companyName} src={imageUrl} />
      ) : (
        <Avatar alt={companyName}>{companyName.substr(0, 1)}</Avatar>
      )}
    </div>
  );
}
