import React, { Component } from "react";
import { variables } from './Variables.js'

export class RetrieveOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: [],

            modalTitle: "",
            OrderId: "",
            OrderType: "",
            OrderDate: "",
            OrderName: "",
            OrderPhone: 0,
            OrderEmail: "",
            OrderOldAddress: "",
            OrderNewAddress: "",
            OrderNote: ""
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

    changeOrderType = (e) => {
        this.setState({ OrderType: e.target.value })
    }

    addClick() {
        this.setState({
            modalTitle: "Add Order",
            OrderId: 0,
            orderType: "",
            OrderDate: "",
            OrderName: "",
            OrderPhone: 0,
            OrderEmail: "",
            OrderOldAddress: "",
            OrderNewAddress: "",
            OrderNote: ""
        });
    }


    editClick(order) {
        this.setState({
            modalTitle: "Edit Order",
            OrderId: order.OrderId,
            orderType: order.orderType,
            OrderDate: order.OrderDate,
            OrderName: order.OrderName,
            OrderPhone: order.OrderPhone,
            OrderEmail: order.OrderEmail,
            OrderOldAddress: order.OrderOldAddress,
            OrderNewAddress: order.OrderNewAddress,
            OrderNote: order.OrderNote
        });
    }

    //To be implemented as onClick method for the Add Order button 
    //BLOCKED BY MODAL POPUP ISSUE
    createClick() {
        fetch("http://localhost:10319/api/Orders", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                OrderId: this.state.OrderId,
                OrderType: this.state.OrderType,
                OrderDate: this.state.OrderDate,
                OrderName: this.state.OrderName,
                OrderPhone: this.state.OrderPhone,
                OrderEmail: this.state.OrderEmail,
                OrderOldAddress: this.state.OrderOldAddress,
                OrderNewAddress: this.state.OrderNewAddress,
                OrderNote: this.state.OrderNote
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    //To be implemented as onClick method for the update Order button in the Edit modal popup 
    //BLOCKED BY MODAL POPUP ISSUE
    updateClick() {
        fetch("http://localhost:10319/api/Orders", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                OrderId: this.state.OrderId,
                OrderType: this.state.OrderType,
                OrderDate: this.state.OrderDate,
                OrderName: this.state.OrderName,
                OrderPhone: this.state.OrderPhone,
                OrderEmail: this.state.OrderEmail,
                OrderOldAddress: this.state.OrderOldAddress,
                OrderNewAddress: this.state.OrderNewAddress,
                OrderNote: this.state.OrderNote
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    //To be implemented as onClick method for the delete button 
    //BLOCKED BY CORS ISSUE
    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch("http://localhost:10319/api/Orders" + this.state.OrderId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
    }

    //To be used when cl
    generateGUID() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    render() {
        const {
            orders,

            modalTitle,

            OrderId,
            OrderType,
            OrderDate,
            OrderName,
            OrderPhone,
            OrderEmail,
            OrderOldAddress,
            OrderNewAddress
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
                        {orders.map(order =>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderServiceType}</td>
                                <td>{order.serviceDate}</td>
                                <td>{order.name}</td>
                                <td>{order.phoneNumber}</td>
                                <td>{order.email}</td>
                                <td>{order.oldAddress}</td>
                                <td>{order.newAddress}</td>
                                <td>{order.additionalNote}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.editClick(order)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="btn btn-light mr-1" onClick={() => this.deleteClick(order.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <button type="button" className="btn btn-primary m2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.addClick()}>
                    Add Order
                </button>

                {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">OrderServiceType</span>
                                    <input type="text" className="form-control">
                                        value={OrderType}
                                        onChange={this.changeOrderType}
                                    </input>
                                </div>

                                {OrderId == 0 ?
                                    <button type="button" className="btn btn-primary float-start">
                                        Create
                                    </button>
                                    : null}

                                {OrderId != 0 ?
                                    <button type="button" className="btn btn-primary float-start">
                                        Update
                                    </button>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
        )
    }
}