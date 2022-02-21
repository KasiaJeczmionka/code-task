import { observer } from 'mobx-react';
import { useState } from 'react';
import './Table.scss';
import { type TableProps, TableStorage } from "../../Storage";
import { Input } from '../Input';

type Props = {
    isSearchInput?: boolean;
    data: TableProps;
}

export const Table = observer((props: Props) => {
    const [storage] = useState(new TableStorage());

    const input = props.isSearchInput ? (
        <Input
            name="Search by description"
            placeHolder="Write here"
            value={storage.searchBy}
            onChange={storage.setSearchBy}
        />
    ) : null;

    const assigned = (
        assigned: Array<{
            person_name: string;
            status: string;
        }>) => assigned.map(item => (
        <div key={`assigned-to-${item.person_name}`}>
            {item.person_name}
            {item.status}
        </div>
    ));

    const tableData = props.data.map(item => 
        item.description.toLowerCase().includes(storage.searchBy.toLowerCase()) 
        ? (
            <tr key={`table-row-${item.work_order_id}`}>
                <td>{item.work_order_id}</td>
                <td>{item.description}</td>
                <td>{item.received_date}</td>
                <td>{assigned(item.assigned_to)} </td>
                <td>{item.status}</td>
                <td>{item.priority}</td>
            </tr>
        )
        : null
    ); 

    return (
        <div className="table">
            {input}
            <table className="table-content">
                <thead className="table-content-header">
                    <tr>
                        <th>WO ID</th>
                        <th>Description</th>
                        <th>Received date</th>
                        <th>Assigned to</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody className="table-content-data">
                    {tableData}
                </tbody>
            </table>
        </div>
        
    );
});