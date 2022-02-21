import { useState } from 'react';
import './App.scss';
import { AppStorage } from '../../Storage';
import { Table } from '../../Components';
import { observer } from 'mobx-react';

export const App = observer(() => {

    const [storage] = useState(new AppStorage());

    return (
        <div className="app">
            <h1>Friendly Solutions - code task</h1>
            <Table
                isSearchInput={true}
                data={storage.apiData}
            />
        </div>
    );
});