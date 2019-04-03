import React, {Component} from "react";
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from '@material-ui/core/colors/red';


const theme = createMuiTheme({
    typography: {
       useNextVariants: true,
     },
    palette: {
        primary: red,
        secondary: {
          main: '#f44336',
        },
    },
});

//map to get title
const mapAppointmentData = appointment => ({
  id: appointment.id,
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
              <MuiThemeProvider theme={theme}>
                <Paper>
                    <Scheduler onAppointmentClick={this.handleEvent} data={formattedData} height={600}>
                        <ViewState
                        defaultCurrentDate={this.props.appointments[0].startDate}
                        defaultCurrentViewName="Month"
                        />
                        <MonthView/>
                        <WeekView
                        intervalCount= {1}
                        cellDuration= {60}
                        />
                        <DayView/>
                        <Appointments/>
                        <Toolbar/>
                        <ViewSwitcher />
                        <DateNavigator />
                    </Scheduler>
                </Paper>
              </MuiThemeProvider>

        );
    }
}

export default Schedule
