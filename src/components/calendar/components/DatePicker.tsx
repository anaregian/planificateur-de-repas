import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { NavigateBefore, NavigateNext, Today } from "@material-ui/icons";
import { startOfWeek, format } from "date-fns";
import { fr } from "date-fns/locale";

type OwnProps = {
  currentDate: Date;
  handlePrevious: () => void;
  handleNext: () => void;
  handleToday: () => void;
};

type Props = OwnProps;

export const DatePicker: React.FC<Props> = ({ currentDate, handlePrevious, handleNext, handleToday }) => {
  return (
    <>
      <Typography variant="h5">
        <IconButton color="primary" component="span" onClick={handlePrevious}>
          <NavigateBefore fontSize="large" />
        </IconButton>
        {format(startOfWeek(currentDate), "'Semaine du' d MMMM yyyy", { locale: fr })}
        <IconButton color="primary" component="span">
          <NavigateNext fontSize="large" onClick={handleNext} />
        </IconButton>
        <IconButton color="primary" component="span">
          <Today fontSize="large" onClick={handleToday} />
        </IconButton>
      </Typography>
    </>
  );
};
