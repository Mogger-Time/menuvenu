import React from 'react';
import { apiCall } from '../helpers/helpers';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function KitchenOrders() {
    const [orders, setOrders] = React.useState([]);

    const getOrders = async () => {
        const data = await apiCall("orders/get_order_list", "GET", {});
        console.log(data.order_list);
        setOrders(data.order_list);
    }

    React.useEffect(() => {
        const interval = setInterval(getOrders, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{border: "1px solid black", borderRadius: "15px", margin: "10px", padding: "10px"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order item request</TableCell>
                        <TableCell>Table #</TableCell>
                        <TableCell>Time since order</TableCell>
                        <TableCell>Ready?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((ordered_item) => <TableRow>
                        <TableCell>{ordered_item.item_name}</TableCell>
                        <TableCell>{ordered_item.table_number}</TableCell>
                        <TableCell>{ordered_item.order_time}</TableCell>
                        <TableCell>
                            <Button variant='text' onClick={async () => {
                                const body = {
                                    'ordered_item_id': ordered_item.ordered_item_id
                                }
                                const data = await apiCall("orders/kitchen/prepared", "POST", body);
                                if (data.status !== 200) {
                                    console.log("OH NO");
                                }
                                await getOrders();
                            }}>YES</Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </Box>
    )
}

export default KitchenOrders;