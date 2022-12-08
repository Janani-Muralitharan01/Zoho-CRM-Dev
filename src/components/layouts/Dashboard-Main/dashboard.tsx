// import 'react-tabs/style/react-tabs.css';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import { TabView, TabPanel } from "primereact/tabview";
import "./dashboard.css";
import UntitleImage from "../createFile/create";
import QuickCreate from "../QuickCreateFile/quickCreate";
import DetailView from "../DetailView/detailView";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dashboardIndexValue } from "../../../../src/features/counter/counterSlice";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const indexValue = (e: any) => {
    setActiveIndex(e.index);
  };

  useEffect(() => {
    dispatch(dashboardIndexValue(activeIndex));
  }, [activeIndex]);

  return (
    <>
      <div>
        <i className="pi pi-clone book"></i>

        <TabView
          className="tabview"
          activeIndex={activeIndex}
          onTabChange={(e) => indexValue(e)}
        >
          <TabPanel header="CREATE">
            <UntitleImage />
          </TabPanel>
          <TabPanel header="QUICK CREATE">
            <QuickCreate />
          </TabPanel>
          <TabPanel header="DETAIL VIEW">
            <DetailView />
          </TabPanel>
        </TabView>
      </div>
      {/* <Tabs>
        <Tab>title</Tab>
        <Tab>tl 2</Tab>
      </Tabs> */}
    </>
  );
};

export default Dashboard;
