
import React from 'react';
// import { PieChart, Pie } from 'recharts';
import 'chartjs-plugin-datalabels';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const Chart = () => {
	const data = [
		{ name: 'Mortgage', amount: 630 },
		{ name: 'Co-owner', amount: 303 },
		{ name: 'Municipal Taxes', amount: 200 },
		{ name: 'School Taxes', amount: 303 }
];

const COLORS = ['blueviolet', 'green', 'black', 'brown'];

	return ( 
		<div className="piechart">
			<div className="chart">
		<PieChart width={300} height={300}>
	
		<Legend layout="vertical" verticalAlign="bottom"/>
		<Pie
					
          data={data} 
          cx={80} 
          cy={80} 
          innerRadius={40}
          outerRadius={60} 
          fill="#8884d8"
          // paddingAngle={1}
					dataKey="amount"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
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