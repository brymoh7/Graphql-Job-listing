import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";

import Form from "./forms/Form";
import FormField from "./forms/FormField";
import FormPicker from "./forms/FormPicker";
import SubmitButton from "./forms/SubmitButton";
import jobsApi from "../api/jobs";
import { useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inline: {
    display: "inline",
  },
}));

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  commitmentId: Yup.string().required().min(1).label("Commitment"),
  companyName: Yup.string().required().min(1).label("Company"),
  locationNames: Yup.string().required().min(1).label("Location"),
  userEmail: Yup.string().email().required().min(1).label("Email"),
  description: Yup.string().required().min(1).label("Description"),
  applyUrl: Yup.string().required().min(1).label("Website Url"),
});

const commitments = [
  {
    id: "cjtu8esth000z0824x00wtp1i",
    title: "Full-time",
  },
  {
    id: "cjuvc2urp01cf0735lk9j0e87",
    title: "Part-time",
  },
];

export default function JobForm() {
  const classes = useStyles();

  const [postJob, { loading, error, data }] = useMutation(jobsApi.postJob);

  data && console.log("data ", data);

  const handleSubmit = async (jobDetails, { resetForm }) => {
    postJob({ variables: jobDetails });

    resetForm();
    window.location = "/";
  };

  return (
    <>
      {loading ? (
        <div className={classes.container}>
          <CircularProgress size={80} />
        </div>
      ) : (
        <div>
          <Typography variant="h2" gutterBottom>
            Post Your Job
          </Typography>
          <Form
            initialValues={{
              title: "",
              commitmentId: "",
              companyName: "",
              locationNames: "",
              userEmail: "",
              description: "",
              applyUrl: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <FormField
                  name="title"
                  label="Title"
                  placeholder="Position title"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormPicker
                  name="commitmentId"
                  label="Commitment"
                  items={commitments}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormField
                  name="companyName"
                  label="Company"
                  placeholder="Company Name"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormField
                  name="locationNames"
                  label="Location"
                  placeholder="Location"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormField
                  name="userEmail"
                  label="Email"
                  placeholder="Your Email"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormField
                  name="description"
                  label="Description"
                  placeholder="Job Description"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormField
                  name="applyUrl"
                  label="Apply Url"
                  placeholder="Your application form Url"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <SubmitButton title="Post Your Job" />
              </Grid>
            </Grid>
          </Form>
        </div>
      )}
    </>
  );
}
