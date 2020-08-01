// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
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

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
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
        display: 0,
        ticks: {
          display: true,
          autoSkip: false,
          callback: function (value, index, values) {
            return value;
          }
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: true,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################
const dashboardShippedProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu And Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "A & N Islands",
  "Chandigarh",
  "D & N Haveli",
  "Daman & Diu",
  "Delhi",
  "Lakshdweep",
  "Puducherry"
];
const dataC = [
  [
    227,
    0,
    0,
    0,
    1,
    0,
    79,
    1,
    0,
    0,
    0,
    166,
    19,
    0,
    210,
    0,
    0,
    0,
    0,
    0,
    9,
    0,
    0,
    580,
    0,
    0,
    9,
    652,
    0,
    0,
    8,
    0,
    380,
    0,
    0
  ],
  [
    109,
    0,
    0,
    0,
    13,
    0,
    71,
    16,
    3,
    0,
    0,
    175,
    4,
    12,
    317,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    523,
    0,
    0,
    0,
    181,
    0,
    0,
    33,
    0,
    111,
    0,
    15
  ],
  [
    31,
    0,
    0,
    0,
    2,
    0,
    327,
    16,
    0,
    0,
    9,
    105,
    22,
    8,
    247,
    0,
    0,
    0,
    0,
    0,
    0,
    5,
    0,
    93,
    0,
    1,
    91,
    120,
    0,
    0,
    25,
    0,
    22,
    0,
    3
  ],
  [
    0,
    0,
    0,
    0,
    20,
    0,
    158,
    7,
    0,
    0,
    0,
    32,
    3,
    17,
    252,
    0,
    1,
    0,
    0,
    0,
    0,
    56,
    0,
    14,
    0,
    0,
    0,
    0,
    173,
    0,
    15,
    28,
    0,
    65,
    0,
    3
  ],
  [
    0,
    0,
    0,
    0,
    7,
    0,
    52,
    0,
    0,
    0,
    36,
    14,
    0,
    104,
    213,
    0,
    0,
    26,
    0,
    2,
    0,
    3,
    0,
    15,
    0,
    0,
    0,
    47,
    155,
    0,
    133,
    14,
    0,
    91,
    0,
    1
  ],
  [
    0,
    9,
    0,
    0,
    55,
    0,
    88,
    0,
    0,
    0,
    5,
    29,
    7,
    94,
    107,
    0,
    0,
    17,
    6,
    0,
    0,
    2,
    0,
    8,
    0,
    0,
    0,
    4,
    157,
    0,
    10,
    15,
    0,
    228,
    0,
    0
  ]
];
const getChartCholera = state => {
  var index = states.indexOf(state);
  return {
    data: canvas => {
      var ctx = canvas.getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#18ce0f");
      gradientStroke.addColorStop(1, chartColor);
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
      return {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Cases",
            borderColor: "#18ce0f",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#18ce0f",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [dataC[0][index], dataC[1][index], dataC[2][index], dataC[3][index], dataC[4][index], dataC[5][index]]
          }
        ]
      };
    },
    options: gradientChartOptionsConfigurationWithNumbersAndGrid
  };
};
const dataD = [
  [
    2235614,
    32228,
    96816,
    130276,
    64575,
    15146,
    367450,
    224223,
    310227,
    544711,
    98258,
    591989,
    260938,
    290705,
    507046,
    17605,
    148801,
    16192,
    30458,
    632493,
    190022,
    227571,
    44094,
    210074,
    109777,
    79643,
    554770,
    1854651,
    19679,
    42615,
    81322,
    12638,
    102983,
    4693,
    80766
  ],
  [
    2092340,
    44570,
    134295,
    493559,
    108238,
    13696,
    410508,
    215111,
    338708,
    550645,
    72170,
    582347,
    360743,
    488743,
    457001,
    27469,
    201819,
    15957,
    20939,
    743493,
    197059,
    508512,
    53516,
    199930,
    98417,
    101927,
    740328,
    2033180,
    33513,
    38218,
    74007,
    12559,
    136567,
    5461,
    96210
  ],
  [
    1721050,
    27659,
    105876,
    550281,
    104966,
    16485,
    427523,
    166882,
    355104,
    591231,
    78292,
    139819,
    375122,
    535012,
    527047,
    25333,
    186023,
    13127,
    21376,
    593207,
    183531,
    506638,
    42410,
    278407,
    92826,
    84792,
    826246,
    1830310,
    27413,
    44664,
    62259,
    8615,
    125727,
    7496,
    79751
  ],
  [
    1332145,
    12657,
    83373,
    550038,
    115561,
    16097,
    504857,
    197898,
    350459,
    515013,
    81451,
    810781,
    402106,
    768021,
    664014,
    29954,
    197024,
    14201,
    22301,
    767575,
    170438,
    676832,
    39983,
    250264,
    0,
    80388,
    90428,
    754582,
    189612,
    23947,
    39277,
    63337,
    12831,
    120618,
    6750,
    87248
  ],
  [
    1122740,
    10834,
    128392,
    455125,
    132278,
    13204,
    567123,
    190390,
    334168,
    472843,
    81934,
    832356,
    428374,
    740690,
    877638,
    29159,
    167691,
    14215,
    15511,
    782151,
    179211,
    810518,
    53295,
    308358,
    963573,
    88064,
    108974,
    814481,
    1798754,
    22398,
    45284,
    51195,
    18169,
    157445,
    4472,
    92599
  ],
  [
    1122740,
    10834,
    128392,
    455125,
    132278,
    13204,
    567123,
    190390,
    334168,
    472843,
    81934,
    832356,
    428374,
    740690,
    877638,
    29159,
    167691,
    14215,
    15511,
    782151,
    179211,
    810518,
    53295,
    308358,
    963573,
    88064,
    108974,
    814481,
    1798754,
    22398,
    45284,
    51195,
    18169,
    157445,
    4472,
    92599
  ]
];
const getChartD = state => {
  var index = states.indexOf(state);
  return {
    data: canvas => {
      var ctx = canvas.getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#18ce0f");
      gradientStroke.addColorStop(1, chartColor);
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
      return {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Cases",
            borderColor: "#18ce0f",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#18ce0f",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [dataD[0][index], dataD[1][index], dataD[2][index], dataD[3][index], dataD[4][index], dataD[5][index]]
          }
        ]
      };
    },
    options: gradientChartOptionsConfigurationWithNumbersAndGrid
  };
};
const dataT = [
  [
    180297,
    7885,
    4541,
    14787,
    42115,
    285,
    14371,
    25469,
    28074,
    82347,
    27009,
    38727,
    3322,
    32490,
    50095,
    5498,
    9235,
    2270,
    14962,
    59903,
    36263,
    7902,
    551,
    50185,
    3553,
    13760,
    117537,
    127180,
    1343,
    3190,
    2269,
    964,
    14,
    11077
  ],
  [
    279816,
    11821,
    12016,
    142341,
    54417,
    290,
    24325,
    34427,
    40041,
    68157,
    19624,
    55163,
    4670,
    68280,
    71094,
    13731,
    6916,
    2062,
    10437,
    73087,
    42536,
    27018,
    401,
    34611,
    6198,
    28698,
    143516,
    143179,
    1340,
    3023,
    2559,
    1265,
    1265,
    47957,
    5,
    2678
  ],
  [
    233212,
    6154,
    6521,
    261791,
    27457,
    355,
    22962,
    27182,
    38572,
    70859,
    24806,
    13457,
    4329,
    114578,
    82852,
    10927,
    9134,
    2766,
    12520,
    53743,
    35136,
    31615,
    186,
    31440,
    12849,
    25956,
    223066,
    108695,
    1363,
    3251,
    4323,
    888,
    31579,
    3,
    2591
  ],
  [
    186446,
    4512,
    5328,
    283679,
    32617,
    573,
    29505,
    29990,
    48786,
    57537,
    36663,
    92959,
    2269,
    155190,
    102299,
    10636,
    10395,
    2758,
    11604,
    90363,
    34651,
    83540,
    716,
    29937,
    0,
    10553,
    28939,
    225829,
    90086,
    881,
    6021,
    2439,
    167,
    27339,
    3,
    1477
  ],
  [
    146385,
    4476,
    11333,
    265469,
    47970,
    1603,
    35362,
    31965,
    40639,
    52359,
    28330,
    85837,
    2862,
    125737,
    130809,
    5422,
    13459,
    2804,
    7977,
    90895,
    34867,
    79244,
    453,
    40579,
    163747,
    4596,
    34120,
    288140,
    112262,
    870,
    12447,
    1406,
    165,
    30698,
    77,
    2049
  ],
  [
    170249,
    4574,
    19328,
    204366,
    74632,
    724,
    45970,
    36442,
    38093,
    46904,
    41731,
    97493,
    2038,
    129998,
    137617,
    4942,
    14128,
    3085,
    8267,
    73330,
    37896,
    116470,
    474,
    33853,
    133838,
    5398,
    33904,
    495698,
    161264,
    1127,
    12237,
    4420,
    197,
    30015,
    50,
    1943
  ]
];
const getChartT = state => {
  var index = states.indexOf(state);
  return {
    data: canvas => {
      var ctx = canvas.getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#18ce0f");
      gradientStroke.addColorStop(1, chartColor);
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
      return {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Cases",
            borderColor: "#18ce0f",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#18ce0f",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [dataT[0][index], dataT[1][index], dataT[2][index], dataD[3][index], dataD[4][index], dataD[5][index]]
          }
        ]
      };
    },
    options: gradientChartOptionsConfigurationWithNumbersAndGrid
  };
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT KUYYURA- A.P.",
        "WELL AT TADAVAI A.P.",
        "WELL AT VIJAYWADA- A.P.",
        "WELL AT PEDDAVOORA- A.P.",
        "B/W.- EAST OF SAICHERUVU-PAIDIPALLY (V)-WARANGAL DIST.",
        "B/W -NEAR CKM COLLEGE -ENUMAMULA (V) -WARANGAL DIST.",
        "O/W - BHOOMAIAH NEAR ASHPONDSOF NTPC - KUNDANPALLY (V) - RAMAGUNDAM - KARIMNAGAR- A.P",
        "B/W - MANAKONDUR (V) - KARIMNAGAR DIST.- A.P",
        "B/W - IDA - NEAR CHAITANYA CHLORIDES -PASHAMAYLAM - MEDAK",
        "B/W.- PRIMARY SCHOOL -RUDRAVELLI (V) - BIBINAGAR (M)- NALGONDA DIST.- A.P",
        "B/W - SRI RAMNAGAR COLONY- SAKKAR NAGAR- BODHAN- NIZAMABAD DIST.- A.P",
        "B W.- KRISHNA MURTHY- D.NO.48-16-43 AUTONAGAR VIJJAYAWADA- KRISNA DIST.- A.P.",
        "B/W.- VIJAY KUMAR AUTONAGARVIJAYAWADA- KRISHNA DIST.",
        "B/W.- NAGARAM(V)- PALVONCHA- KHAMMAM DIST.- A.P.",
        "B W OF NAVLOK GARDENS NELLORE",
        "B/W.- TUNGBHADRA RIVER NEAR KURNOOL- A.P.",
        "B/W.- NANDYAL- KURNOOL DIST.- A.P.",
        "B/W.- NAGIRI- CHITTOOR DIST.- A.P",
        "B/W.- SWARNAMUKHI RIVER-SRIKALAHASTI- CHITTOOR DIST.",
        "O/W.- NEAR RAMA TEMPLE - WARD No.2 - MINDI - VISAKHAPATNAM- A.P",
        "O/W.PEDDANUYYI - VIZIANAGARAM",
        "B/W.- NEAR M/S ANDHRA SUGARS LTD.- KOVVUR - W.G.DIST.",
        "O/W.-NEAR PARTAP NAGAR BRIIDGE -KAKINADA - E.G.DIST.- A.P"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Andhra Pradesh'
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
            labelString: "Zones in arunachal pradesh"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartAssam = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "RICE",
        "MAIZE",
        "PULSES",
        "POTATO",
        "WHEAT",
        "TEA",
        "JUTE",
        "OIL SEEDS",
        "SUGARCANE",
        "COTTON",
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        } */
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Assam'
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
            labelString: "Zones in assam"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartMizoram = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "MANDARIN",
        "BANANA",
        "PINEAPPLE",
        "GINGER",
        "TURMERIC",
        "CHILLI",
        "CABBAGE",
        "TOMATO",
        "RADDISH",
        "PUMPKIN"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Mizoram'
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
            labelString: "Zones in mizoram"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartManipur = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "POTATO",
        "GINGER",
        "GRAM",
        "CAULIFLOWER",
        "CABBAGE",
        "MUSTARD",
        "BANANA",
        "LEMON",
        "ORANGE",
        "CASHEW"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        } */
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Manipur'
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
            labelString: "Zones in manipur"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartTripura = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT UDAIPUR (TUBEWELL)-",
        "WELL AROUND UDAIPUR (TUBEWELL)-TRIPURA",
        "KUNJBAN- AGARTALA- TRIPURA",
        "LANKAMURA- TRIPURA",
        "A.D.NAGAR- AGARTALA- TRIPURA",
        "SHIBNAGAR- AGARTALA- TRIPURA",
        "GANDHIGRAM- AGARTALA- TRIPURA"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Tripura'
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
            labelString: "Zones in tripura"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartChattisgarh = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "AT RAIPUR REGION- CHHATISSGARH",
        "AT RAIPUR REGION-CHHATISSGARH",
        "AT BILASPUR REGION",
        "AT BILASPUR REGION"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Chattisgarh'
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
            labelString: "Zones in chattisgarh"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartMP = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "RICE",
        "WHEAT",
        "JWAR",
        "MAIZE",
        "GRAM",
        "TOWAR",
        "COTTON",
        "SUGARCANE",
        "SOYABEAN"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Madhya Pradesh'
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
            labelString: "Zones in madhya pradesh"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartHP = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "AT KALA AMB- H.P",
        "AT PAONTA SAHIB- H.P",
        "AT PARWANOO- H.P",
        "AT BADDI- H.P",
        "AT BAROTIWALA- H.P",
        "AT NALAGARH- H.P",
        "AT DAMTAL- H.P",
        "AT UNA- H.P",
        "SHIMLA DOWNSTREAM OF MSW DUMPING SITE",
        "DHARAMSHALA KANGRA DOWNSTREAM OF MSWDUMPING SITE",
        "MANDI-DOWNSTREAM OF MSW DUMPING SITE",
        "PARWANOO INDUSTRIAL AREA",
        "BADDI INDUSTRIAL AREA",
        "BAROTIWALA INDUSTRIAL AREA",
        "NALAGARH INDUSTRIAL AREA",
        "KALA AMB INDUSTRIAL AREA",
        "PAONTA SAHIB INDUSTRIAL AREA",
        "MEHATPUR INDUSTRIAL AREA",
        "UNA INDUSTRIAL AREA"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Himachal Pradesh'
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
            labelString: "Zones in himachal pradesh"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartKarnatka = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "SECTOR 15",
        "SECTOR  22",
        "SECTOR  34",
        "SECTOR 47",
        "PALSORA VILLAGE",
        "DHANAS VILLAGE",
        "DADU MAJRA"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Karnataka'
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
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartPunjab = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "PETROL PUMP OPP. HERO CYCLE-LUDHIANA",
        "BHAGWAN SINGH- H.NO.907- DASMESH NAGAR- GALI NO. 6- LUDHIANA",
        "GURCHAARAN SINGH HAIBOWAL DAIRY COMPLEX- LUDHIANA",
        "DUSSHERA GROUND INDUSTRIAL ESTATE- LUDHIANA",
        "SHUKLA TEA STAL POINT- LUDHIANA",
        "PUNJAB AGRICULTUREAL UNIVERSITY- LUDHIANA"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Punjab'
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
            labelString: "Zones in punjab"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartSikkim = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "PETROL PUMP OPP. HERO CYCLE-Sikkim",
        "BHAGWAN SINGH- H.NO.907- DASMESH NAGAR- GALI NO. 6- Sikkim",
        "GURCHAARAN SINGH HAIBOWAL DAIRY COMPLEX- Sikkim",
        "DUSSHERA GROUND INDUSTRIAL ESTATE- Sikkim",
        "SHUKLA TEA STAL POINT- Sikkim",
        "PUNJAB AGRICULTUREAL UNIVERSITY- Sikkim"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Sikkim'
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
            labelString: "Zones in punjab"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartKerala = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT ELOOR- KERALA",
        "WELL AT CHUNGAPALLY- KERALA",
        "WELL AT PUNALUR- KERALA",
        "PAPPANAMKODE-THIRUVANANTHAPURAM",
        "NEDUMANGAD-THIRUVANANTHAPURAM",
        "NEDUMANGAD-THIRUVANANTHAPURAM",
        "CHERTHALA-ALLEPPY- KERALA",
        "VYTTILA-ERNAKULAM",
        "EDAYAR ERNAKULAM DISTT.",
        "KALAMASSERY ERNAKULAM",
        "PUNKUNNAM TRISSUR DISTT.",
        "MALAPURAM - KERALA",
        "MAVOOR- KOZHIKKODE DISTT.- KERALA",
        "KANNUR (MUNICIPALITY) KANNUR",
        "PAYYANNUR- KANNUR DISTT.",
        "FATHIMAPURAM (CHANGANASSERY)",
        "KAROOR (PALA)",
        "VAIKOM",
        "VADAVATHOOR (KOTTAYAM)",
        "SARVODAPURAM- ALAPPUZHA",
        "KUREEPUZHA (KOLLAM)",
        "K.M.M.L.(KOLLAM)",
        "CHELLORA TRENCHING GROUND(KANNUR)",
        "PUNNALPETTIPPALAM (TELLICHERRYMUNICIPALITY)",
        "MANJERI",
        "LALOOR (THRISSUR)",
        "OLLUR (THRISSUR)",
        "BRAHMAPURAM M.S.W.DUMPARK (ERNAKULAM)",
        "HAZARDOUS WASTE DUMP(AMBALAMUGHAL)",
        "KARUKAMANI"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Kerala'
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
            labelString: "Zones in kerala"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartTN = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT MUSIRI- TAMIL NADU",
        "COLLECTOR WELL AT THIRUPUVANAM FOR MADURAI WAT. SUPPLY SCHEME"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Tamil Nadu'
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
            labelString: "Zones in tamil nadu"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartJK = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT MUTHIALPET AREA(I)",
        "WELL AT THENGAITHITTU AREA-(II)",
        "WELL AT MUTHARAPLATYAM (PWD)",
        "WELL AT KALAPET-PONDI.UNIVER.ADMN.BLOCK",
        "NEHRU STATUE- PONDICHERRY",
        "KATTERIKUPPAM- PODICHERRY",
        "CHUNMBAR RIVER- PONDICHERRY",
        "KURUMBAPET",
        "METTUPALAYAM",
        "URUVAIYAR",
        "KARUVADIKUPPAM",
        "T.R.PATTINAM- KARAIKAL",
        "VADAMATTAM- KARAIKAL"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Jammu And Kashmir'
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
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartJharkhand = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: ["WELL AT SOMNATH INDL ESTATE"],
      datasets: [
        {
          label: "Major Crops",
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

          data: [25]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [7.1]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [0.5]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Jharkhand'
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
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartNagaland = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: ["WELL AT SOMNATH INDL ESTATE"],
      datasets: [
        {
          label: "Major Crops",
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

          data: [25]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [7.1]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [0.5]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Nagaland'
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
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};

const dashboard24HoursPerformanceChartMaharastra = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "INDL.ESTATE TARAPUR",
        "MIRA-BHAYANDER",
        "DAHANU",
        "VASAI",
        "PALGHAR",
        "BMW SITE- BURUDGAON- AHMEDNAGAR",
        "MSW SITE- PATHARDI- NASIK",
        "MSW SITE- PIMPRI-CHINCHWAD- PUNE",
        "PHANDARPUR- GANGAPUR-AURANGABAD",
        "KHAPERKHEDA- NAGPUR",
        "KORADI- NAGPUR",
        "RAIPUR- NAGPUR",
        "BHAHMNI- KALMESHWAR- NAGPUR",
        "SANGERA GONDIA",
        "BHANDEWARI- NAGPUR",
        "SUKALI- AMRAVATI",
        "AKOT- AKOLA",
        "SAWARGAON- YAVATMAL",
        "PARVATI INDL.ESTATE- SHIROL",
        "MIDC- SHINOLI- CHENDGAD",
        "SAVALI- SANGLI",
        "RASULWADI-SAMBARWADI- SANGLI",
        "BORE WELL AT KATPUR- NEAR Z.PSCHOOL.",
        "DUG WELL AT RANJANGAON.",
        "HAND PUMP IN THE PREMISES OFZILLA PARISHAD PRIMARY SCHOOL"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Maharastra'
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
            labelString: "Zones in maharastra"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartGujarat = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT AHMEDABAD",
        "WELL AT NAROL- AHMEDABAD",
        "JUNAGADH",
        "RAJKOT",
        "SURENDRANAGAR",
        "PALANPUR",
        "MEHASANA",
        "SIDDHPUR (DIST.PATAN)",
        "HIMATNAGAR",
        "NADIAD",
        "DAHOD",
        "GODHARA",
        "VADODARA (INDUSTRIAL-NANDESARI)",
        "ANKLESHWAR (INDUSTRIAL AREA)",
        "PANDESARA (INDSTRIAL) SURAT",
        "MORA-HAJIRA (INDUSTRIAL)- HAJIRA",
        "GABHENI VILL- SURAT (INDUSTRIAL)",
        "BORE WELL OF CHHATRAL GIDC.",
        "BORE WELL OF PALSANA VILLAGE.",
        "ORE WELL OF SANTEJ VILLAGE.",
        "B/W- HAZARDOUS W.DISPOSAL SITE (GUJ.ENVIRO P.& I.LTD.)",
        "BORE WELL OF SACHIN GIDC.",
        "WELL AT OLPAD.",
        "BORE WELL OF NAVSARI GIDCINDUSTRIES ASSOCIATION OFFICE.",
        "FROM WATER WORKS OF NAVSARINEAR DHUDIA TALAV.",
        "BORE WELL - BARDOLI REST HOUSE.",
        "WELL AT ANKLESHWAR INDUSTRIAL AREA (BORE WELL OF M/S INDUSTRIAL CARBON AT ANKLESHWAR- RAJPIPLA ROAD.",
        "BORE WELL AT STP MADHAPAR- DIST. RAJKOT",
        "B/W- SNR. VINAYAK JAL SUDDHIKARAN SAHAKARI MANDALI LTD.(CETP )- BAVLA- AHMEDABAD",
        "B/W OF SOMESHWAR RICE MILL- NR. BAVLA ECO PROJECT- (CETP )- BAVLA- AHMEDABAD",
        "BORE WELL OF PIRANA TERMINAL PUMPING STN- PIRANA- NR. V. N. BDG- AHMEDABAD"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Gujarat'
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
            labelString: "Zones in gujarat"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartUttrakhand = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT AHMEDABAD",
        "WELL AT NAROL- AHMEDABAD",
        "JUNAGADH",
        "RAJKOT",
        "SURENDRANAGAR",
        "PALANPUR",
        "MEHASANA",
        "SIDDHPUR (DIST.PATAN)",
        "HIMATNAGAR",
        "NADIAD",
        "DAHOD",
        "GODHARA",
        "VADODARA (INDUSTRIAL-NANDESARI)",
        "ANKLESHWAR (INDUSTRIAL AREA)",
        "PANDESARA (INDSTRIAL) SURAT",
        "MORA-HAJIRA (INDUSTRIAL)- HAJIRA",
        "GABHENI VILL- SURAT (INDUSTRIAL)",
        "BORE WELL OF CHHATRAL GIDC.",
        "BORE WELL OF PALSANA VILLAGE.",
        "ORE WELL OF SANTEJ VILLAGE.",
        "B/W- HAZARDOUS W.DISPOSAL SITE (GUJ.ENVIRO P.& I.LTD.)",
        "BORE WELL OF SACHIN GIDC.",
        "WELL AT OLPAD.",
        "BORE WELL OF NAVSARI GIDCINDUSTRIES ASSOCIATION OFFICE.",
        "FROM WATER WORKS OF NAVSARINEAR DHUDIA TALAV.",
        "BORE WELL - BARDOLI REST HOUSE.",
        "WELL AT ANKLESHWAR INDUSTRIAL AREA (BORE WELL OF M/S INDUSTRIAL CARBON AT ANKLESHWAR- RAJPIPLA ROAD.",
        "BORE WELL AT STP MADHAPAR- DIST. RAJKOT",
        "B/W- SNR. VINAYAK JAL SUDDHIKARAN SAHAKARI MANDALI LTD.(CETP )- BAVLA- AHMEDABAD",
        "B/W OF SOMESHWAR RICE MILL- NR. BAVLA ECO PROJECT- (CETP )- BAVLA- AHMEDABAD",
        "BORE WELL OF PIRANA TERMINAL PUMPING STN- PIRANA- NR. V. N. BDG- AHMEDABAD"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Uttrakhand'
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
            labelString: "Zones in gujarat"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartHaryana = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT AHMEDABAD",
        "WELL AT NAROL- AHMEDABAD",
        "JUNAGADH",
        "RAJKOT",
        "SURENDRANAGAR",
        "PALANPUR",
        "MEHASANA",
        "SIDDHPUR (DIST.PATAN)",
        "HIMATNAGAR",
        "NADIAD",
        "DAHOD",
        "GODHARA",
        "VADODARA (INDUSTRIAL-NANDESARI)",
        "ANKLESHWAR (INDUSTRIAL AREA)",
        "PANDESARA (INDSTRIAL) SURAT",
        "MORA-HAJIRA (INDUSTRIAL)- HAJIRA",
        "GABHENI VILL- SURAT (INDUSTRIAL)",
        "BORE WELL OF CHHATRAL GIDC.",
        "BORE WELL OF PALSANA VILLAGE.",
        "ORE WELL OF SANTEJ VILLAGE.",
        "B/W- HAZARDOUS W.DISPOSAL SITE (GUJ.ENVIRO P.& I.LTD.)",
        "BORE WELL OF SACHIN GIDC.",
        "WELL AT OLPAD.",
        "BORE WELL OF NAVSARI GIDCINDUSTRIES ASSOCIATION OFFICE.",
        "FROM WATER WORKS OF NAVSARINEAR DHUDIA TALAV.",
        "BORE WELL - BARDOLI REST HOUSE.",
        "WELL AT ANKLESHWAR INDUSTRIAL AREA (BORE WELL OF M/S INDUSTRIAL CARBON AT ANKLESHWAR- RAJPIPLA ROAD.",
        "BORE WELL AT STP MADHAPAR- DIST. RAJKOT",
        "B/W- SNR. VINAYAK JAL SUDDHIKARAN SAHAKARI MANDALI LTD.(CETP )- BAVLA- AHMEDABAD",
        "B/W OF SOMESHWAR RICE MILL- NR. BAVLA ECO PROJECT- (CETP )- BAVLA- AHMEDABAD",
        "BORE WELL OF PIRANA TERMINAL PUMPING STN- PIRANA- NR. V. N. BDG- AHMEDABAD"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Haryana'
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
            labelString: "Zones in gujarat"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartArunachal = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT AHMEDABAD",
        "WELL AT NAROL- AHMEDABAD",
        "JUNAGADH",
        "RAJKOT",
        "SURENDRANAGAR",
        "PALANPUR",
        "MEHASANA",
        "SIDDHPUR (DIST.PATAN)",
        "HIMATNAGAR",
        "NADIAD",
        "DAHOD",
        "GODHARA",
        "VADODARA (INDUSTRIAL-NANDESARI)",
        "ANKLESHWAR (INDUSTRIAL AREA)",
        "PANDESARA (INDSTRIAL) SURAT",
        "MORA-HAJIRA (INDUSTRIAL)- HAJIRA",
        "GABHENI VILL- SURAT (INDUSTRIAL)",
        "BORE WELL OF CHHATRAL GIDC.",
        "BORE WELL OF PALSANA VILLAGE.",
        "ORE WELL OF SANTEJ VILLAGE.",
        "B/W- HAZARDOUS W.DISPOSAL SITE (GUJ.ENVIRO P.& I.LTD.)",
        "BORE WELL OF SACHIN GIDC.",
        "WELL AT OLPAD.",
        "BORE WELL OF NAVSARI GIDCINDUSTRIES ASSOCIATION OFFICE.",
        "FROM WATER WORKS OF NAVSARINEAR DHUDIA TALAV.",
        "BORE WELL - BARDOLI REST HOUSE.",
        "WELL AT ANKLESHWAR INDUSTRIAL AREA (BORE WELL OF M/S INDUSTRIAL CARBON AT ANKLESHWAR- RAJPIPLA ROAD.",
        "BORE WELL AT STP MADHAPAR- DIST. RAJKOT",
        "B/W- SNR. VINAYAK JAL SUDDHIKARAN SAHAKARI MANDALI LTD.(CETP )- BAVLA- AHMEDABAD",
        "B/W OF SOMESHWAR RICE MILL- NR. BAVLA ECO PROJECT- (CETP )- BAVLA- AHMEDABAD",
        "BORE WELL OF PIRANA TERMINAL PUMPING STN- PIRANA- NR. V. N. BDG- AHMEDABAD"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Arunachal Pradesh'
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
            labelString: "Zones in gujarat"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartMeghalaya = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL AT AHMEDABAD",
        "WELL AT NAROL- AHMEDABAD",
        "JUNAGADH",
        "RAJKOT",
        "SURENDRANAGAR",
        "PALANPUR",
        "MEHASANA",
        "SIDDHPUR (DIST.PATAN)",
        "HIMATNAGAR",
        "NADIAD",
        "DAHOD",
        "GODHARA",
        "VADODARA (INDUSTRIAL-NANDESARI)",
        "ANKLESHWAR (INDUSTRIAL AREA)",
        "PANDESARA (INDSTRIAL) SURAT",
        "MORA-HAJIRA (INDUSTRIAL)- HAJIRA",
        "GABHENI VILL- SURAT (INDUSTRIAL)",
        "BORE WELL OF CHHATRAL GIDC.",
        "BORE WELL OF PALSANA VILLAGE.",
        "ORE WELL OF SANTEJ VILLAGE.",
        "B/W- HAZARDOUS W.DISPOSAL SITE (GUJ.ENVIRO P.& I.LTD.)",
        "BORE WELL OF SACHIN GIDC.",
        "WELL AT OLPAD.",
        "BORE WELL OF NAVSARI GIDCINDUSTRIES ASSOCIATION OFFICE.",
        "FROM WATER WORKS OF NAVSARINEAR DHUDIA TALAV.",
        "BORE WELL - BARDOLI REST HOUSE.",
        "WELL AT ANKLESHWAR INDUSTRIAL AREA (BORE WELL OF M/S INDUSTRIAL CARBON AT ANKLESHWAR- RAJPIPLA ROAD.",
        "BORE WELL AT STP MADHAPAR- DIST. RAJKOT",
        "B/W- SNR. VINAYAK JAL SUDDHIKARAN SAHAKARI MANDALI LTD.(CETP )- BAVLA- AHMEDABAD",
        "B/W OF SOMESHWAR RICE MILL- NR. BAVLA ECO PROJECT- (CETP )- BAVLA- AHMEDABAD",
        "BORE WELL OF PIRANA TERMINAL PUMPING STN- PIRANA- NR. V. N. BDG- AHMEDABAD"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Meghalaya'
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
            labelString: "Zones in gujarat"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartRajasthan = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "WELL OF LOOMJI- CHAUDHARY- NEARNAYAGAON- PALI- (UPSTREAM 1 KM.FROM PALI TOWN)",
        "WELL (UPSTREAM 1 KM FROM JODHPUR TOWN)",
        "WELL (U/S 1 KM FROM JODHPUR TOWN)",
        "RIICO PUMP HOUSE NEAR MONTOMOTORS- MIA- ALWAR",
        "BORE WELL IN MODI ALKALIS & CHEMICALS- MIA- ALWAR",
        "WELL KOTHI IN VILLAGE BAGARRAJPUT- ALWAR",
        "WELL AT VILLAGE SANTHLA VERY NEAR BHIWADI INDUSTRIAL AREA- BHIWADI",
        "WELL AT VILLAGE ALUPUR- VERYNEAR BHIWADI INDUSTRIAL AREA- BHIWADI",
        "WELL AT VILLAGE HARCHANDPUR- VERY NEAR- BHIWADI TO BHIWADI INDUSTRIAL AREA- BHIWADI",
        "WELL AT VILLAGE BHIWADI - VERYNEAR- BHIWADI TO BHIWADI INDUSTRIAL AREA- BHIWADI",
        "WELL AT VILLAGE GATTAL- NEAR-BHIWADI TO BHIWADI INDUSTRIAL AREA- BHIWADI",
        "HAND PUMP NEAR SECONDARY SCHOOL ABOUT 300mt.FROM KANSUA NALLAH KOTA",
        "CHAUDHARY KA WELL VILLAGEPANIALA- KOTAPUTALI NEAR ASSOCIATED ALCOHOL BREVERIES LTD JAIPUR",
        "PHED WELL NEAR RAILWAY LINE JHOTAWARA- JAIPUR",
        "PHED WELL NEAR NEI- KHATIPURA",
        "HAND PUMP OF VIDHANI VILLAGEGONER ROAD JAIPUR",
        "WELL OF GOOJARON KI TALAI-MOHANA ROAD SANGANER JAIPUR",
        "PUBLIC HAND PUMP BEFORESANGANER PULIA",
        "PABUPURA ROAD NEAR CIVIL AIRPORT- JODHPUR (MANGILAL RATHOR)",
        "VILLAGE VINAYAKIA- JODHPUR(HIRALAL KUMHAR)",
        "VILLAGE VINAYAKIA- JODHPUR (BADRIKUMHAR)",
        "VILLAGE VINAYAKIA- JODHPUR(HUKUM SINGH RATHORE)",
        "NEAR UIT BRIDGE- UDAIPUR",
        "NEW FATEHPURA- 200 FT.FROMPANCHWATI NALLAH- UDAIPUR",
        "NEAR ARVIND GENERAL STORE- ALOO FACTORY- KACCHI BASTI- SARDARPURA- UDAIPUR",
        "NEAR RANA PRATAP NAGAR- RAILWAYSTATION- UDAIPUR",
        "HOTEL ORIENT PLACE- SUBHAS NAGAR- UDAIPUR",
        "IN SIDE SHIV TEMPLE NEAR AIRFORCE STATION AMER ROAD- JAIPUR",
        "NEAR SHREE KALYANESHWAR MAHADEV TEMPLE- JAI SINGH PURA KHURD- JAIPUR",
        "NEAR FOJI NAGAR- KACCHI BASTI-AMBABARI- JAIPUR",
        "NEAR ABN CENTRAL ACADEMY- SUSILPURA- SODALA- JAIPUR",
        "NEAR SAMSHAN VISHWAKARMANAGAR- MAHARANIFARM- JAIPUR",
        "NEAR GANDHI BHWAN- AJMER",
        "OPPOSITE PRIVATE BUS STAND- AJMER",
        "NEAR 9 NO.PETROL PUMP- NEARADARSH NAGAR GATE- AJMER",
        "NEAR KHANPURA TALAB- AJMER",
        "OUTSIDE JLN HOSPITAL- AJMER"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            30,
            22,
            23,
            23,
            24,
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25,
            25,
            25,
            23,
            28,
            31,
            28,
            27
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Rajasthan'
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
            labelString: "Zones in Rajasthan"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartUP = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "RICE",
        "WHEAT",
        "SUGARCANE",
        "CHICKPEA",
        "PIGEON PEA",
        "LENTIL",
        "FIELD PEA",
        "MUSTARD",
        "POTATO"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            24,
            22,
            21,
            25,
            30,
            30,
            27,
            31,
            25
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            0.5,
            0.8,
            0.8,
            0,
            0.3,
            0.4,
            0.45,
            0.35,
            0,
            0,
            0,
            1,
            0.8,
            2.2,
            3,
            1.6,
            1.4,
            1.6,
            2.1,
            1.1,
            1,
            1,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Uttar Pradesh'
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
            labelString: "Zones in uttar pradesh"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartOrrisa = {

  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Orissa'
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
            labelString: "Zones in Orissa"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartBihar = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "PATNA",
        "PATNA",
        "PATNA",
        "PATNA",
        "PATNA",
        "MUZAFFARPUR",
        "MUZAFFARPUR",
        "BEGUSARAI",
        "BEGUSARAI",
        "PURNEA",
        "PURNEA",
        "BEGUSARAI",
        "BEGUSARAI",
        "MUNGER",
        "MUNGER",
        "MOTIHARI",
        "GAYA",
        "GAYA-",
        "RAJGIR",
        "CHAPRA"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            25,
            24,
            25,
            24,
            23,
            26,
            26,
            23,
            23,
            25,
            25,
            23,
            24,
            24,
            24,
            25,
            25,
            26,
            27,
            26
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.1,
            7,
            7.4,
            8,
            7.1,
            7,
            7.3,
            7.3,
            7.6,
            7.6,
            7.6,
            7.5,
            7.4,
            7.6,
            7.2,
            7.4,
            7.7,
            7.6,
            7.8,
            7.2,
            7.8,
            7.8,
            7.5
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.5,
            7.6,
            7.5,
            7.9,
            7.6,
            8,
            8.1,
            8.2,
            8.4,
            7.8,
            7.9,
            7.7,
            7.6,
            8.8,
            8,
            8.1,
            8.2,
            7.7
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Bihar'
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
          },
          scaleLabel: {
            display: true,
            labelString: " "
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
            drawTicks: true,
            display: true,
            drawBorder: true
          },
          scaleLabel: {
            display: true,
            labelString: "Zones in bihar"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};
const dashboard24HoursPerformanceChartWB = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#062e04", 0.6));
    return {
      labels: [
        "MINE PIT WATER ASSANSOL- WESTBENGAL",
        "DURGAPUR TOWN-NEAR IISCO-BURDWAN- WEST BENGAL",
        "DURGAPUR TOWN- BURDWAN- WESTBENGAL",
        "INSIDE HINDUSTAN LIVER FACTORY-HALDIA- WEST BENGAL",
        "NEAR IOC REFINERY HALDIA- WESTBENGAL",
        "KALYANI INDUSTRIAL AREA- NADIA-WEST BENGAL",
        "BARSAT MUNICIPALITY NORTH 24-P-WEST BENGAL",
        "TANGRA- CALCUTTA -WEST BENGAL",
        "TOPSIA CALCUTTA- WEST BENGAL",
        "DHAPA CALCUTTA- WEST BENGAL",
        "GARIA CALCUTTA- WEST BENGAL",
        "BEHALA CALCUTTA- WEST BENGAL",
        "DOMJUR HOWRAH- WEST BENGAL",
        "DANKUNI (NEAR COAL COMPLEX)- WEST BENGAL",
        "COSSIPORE - NORTH KOLKATA",
        "CENTRAL KOLKATA",
        "NEAR GALVANISATION UNIT- HOWRAH",
        "CENTRAL HOWRAH-RESIDENTAILAREA",
        "INSIDE KOLKATA LEATHER COMPLEX",
        "RESIDENTIAL AREA - SONARPUR",
        "RAJARHAT - NEW TOWNSHIP",
        "BSIRHAT MUNICIPALITY",
        "BARRAKPORE MUNICIPALITY",
        "NEAR THE PHOSPHATE COMPANY-RISHRA",
        "NEAR FLY ASH DUMPING SITE-KUNTIGHAT- BANDEL",
        "NEAR EXIDE INDUSTRIES-HALDIA",
        "INSIDE TATA METALIKS- KHARAGPUR",
        "KHARAGPUR INDUSTRIAL AREA",
        "ENGLISH BAZAR- MALDAH"
      ],
      datasets: [
        {
          label: "Major Crops",
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

          data: [
            32,
            33,
            31,
            32,
            33,
            28,
            28,
            30,
            28,
            29,
            28,
            30,
            28,
            29,
            29,
            28,
            28,
            28,
            29,
            25,
            28,
            30,
            28,
            30,
            28,
            32,
            31,
            30,
            29
          ]
        }
        /*{
          label: "pH",
          type: "line",
          borderColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            7.7,
            8.3,
            7.6,
            7.3,
            7.4,
            7.5,
            7.8,
            7.5,
            7.7,
            7.9,
            7.8,
            8,
            8.1,
            7.6,
            7.4,
            8,
            8,
            7.8,
            7.9,
            8,
            8,
            7.7,
            8.5,
            7.9,
            7.6,
            7.6,
            7.4,
            7.8,
            7.5,
            8
          ]
        },
        {
          label: "B.O.D",
          type: "line",
          borderColor: "#800000",
          pointBorderColor: "#800000",
          pointBackgroundColor: "#800000",
          pointHoverBackgroundColor: "#800000",
          pointHoverBorderColor: "#800000",
          backgroundColor: gradientFill,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          fill: true,
          borderWidth: 1,

          data: [
            2.1,
            0.6,
            0.1,
            0.7,
            0.6,
            0.8,
            0.6,
            1.1,
            0.7,
            1.3,
            0.8,
            1.1,
            0.9,
            0.7,
            1.5,
            1.5,
            1.3,
            1.4,
            0.8,
            1.2,
            1.3,
            0.5,
            0.2,
            0.8,
            0.8,
            0.7,
            1.4,
            0.9,
            0.9
          ]
        }*/
      ]
    };
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'West Bengal'
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
          },
          scaleLabel: {
            display: true,
            labelString: " "
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
            drawTicks: true,
            display: true,
            drawBorder: true
          },
          scaleLabel: {
            display: true,
            labelString: "Zones in west bengal"
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};

module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
  getChartCholera,
  getChartD,
  getChartT,
  // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart, // Chart for Dashboard view - 24 Hours Performance Card
  dashboard24HoursPerformanceChartKerala,
  dashboard24HoursPerformanceChartBihar,
  dashboard24HoursPerformanceChartChattisgarh,
  dashboard24HoursPerformanceChartPunjab,
  dashboard24HoursPerformanceChartTripura,
  dashboard24HoursPerformanceChartMaharastra,
  dashboard24HoursPerformanceChartRajasthan,
  dashboard24HoursPerformanceChartManipur,
  dashboard24HoursPerformanceChartAssam,
  dashboard24HoursPerformanceChartWB,
  dashboard24HoursPerformanceChartOrrisa,
  dashboard24HoursPerformanceChartUP,
  dashboard24HoursPerformanceChartHP,
  dashboard24HoursPerformanceChartMP,
  dashboard24HoursPerformanceChartGujarat,
  dashboard24HoursPerformanceChartTN,
  dashboard24HoursPerformanceChartMizoram,
  dashboard24HoursPerformanceChartJK,
  dashboard24HoursPerformanceChartSikkim,
  dashboard24HoursPerformanceChartNagaland,
  dashboard24HoursPerformanceChartKarnatka,
  dashboard24HoursPerformanceChartJharkhand,
  dashboard24HoursPerformanceChartUttrakhand,
  dashboard24HoursPerformanceChartHaryana,
  dashboard24HoursPerformanceChartArunachal,
  dashboard24HoursPerformanceChartMeghalaya,

};
