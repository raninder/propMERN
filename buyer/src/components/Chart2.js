
import React from 'react';
import 'chartjs-plugin-datalabels';
import { PieChart, Pie, Legend, Cell,Label,ResponsiveContainer } from 'recharts';
import '../styles/chart.css'

const Chart = () => {
	const data = [
		{ name: 'Mortgage', amount: 630, color:'blueviolet' },
		{ name: 'Co-owner', amount: 303, color:'green' },
		{ name: 'Municipal Taxes', amount: 200, color:'black' },
		{ name: 'School Taxes', amount: 303,color:'brown' }
	];

const COLORS = ['blueviolet', 'green', 'black', 'brown'];
// const renderLegend = (props) => {
//   const { payload } = props;
// console.log("payload",payload);
//   return (
//     // <div style={{display: 'grid', gridTemplateColumns: 'max-content max-content', gap: '1em'}}>
//     <div className="legend">  
// 			<table className="chart-table">
// 		{		
				
//         payload.map((entry, index) => (
//          <tr>
// 					 <td>{entry.name}</td>
// 					 <td>{entry.amount}</td>
// 					</tr>
//         ))
//       }
// 			</table>
//     </div>
//   );
// }

	return ( 
		<div className="piechart">
			<div className="chart">
			{/* <ResponsiveContainer width="100%" height={220}> */}
				<PieChart width={200} height={300}>
		
					<Legend 
					layout="vertical" 
					verticalAlign="bottom"
					// payload={data}
					
					// useHTML= 'true'
					payload={
						data.map(
							(item,index) => ({
								
								id: item.name,
								color:item.color,
								value: `${item.name} ${item.amount}` ,
	
							})
						)
					}
				
					/>
				
					<Pie
							data={data} 
							cx={80} 
							cy={80} 
							innerRadius={40}
							outerRadius={60} 
							// fill="#8884d8"
							// paddingAngle={1}
							dataKey="amount"
					>
					{
						data.map((entry, index) => <Cell fill={entry.color}/>)
						// data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
					}
			
						</Pie>
				
				</PieChart>
			
			</div>
			<div className="chartvalue">
				<h1> $1533</h1>
				<h6>/monthly</h6>
			</div>

		</div>
	);
}

export default Chart;