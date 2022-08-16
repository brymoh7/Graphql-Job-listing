import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";

import { paginate } from "../utils/paginate";
import JobCard from "./common/JobCard";
import jobApi from "../api/jobs";

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

const mapToViews = (items) => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    location: item.locationNames,
    jobSlug: item.slug,
    company: item.company.name,
    companySlug: item.company.slug,
    imageUrl: item.company.logoUrl,
  }));
};

export default function JobListings() {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    fetchJobListings();
  }, []);

  const fetchJobListings = async () => {
    setLoading(true);
    const {
      data: { jobs },
      loading,
    } = await jobApi.getJobListings();
    setJobs(mapToViews(jobs));
    setLoading(loading);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const jobListings = paginate(jobs, currentPage, pageSize);

  return (
    <>
      {loading ? (
        <div className={classes.container}>
          <CircularProgress size={80} />
        </div>
      ) : (
        <Grid container spacing={2} className={classes.root}>
          {/* <Grid item xs={12} sm={12} md={12}>
            Filter goes here
          </Grid> */}
          {jobListings.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <JobCard jobDescription={job} />
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={12}>
            <Pagination
              count={(jobs.length - (jobs.length % pageSize)) / pageSize + 1}
              color="primary"
              onChange={(e, newPage) => handlePageChange(newPage)}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
