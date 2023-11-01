'use client';

// public
import { useSelector } from 'react-redux';

//* components
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from '@nextui-org/table';
import PercentBadge from '@/components/ui/PercentBadge';



const TimeFramePercentageTable = ({ data }) => {

    const targetCurrency = useSelector(state => state.options.targetCurrency.code);
    const {
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
        price_change_percentage_14d_in_currency,
        price_change_percentage_30d_in_currency,
        price_change_percentage_1y_in_currency
    } = data.market_data || {};



    return (
        <Table radius='sm' classNames={{
            wrapper: 'bg-background',
            thead: 'text-foreground bg-default-100',
        }}>

            <TableHeader>
                <TableColumn>1h</TableColumn>
                <TableColumn>24h</TableColumn>
                <TableColumn>7d</TableColumn>
                <TableColumn>14d</TableColumn>
                <TableColumn>30d</TableColumn>
                <TableColumn>1y</TableColumn>
            </TableHeader>

            <TableBody>
                <TableRow key='1'>
                    <TableCell>
                        <PercentBadge customVariant='light'>
                            {price_change_percentage_1h_in_currency?.[targetCurrency]?.toFixed(1)??0}
                        </PercentBadge>
                    </TableCell>

                    <TableCell>
                        <PercentBadge customVariant='light'>
                            {price_change_percentage_24h_in_currency?.[targetCurrency]?.toFixed(1)??0}
                        </PercentBadge>
                    </TableCell>

                    <TableCell>
                        <PercentBadge customVariant='light'>
                            {price_change_percentage_7d_in_currency?.[targetCurrency]?.toFixed(1)??0}
                        </PercentBadge>
                    </TableCell>

                    <TableCell>
                        <PercentBadge customVariant='light'>
                            {price_change_percentage_14d_in_currency?.[targetCurrency]?.toFixed(1)??0}
                        </PercentBadge>
                    </TableCell>

                    <TableCell>
                        <PercentBadge customVariant='light'>
                            {price_change_percentage_30d_in_currency?.[targetCurrency]?.toFixed(1)??0}
                        </PercentBadge>
                    </TableCell>

                    <TableCell>
                        <PercentBadge customVariant='light'>
                            {price_change_percentage_1y_in_currency?.[targetCurrency]?.toFixed(1)??0}
                        </PercentBadge>
                    </TableCell>
                </TableRow>
            </TableBody>

        </Table>
    );
};

export default TimeFramePercentageTable;