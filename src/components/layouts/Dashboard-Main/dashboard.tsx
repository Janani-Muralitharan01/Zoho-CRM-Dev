
// import 'react-tabs/style/react-tabs.css';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import { TabView, TabPanel } from 'primereact/tabview';
import './dashboard.css';
import UntitleImage from '../createFile/create'

const Dashboard = () => {
    return (
    <>
      <div >
      <TabView className='tabview'>
    <TabPanel header="CREATE">
        <UntitleImage/>
    </TabPanel>
    <TabPanel header="QUICK CREATE">
        Quick Create
    </TabPanel>
    <TabPanel header="DETAIL VIEW">
        Detail View
    </TabPanel>
</TabView>
{/* <i className="pi pi-clone mr-2 icon"></i> */}
      </div>
      {/* <Tabs>
        <Tab>title</Tab>
        <Tab>tl 2</Tab>
      </Tabs> */}
      </>
    );
  }
  
  export default Dashboard;
  