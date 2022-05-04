import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import getInvoices from './Data';

function Projects() {
    const invoices = getInvoices();
    return(
        <div>
            <h1>Projects</h1>
            <ul>
                {invoices.map((invoice) => (
                    <li><Link to={`/projects/${invoice.id}`}>{invoice.id}</Link></li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default Projects;