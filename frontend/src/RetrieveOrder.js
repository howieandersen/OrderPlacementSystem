import React, { Component } from "react";
import { variables } from './Variables.js'

export class RetrieveOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }
    async refreshList() {
        const response = await fetch("http://localhost:10319/api/Orders", {});
        const data = await response.json();
        this.setState({ orders: data, loading: false });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const {
            orders
        } = this.state;

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                orderServiceType
                            </th>
                            <th>
                                serviceDate
                            </th>
                            <th>
                                name
                            </th>
                            <th>
                                phoneNumber
                            </th>
                            <th>
                                email
                            </th>
                            <th>
                                oldAddress
                            </th>
                            <th>
                                newAddress
                            </th>
                            <th>
                                additionalNote
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(orders =>
                            <tr key={orders.id}>
                                <td>{orders.orderServiceType}</td>
                                <td>{orders.serviceDate}</td>
                                <td>{orders.name}</td>
                                <td>{orders.phoneNumber}</td>
                                <td>{orders.email}</td>
                                <td>{orders.oldAddress}</td>
                                <td>{orders.newAddress}</td>
                                <td>{orders.additionalNote}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="btn btn-light mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
        )
    }
}