import React from 'react';
import { useState } from 'react';
import { Button } from 'primereact/button';
// import { Dialog} from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

function NewClient({addClient}) {
    const[clientData,setClientData]=useState([{name:""}])
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

  
    const handleInputChange = event => {
        setClientData({...clientData,[event.target.nama]:event.target.value})       
        
    };

    const onSubmit=event=>{
        event.preventDefault();
        console.log("event",event.target);
        console.log("clientData.name",clientData.name);
        if(!clientData.name) return
        const newClient={
            name:clientData.name
        };
        addClient(newClient)
        setIsShown(!isShown);
    }

    return (
        <div className="clients">
        <div align="right">
            <Button type="submit" label="New Client" icon="pi pi-plus" iconPos="left" className="p-button-rounded right" onClick={show} />
        </div>
        
            {isShown &&  
                // <Dialog header="New Client" visible={isShown} style={{ width: '50vw' }} 
                // footer={ <Button type ="submit" label="Create" onClick={(e)=>onSubmit(e)}/>} onHide={hide} >  
                <form onSubmit={onSubmit}>
                    <InputText type="text" name="name" value={clientData.name} onChange={handleInputChange} />
                    </form>
                // </Dialog>
                
                
            }
        
    <div>
    
    </div>
    </div>
    );
}

export function Clients() {
    const [data, setData] = useState([
        {name:""}
    ]);
   

   
    const addClient = text => {
        const newClient = [...data, { text }];
        setData(newClient);
        console.log("map::",data.name)
      };
    
    return (
        <div className="clients">
          <NewClient addClient={addClient}/>
        </div>
    )
}




// export class Clients extends Component {
//     constructor() {
//         super()
//         this.state = {
//             visible: false,
//             value: '',
//             edit:'false',
//             clientDetails:[],
//             displayValue:false,
//             icons:[{label:'edit',icon:'pi pi-fw pi-pencil',command:()=>{ this.editClient()}},
//                     {label:'delete',icon:'pi pi-fw pi-user-minus',command:()=>{ this.deleteClient()}}],
//              action:false
//         };
//         this.onClick = this.onClick.bind(this);
//         this.onHide = this.onHide.bind(this);
//         this.enterClientName = this.enterClientName.bind(this);
//         this.editClient = this.editClient.bind(this);
//         this.deleteClient = this.deleteClient.bind(this);
//     }
    
//     enterClientName(event) {
//         console.log("Event:",event.target.value)
//         this.setState({value: event.target.value,visible:true});
//     }

//     onClick(event) {
//         event.preventDefault();
//         this.setState({ visible: true,
//             clientDetails:[...this.state.clientDetails,{
//                 name:event.target.name.value
//             }]
//         });
//     }

//      editClient(){
//         console.log("edit",this.state.edit)
//         this.setState({edit:true})
//     }

//     deleteClient(){
        
//         console.log("delete",this.state.edit)
    
//     }
    

//     onHide() {
//         this.setState({ visible: false });
//         if(this.state.value===""){
//             return
//         }else{
//             this.setState({ displayValue: true });
//         }
//     }

//     render() {
//         const footer = (
//             <div align="right">
//                 <Button label="Create" onClick={this.onHide} className="p-button-success" />
//             </div>
//         );
//         return (
//             <div className="clientcomponent">
//                 <div className="container" align="right">
//                     <Button label="New Client" className="p-button-success p-button-rounded" icon="pi pi-plus" iconPos="left" onClick={(event) => this.onClick(event)} />
//                     <div align="left">
//                         <Dialog header="New Client" visible={this.state.visible} footer={footer} onHide={this.onHide}>
//                             <InputText  name="clientName" type="text" placeholder="Enter Client Name... " value={this.state.value} onChange={(e)=>this.enterClientName(this.setState(e.target.value))} />
//                         </Dialog>
//                     </div>
//                     <ul>
//                             {this.state.clientDetails.map(value=>(
//                                 <li key={value.name}>
//                                    value= {value.name}
//                                 </li>
//                             ))}
//                         </ul>
//                     <div className="ui-g-6 ui-md-4 no-padding top" align="left">
//                     { this.state.displayValue &&
//                     <React.Fragment>
//                      <SlideMenu ref={(el) => this.menu = el} model={this.state.icons} popup={true}></SlideMenu>
//                      <Button type="button" icon="pi pi-bars" label={this.state.value} onClick={(event) => this.menu.toggle(event)}></Button>
//                      </React.Fragment>
//                     }
                    
//                     </div>
//                    {
//                       !this.state.edit &&
//                        <InputText ></InputText>
//                    }
//                 </div>
               
//             </div>
//         );
//     }
// }