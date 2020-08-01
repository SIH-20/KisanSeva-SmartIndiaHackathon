import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import Loader from "react-loader-spinner";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps
import { Bar } from "react-chartjs-2";
import { Motion, spring } from "react-motion";
import PanelHeader from '../../layouts/PanelHeader/PanelHeader'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";


function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

const cities = [
  { name: "Rajasthan", coordinates: [74.2179, 27.0238] },
  { name: "Kerala", coordinates: [76.2711, 10.8505] },
  { name: "Chattisgarh", coordinates: [81.8661, 21.2787] },
  { name: "Andhra Pradesh", coordinates: [80.0193, 17.1124] },
  { name: "Madhya Pradesh", coordinates: [78.6569, 22.9734] },
  { name: "Gujarat", coordinates: [71.1924, 22.2587] },
  { name: "Maharastra", coordinates: [75.7139, 19.7515] },
  { name: "Uttar Pradesh", coordinates: [80.9462, 26.8467] },
  { name: "Tamil Nadu", coordinates: [78.656891, 11.127123] },
  { name: "Orissa", coordinates: [84.803467, 20.940920] },
  { name: "West Bengal", coordinates: [87.747803, 22.978624] },
  { name: "Assam", coordinates: [92.537842, 26.244156] },
  { name: "Himachal Pradesh", coordinates: [77.571167, 32.084206] },
  { name: "Tripura", coordinates: [91.746826, 23.745127] },
  { name: "Mizoram", coordinates: [92.9376, 23.1645] },
  { name: "Manipur", coordinates: [93.9063, 24.6637] },
  { name: "Punjab", coordinates: [75.3412, 31.1471] },
  { name: "Bihar", coordinates: [85.3131, 25.0961] },
  { name: "Jammu and Kashmir", coordinates: [74.797371, 34.083656] },
  { name: "Nagaland", coordinates: [94.5624, 26.1584] },
  { name: "Sikkim", coordinates: [88.5122, 27.5330] },
  { name: "Karnataka", coordinates: [75.7139, 15.3173] },
  { name: "Jharkhand", coordinates: [85.2799, 23.6102] },
  { name: "Uttrakhand", coordinates: [79.0193, 30.0668] },
  { name: "Haryana", coordinates: [76.0856, 29.0588] },
  { name: "Meghalaya", coordinates: [91.3662, 25.4670] },
  { name: "Arunachal Pradesh", coordinates: [94.7278, 28.2180] },

]
const GET_DATA = gql`
 query getSalesByState ($state:String){
  getSalesByState(state:$state){
    crops
    sales
  }
 }
`
const cordinatesToState = {
  1312: "Orissa",
  1293: "Chattisgarh",
  1306: "MP",
  1321: "WB",
  1291: "Bihar",
  1319: "UP",
  1315: "Rajasthan",
  1298: "Gujrat",
  1307: "Maharastra",
  1288: "AP",
  1317: "TN",
  1304: "Kerala",
  1290: "Assam",
  1308: "Manipur",
  1310: "Mizoram",
  1318: "Tripura",
  1300: "HP",
  1301: "JK",
  1316: "Sikkim",
  1311: "Nagaland",
  1303: "Karnataka",
  1314: "Punjab",
  1320: "Uttrakhand",
  1299: "Haryana",
  1289: "Arunachal",
  1302: "Jharkhand",
  1309: "Meghalaya"
}





const getOptions = (state) => {
  return ({
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: `${state}`
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 1,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 1,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          },
          scaleLabel: {
            display: true,
            labelString: `Crops in ${state}`
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  })
}


const Sales = ({ state }) => {
console.log("state ",state)
  const { data, error, loading } = useQuery(GET_DATA, {
    variables: { state }
  });

if(error) return <p>Error</p>

  if (loading) {
    return <Loader style={{ marginTop: "78px", marginLeft: "123px" }} type="Rings"
      color="blue"
      height={100}
      width={100}
      timeout={300000000} />
  }
  const crops = data.getSalesByState.crops;
  const sales = data.getSalesByState.sales;

  const barData = canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: crops,
      datasets: [
        {
          label: "Major Crops(Quintal)",
          backgroundColor: gradientFill,
          borderColor: "#062e04",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#062e04",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,

          data: sales
        },

      ]
    };
  }

  return (
    <div>
      <Bar
        data={barData}
        options={getOptions(state)}
      />
      ;
    </div>
  );

}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(parseInt(isLoggedIn,10) === 0) return null;
  return <Sales state={cordinatesToState[isLoggedIn]} />
}

class FullScreenMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "0",
      center: [100, 20],
      zoom: 5,
      state: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(key) {
    console.log("clicked", key);
    this.setState(
      {
        name: key
      },
      () => {
        console.log("state changed", this.state.name);
      }
    );
  }
  handleCityClick(city) {
    this.setState({
      zoom: 20,
      center: city.coordinates,
      state: city.name
    }, () => {
      console.log("maximized", this.state.state);
    });
  }
  handleReset() {
    this.setState({
      center: [100, 20],
      zoom: 5
    });
  }
  render() {
    console.log("rendering the maps");
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardHeader>Sales Of Various Crops Across India</CardHeader>
                <CardBody>
                  <Row>
                    <Col xs={7}>
                      <ComposableMap
                        projectionConfig={{ scale: 1400 }}
                        width={600}
                        height={600}
                        style={{
                          width: "auto",
                          height: "100%"
                        }}
                      >
                        <ZoomableGroup center={[82, 22]} disablePanning>
                          <Geographies
                            geography={"/indiastates.json"}
                            disableOptimization={this.state.disableOptimization}
                          >
                            {(geographies, projection) => {
                              return geographies.map((geography, i) => {
                                console.log(geography, projection);
                                return (
                                  <Geography
                                    key={i}
                                    geography={geography}
                                    projection={projection}
                                    onClick={() =>
                                      this.handleChange(
                                        geography.properties.ID_1
                                      )
                                    }
                                    style={{
                                      default: {
                                        fill: "#ECEFF1",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                      },
                                      hover: {
                                        fill: "#607D8B",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                      },
                                      pressed: {
                                        fill: "#FF5722",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                      },
                                    }}
                                  />
                                );
                              });
                            }}
                          </Geographies>
                          <Markers>
                            {cities.map((city, i) => (
                              <Marker
                                key={i}
                                marker={city}
                                onClick={this.handleCityClick}
                              >
                                <circle
                                  cx={0}
                                  cy={0}
                                  r={6}
                                  fill="#FF5722"
                                  stroke="#DF3702"
                                />
                              </Marker>
                            ))}
                          </Markers>
                        </ZoomableGroup>
                      </ComposableMap>
                    </Col>

                    <Col xs={5}>
                      <Col>
                        <Row xs={5}>
                          <div style={wrapperStyles}>
                            <Motion
                              defaultStyle={{
                                zoom: 1,
                                x: 100,
                                y: 20
                              }}
                              style={{
                                zoom: spring(this.state.zoom, {
                                  stiffness: 210,
                                  damping: 20
                                }),
                                x: spring(this.state.center[0], {
                                  stiffness: 210,
                                  damping: 20
                                }),
                                y: spring(this.state.center[1], {
                                  stiffness: 210,
                                  damping: 20
                                })
                              }}
                            >
                              {({ zoom, x, y }) => (
                                <ComposableMap
                                  projectionConfig={{ scale: 205 }}
                                  width={980}
                                  height={551}
                                  style={{
                                    width: "100%",
                                    height: "auto"
                                  }}
                                >
                                  <ZoomableGroup center={[x, y]} zoom={zoom}>
                                    <Geographies
                                      geography={"/indiastates.json"}
                                      disableOptimization
                                    >
                                      {(geographies, projection) => {
                                        return geographies.map(
                                          (geography, i) => {
                                            // console.log(geography);
                                            return (
                                              <Geography
                                                key={i}
                                                geography={geography}
                                                projection={projection}
                                                style={{
                                                  default: {
                                                    fill:
                                                      geography.properties
                                                        .NAME_1 ==
                                                        this.state.state
                                                        ? "#CFD8DC"
                                                        : "#ECEFF1",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.15,
                                                    outline: "none"
                                                  },
                                                  hover: {
                                                    fill: "#CFD8DC",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.15,
                                                    outline: "none"
                                                  },
                                                  pressed: {
                                                    fill: "#FF5722",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.15,
                                                    outline: "none"
                                                  }
                                                }}
                                              />
                                            );
                                          }
                                        );
                                      }}
                                    </Geographies>
                                  </ZoomableGroup>
                                </ComposableMap>
                              )}
                            </Motion>
                          </div>
                        </Row>
                        <Row xs={7} >
                          <div
                            className="chart-area"
                            style={{ marginTop: "50px", width: "100%", height: "100%" }}
                          >
                            <Greeting isLoggedIn={this.state.name} style={{ marginTop: "50px", width: "100%", height: "100%" }} />,
                          </div>
                        </Row>
                      </Col>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FullScreenMap;
