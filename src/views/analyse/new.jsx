import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';
import Pie from "../TableList/pie.jsx";
import Pie2 from "../TableList/pie2.jsx";
const Customerdata = [
  {
    name: '1st Day', customers:400
  },
  {
    name: '5th Day', customers: 300
  },
  {
    name: '10th Day', customers: 600
  },
  {
    name: '15th Day', customers: 800
  },
  {
    name: '20th Day', customers: 400
  },
  {
    name: '25th Day', customers: 348
  },
  {
    name: '30th Day', customers: 457
  },
];
const salesData = [
    {
      name: '1st Day', sales:4000
    },
    {
      name: '5th Day', sales: 5000
    },
    {
      name: '10th Day', sales: 2000
    },
    {
      name: '15th Day', sales: 2780
    },
    {
      name: '20th Day', sales: 4329
    },
    {
      name: '25th Day', sales: 5679
    },
    {
      name: '30th Day', sales: 3490
    },
  ]
export default class Example extends Component{

  render() {
    return (
      <div>
   <aside  style={{display:"inline-block",width:"50%",verticalAlign:"top"}}>
   <LineChart
          width={500}
          height={200}
          data={Customerdata}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="customers" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
         <h6 style={{marginBottom:"2%",marginTop:"8px",marginLeft:"30%"}}>Customer Acquasition</h6>
        <AreaChart
          width={500}
          height={200}
          data={salesData}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <h6 style={{marginBottom:"2%",marginTop:"22px",marginLeft:"38%"}}>Sales Graph</h6>
   </aside>

       <aside style={{display:"inline-block",width:"50%",verticalAlign:"top",height:"33rem"}}>

      <div style={{position:"relative",top:"-127px"}}>
      <Pie/>
      <h6 style={{marginTop:"-73px",marginLeft:"25.2%"}}>Production Share</h6>
      </div>
      <div style={{position:"relative",top:"-218px"}}>
      <Pie2/>
      <h6 style={{marginTop:"-73px",marginLeft:"31.2%"}}>Sales Share</h6>
      </div>

       </aside>
      </div>
    );
  }
}
