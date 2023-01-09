import "./createRecruiterTable.css";
import React, { useState, useEffect, useLayoutEffect,useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import Profile from "../../../assets/profile.png";
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { CREATERECRUITERTABLE } from "../../Constant/const";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RecruitersGetValue } from "../../../features/Recruiter/recruiter";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from 'primereact/toast';

const CreateRecrutierTable = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [products, setProducts] = useState();
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state: any) => state);

  const toast = useRef<any>(null);

  useLayoutEffect(() => {
    dispatch(RecruitersGetValue());
  }, []);

  useEffect(() => {
    if (user.Recruiter.roles != null) {
      setProducts(user.Recruiter.roles);
    }
  }, [user.Recruiter.roles]);

  const onCityChange = (e: any) => {
    setSelectedCity1(e.value);
  };
  const accept = () => {
    toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });

}
const reject = () => {
  toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
}
  let confirm1 = () => {
    confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept,
        reject
    });
};
  const items = [
    {
      label: "Update",
      icon: "pi pi-pencil",
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
     
      command: () => {
         
        return(
        //   confirmDialog({
        //     message: 'Are you sure you want to proceed?',
        //     header: 'Confirmation',
        //     icon: 'pi pi-exclamation-triangle',
        //     accept,
        //     reject
        // })
        
        toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' })
        )
        
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        
    }
    },
  ];
  const countryBodyTemplate = (rowData: any) => {
    return (
      <div className="flex align-items-center">
        <img alt="flag" src={Profile} width={30} height={30} />
        <span className="ml-1">{rowData.name}</span>
      </div>
    );
  };

  const editPolicy = (data: any) => {
    return (
      <div className="speeddial-linear-demo ">
        <SpeedDial model={items} direction="right" />
      </div>
    );
  };

  return (
    
    <div className="mx-5 my-3">
      <Toast ref={toast} />
      <div className="flex justify-content-between align-items-center">
        <h2 className=" "> Recrutier</h2>
        <Button label="Add New Recruiter" />
      </div>

      <DataTable
        value={products}
        paginator
        responsiveLayout="scroll"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={5}
        rowsPerPageOptions={[5, 10, 15]}
      >
        <Column field="sno" header="S.No"></Column>
        <Column field="name" body={countryBodyTemplate} header="Name"></Column>
        <Column field="Designation" header="Designation"></Column>
        <Column field="Gender" header="Gender"></Column>
        <Column field="DateofBirth" header="Date of Birth"></Column>
        <Column field="email" header="Email Address"></Column>
        <Column field="PhoneNumber" header="Phone Number"></Column>
        <Column body={editPolicy} header="Actions"></Column>
      </DataTable>
    </div>
  );
};
export default React.memo(CreateRecrutierTable);
