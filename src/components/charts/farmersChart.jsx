import React  from 'react';
import "./style.css";
// const Component = React.Component;
const CanvasJSReact = require('../../canvasjs.react');
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const FarmerChart=(props)=> {
	
		const options = {
			exportEnabled: false,
			animationEnabled: true,
			data: [{
				type: "pie",
				radius:"60%",
				visible:true,
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: false,
				indexLabelFontSize: 14,
				indexLabelFontStyle: "italic",
				indexLabelFontFamily: "calibri",
				indexLabel: "{label} - {y}%",
				dataPoints: props.data
			}]
		}
		return (
	
			<CanvasJSChart options = {options}	/>
		
		);
	
}
export default FarmerChart;                              