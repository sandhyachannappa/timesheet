import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppProfile } from './AppProfile';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';
import { AdduserComponent } from './components/users/add.user.component';
import { AssignUserComponent } from './components/users/assign.user.component';
import { UserListComponent } from './components/users/list.user.component';
import { AddUserRoleComponent } from './components/users/add.user.role.component';
import { AddTaskComponent } from './components/tasks/add.task.component';
import { UserTaskComponent } from './components/tasks/user.task.component';
import { TimesheetReportComponent } from './components/reports/timesheet.report.component';
import { AddClientComponent } from './components/client/add.client.component';
import {Clients} from './components/client/clients';
import { ThemeContext } from '././components/ThemeContext';
//import { index } from '././components/test.component'

//const [ stateVariable, setStateVariable ] = useState('default value')

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };
        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    componentDidMount(){
     
    }
  
    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }

        event.preventDefault();
    }

// Test react hooks //
           

    
// Test react hooks //

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if (!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => { window.location = '#/' } },
            { label: 'User', icon: 'pi pi-fw pi-users', command: () => { window.location = '#/user/list' } },
            { label: 'Assign User', icon: 'pi pi-fw pi-user-plus', command: () => { window.location = '#/user/assign' } },
            // { label: 'Add User', icon: 'pi pi-fw pi-user-plus', command: () => { window.location = '#/user/add' } },
           // { label: 'index', icon: 'pi pi-fw pi-clock', command: () => { window.location = '#/index' } },
            { label: 'Add User Role', icon: 'pi pi-fw pi-th-large', command: () => { window.location = '#/user/add/role' } },
            { label: 'Client', icon: 'pi pi-fw pi-cog', command: () => { window.location = '#/client/client' } },
            { label: 'Clients', icon: 'pi pi-fw pi-cog', command: () => { window.location = '#/client/clients' } },
            { label: 'Create Task', icon: 'pi pi-fw pi-list', command: () => { window.location = '#/task/add' } },
            { label: 'User Tasks', icon: 'pi pi-fw pi-clock', command: () => { window.location = '#/task/user' } },
            { label: 'Timesheet Report', icon: 'pi pi-fw pi-eye', command: () => { window.location = '#/reports/timesheet' } }
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {


        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        const sidebarClassName = classNames("layout-sidebar", {
            'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
            'layout-sidebar-light': this.state.layoutColorMode === 'light'
        });

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu} /> 
                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
                    <div className="layout-logo">
                        <h1>TimeSheet</h1>
                    </div>
                    <AppProfile />
                    <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                </div> 
                <div className="layout-main">
                    <ThemeContext.Provider value="Testing">
                    {/* <Route path="/index" exact component={index} /> */}
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/user/list" exact component={UserListComponent} />
                        <Route path="/user/add" exact component={AdduserComponent} />
                        <Route path="/user/add/role" exact component={AddUserRoleComponent} />
                        <Route path="/user/assign" exact component={AssignUserComponent} />
                        <Route path="/client/client" exact component={AddClientComponent} />
                        <Route path="/task/add" exact component={AddTaskComponent} />
                        <Route path="/task/user" exact component={UserTaskComponent} />
                        <Route path="/reports/timesheet" exact component={TimesheetReportComponent} />
                        <Route path="/client/clients" exact component={Clients} />
                    </ThemeContext.Provider>
                </div>
                <AppFooter />
                <div className="layout-mask"></div>
            </div>
        );
    }
}

export default App;
