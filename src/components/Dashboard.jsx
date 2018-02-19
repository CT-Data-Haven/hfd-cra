import React from 'react';
import { Grid } from 'semantic-ui-react';

import { componentFromProp } from 'recompose';

import meta from './charts';
import '../styles/Dashboard.css';

const ChartComponent = componentFromProp('component');

const Dashboard = ({ charts }) => (
    <div className="Dashboard">
        <Grid stackable >
            { meta.childhood && meta.childhood.map((chart, i) => (
                <ChartComponent {...chart} key={i} />
            ))}
        </Grid>
    </div>
);

export default Dashboard;
