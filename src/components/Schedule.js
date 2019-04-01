import React, {Component} from "react";
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
       useNextVariants: true,
     },
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

//map to get title
const mapAppointmentData = appointment => ({
  startDate: appointment.startDate,
  endDate: appointment.endDate,
  title: appointment.activity + '   ' + appointment.location,
});

//filter out faulty startDate
function startDateBeforeEndDate(element, index, array) {
   return (element.startDate < element.endDate);
}

class Schedule extends Component {
    render() {
        const formattedData =  this.props.appointments.filter(startDateBeforeEndDate).map(mapAppointmentData);
    return (
      <div>
          <MuiThemeProvider theme={theme}>
            <Paper>
              <Scheduler  data={formattedData}>
                <ViewState currentDate={this.props.appointments[0].startDate} />
                <WeekView
                    intervalCount= {1}
                    cellDuration= {60}
                />
                <Appointments />
              </Scheduler>
            </Paper>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default Schedule
