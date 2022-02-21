import { makeAutoObservable } from 'mobx';

export type TableProps = Array<{
    work_order_id: number;
    description: string;
    received_date: string;
    assigned_to: Array<{
        person_name: string;
        status: string;
    }>;
    status: string;
    priority: string;
}>;

export class TableStorage {

    searchBy = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSearchBy = (value: string) => {
        this.searchBy = value;
    };
}