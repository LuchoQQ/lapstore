import React from 'react';
import { User } from '../../types';
import Table from './Table';

type Props = {
    data: User[];
};

const BackofficeCustomers: React.FC<Props> = ({data}) => {
    return (
        <>
            <Table users={data} />
        </>
    );
};

export default BackofficeCustomers;