import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

function useActivity() {
    const url = "https://www.boredapi.com/api/activity";
    const fetcher = (url: string) => axios.get(url).then(res => res.data);
    const { data, error } = useSWR(url, fetcher);

    return {data, error};
}


function Users() {
    const { data, error } = useActivity();

    return(
        <div>
            <h1>Users</h1>
            {error && <h2>Error</h2>}
            {!data && <h2>Loading</h2>}
            {data && 
            <div>
                <h2>Loaded</h2>
                <h3>Activity: {data.activity}</h3>
                <h3>Price: {data.price}</h3>
                <h3>Type: {data.type}</h3>
            </div>}
        </div>
    );
}

export default Users;