import React from "react";
import { Grid } from "./Grid";
import { Topbar } from "../Topbar/Topbar";

export const Dashboard = () => {
    return (
        <div className="bg-white rounded-lg pb-4 shadow">
            <Topbar />
            <Grid />
        </div>
    )
}