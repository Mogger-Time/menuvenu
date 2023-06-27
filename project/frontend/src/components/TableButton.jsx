import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function TableButton ({ table }) {
    const greenboxcss = { display: 'inline-block', width: '20%', padding: '10px', border: '1px black solid', margin: '10px', height: '50px', verticalAlign: 'top', backgroundColor: "green" };
    
    // const redboxcss = { display: 'inline-block', width: '20%', padding: '10px', border: '1px black solid', margin: '10px', height: '50px', verticalAlign: 'top', backgroundColor: "red" };
    // const is_occupied = table.occupied;
    // const nav = useNavigate();

    // function gotoMenu() {
    //     nav('/menu');
    // }

    // return (
    //     <>
    //     {is_occupied ? <Box component={Button} disabled sx={redboxcss}>Table {table.table_id}</Box> : <Box component={Button} onClick={gotoMenu} sx={greenboxcss}>Table {table.table_id}</Box>}
    //     </>

    return (
        <Box component={Button} sx={greenboxcss}>Table {table.table_id}</Box>
    )
}

export default TableButton;