import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { timezoneNames, ZonedDate } from '@progress/kendo-date-math';
import '@progress/kendo-date-math/tz/all';
import '@progress/kendo-theme-default/dist/all.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LodashExample from './LodashExample';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const timezones =
  timezoneNames()
    .filter(l => l.indexOf('/') > -1)
    .sort((a, b) => a.localeCompare(b));


export default class App extends React.Component {
  state = {
    timezone: 'Europe/Sofia',
    date: null,
    result: null,
  }

  componentDidMount() {
    axios.get(`http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=Europe/London`)
      .then(res => {
        const zones = res.data.zoneName;
        this.setState({ zones });
      })
    this.tick();
    this.interval = setInterval(() => this.tick(), 5000);
  }

  interval;


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    const date = new Date();
    const result = ZonedDate.fromLocalDate(date, this.state.timezone);
    this.setState({ date, result });
  }

  handleTimezoneChange = (event) => {
    this.setState({ timezone: event.target.value });
  }

  render() {
    const { result, date } = this.state;
    return (
      <React.Fragment>
        <Card variant="outlined">
          <CardContent>
            <CssBaseline />
            <Container maxWidth="sm">
              
              <div className="row example-config">
                <div className="col-xs-12 example-col">
                  <h3>Current Europe Time</h3>
                  {date && date.toGMTString()}
                </div>
              </div>
              <div className="row example-config">
                <div className="col-xs-12 example-col">
                  <p>
                    Local time in
                    <select onChange={this.handleTimezoneChange} value={this.state.timezone}>
                      <option>{this.state.zones}</option>
                    </select>
                  </p>
                  {result && result.toString()}
                </div>
              </div>

              <LodashExample /><br />
              <br />
              <Router>
                <div>
                  <nav>
                    <Link to="/home">Exercise 3</Link>
                  </nav>

                  <Switch>
                    <Route path="/home">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </Container>
          </CardContent>

        </Card>
      </React.Fragment>
    );
  }
}