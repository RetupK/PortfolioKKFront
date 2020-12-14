import React from "react";
import { Bar, ChartProgress, Value, Span } from "./Progressbar.css";

const Progressbar = ({ label, value }) => {
    return (
        <>
            <Span>{label}</Span>
            <Bar>
                <ChartProgress value={value}>
                    <Value>{value}</Value>
                </ChartProgress>
            </Bar>
        </>
    )
}

export default Progressbar;