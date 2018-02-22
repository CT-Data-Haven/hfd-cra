import React from 'react';
import { Grid } from 'semantic-ui-react';

import { componentFromProp } from 'recompose';

import '../styles/Dashboard.css';

const ChartComponent = componentFromProp('component');

const Dashboard = ({ charts }) => (
    <div className="Dashboard">
        <Grid stackable >
            { charts && charts.map((chart, i) => (
                <ChartComponent {...chart} key={i} />
            ))}
        </Grid>
    </div>
);

export default Dashboard;
