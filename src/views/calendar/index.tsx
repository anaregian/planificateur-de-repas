import React, { useState } from "react";
import { makeStyles, Theme, createStyles, Grid, Typography } from "@material-ui/core";
import { DatePicker } from "./components/DatePicker";
import { subWeeks, addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { DayOfWeek } from "./components/DayOfWeek";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      marginBottom: theme.spacing(4)
    }
  })
);

export const Calendar: React.FC = () => {
  const classes = useStyles();

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousClick = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleNextClick = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const handleTodayClick = () => {
    setCurrentDate(new Date());
  };

  const getDaysOfWeek = () =>
    eachDayOfInterval({
      start: startOfWeek(currentDate),
      end: endOfWeek(currentDate)
    });

  const daysOfWeek = getDaysOfWeek();

  return (
    <>
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          <Typography variant="h3">Calendrier</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          <DatePicker
            currentDate={currentDate}
            handleNext={handleNextClick}
            handlePrevious={handlePreviousClick}
            handleToday={handleTodayClick}
          />
        </Grid>
      </Grid>

      {daysOfWeek.map(day => (
        <div key={day.toString()}>
          <DayOfWeek currentDay={day.toString()} />
        </div>
      ))}
    </>
  );
};
