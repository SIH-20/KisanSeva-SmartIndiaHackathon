import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
const data = [
    { name: 'Rice', value: 40},
    { name: 'Wheat', value: 48},
    { name: 'Raggi', value: 31 },
    { name: 'Maize', value: 35 },
    { name: 'Cabbage', value: 43 },
    { name: 'Lentils', value: 36 },
    { name: 'Gram', value: 45 },
    { name: 'Peas', value: 33 },
    { name: 'Chillies', value: 44 },
    { name: 'Potatoes', value: 47 },
  ];
  
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}%`}</text>
        
      </g>
    );
  };
  
  
  export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';
  
    state = {
      activeIndex: 0,
    };
  
    onPieEnter = (data, index) => {
      this.setState({
        activeIndex: index,
      });
    };
  
    render() {
      return (
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#008000"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      );
    }
  }
  