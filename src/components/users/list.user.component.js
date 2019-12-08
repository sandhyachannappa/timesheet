import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UserService } from '../../service/user.service';
import { Button } from 'primereact/button';
import { Route } from 'react-router-dom';
//import {BreadCrumb} from 'primereact/breadcrumb';
export class UserListComponent extends Component {
    constructor() {
        super();
        this.state = {
            users: [],           
            navigate: false
        }
        this.userservice = new UserService();
    }

    componentDidMount() {
        // load data from service
        this.userservice.getUsers().then(data => this.setState({ users: data }));
    }

    render() {
        const { navigate } = this.state
        if (navigate) {
            return <Route path="/user/add" exact component={window.location = '#/user/add'} />
        }
        return (
            <div className="userlistcomponent">
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">
                        <div className="card card-w-title">
                            <div>
                                <div className="p-grid">
                                    <div className="p-md-12">
                                        <h1>Users </h1>
                                    </div>
                                    <div className="p-md-6">
                                        <div className="p-md-3">
                                            <div className="mt-auto p-2">
                                                <Button label="Add" icon="pi pi-plus" className="p-button-success" onClick={() => this.setState({ navigate: true })} />                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-12">
                                    <DataTable value={this.state.users} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}>
                                        <Column field="username" header="Username" sortable={true} />
                                        <Column field="email" header="Email" sortable={true} />
                                        <Column field="mobile" header="Mobile" sortable={true} />
                                    </DataTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}