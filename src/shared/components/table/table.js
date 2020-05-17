import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Obj } from 'reinforcements';
import TableToolBar from './table-toolbar';
import { trans } from 'core/localization';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
    const classes = useStyles();

    let { options, records } = props;

    let tableHeading = options.columns.map(column => {
        return <TableCell key={column.heading}>{column.heading}</TableCell>;
    });

    let tableRows = records.map((record, recordIndex) => {
        return <TableRow key={record.id}>
            {options.columns.map(column => {
                if (column.buttons) {
                    return <TableCell key={column.heading}>
                        {column.buttons.map((ActionButton, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ActionButton />
                                </React.Fragment>
                            )
                        })}
                    </TableCell>
                }
                return <TableCell key={column.heading}>
                    {Obj.get(record, column.key)}
                </TableCell>
            })}

        </TableRow>;
    });

    return (
        <>
            <TableToolBar text={trans(options.heading)} />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {tableHeading}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}