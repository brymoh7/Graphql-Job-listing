import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import jobApi from "../api/jobs";

export default function JobDetail() {
  const { companySlug, jobSlug } = useParams();
  const [job, setJob] = useState({});

  // console.log(companySlug, jobSlug);

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    const {
      data: { job },
    } = await jobApi.getJobDetails(companySlug, jobSlug);
    setJob(job);
    console.log(job);
  };

  return (
    <>
      {job.company && (
        <Grid container spacing={1} style={{ padding: 20 }}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              {job.title}
            </Typography>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                {job.company.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {job.locationNames}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              {job.description}
            </Typography>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={job.applyUrl}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
