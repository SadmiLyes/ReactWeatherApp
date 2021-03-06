import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";
const average = (data) => (_.round(_.sum(data)/data.length));
export default (props) => {
    return (
        <div>
            <Sparklines
                height={200} width={300}
                svgHeight={200} svgWidth={300} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} <b>{props.units}</b></div>
        </div>
    );
};