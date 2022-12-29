import "./createRecruiterTable.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const CreateRecrutierTable = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [products, setProducts] = useState([
    {
      sno: 1,
      name: "Recruiters",
      designation: "developer",
      gender: "male",
      dob: "23.4.9999",
      email: "test@gmail.com",
      phone: "99999999",
      actions: "...",
    },
    {
      sno: 2,
      name: "Recruiters",
      designation: "developer",
      gender: "male",
      dob: "23.4.9999",
      email: "test@gmail.com",
      phone: "99999999",
      actions: "...",
    },
  ]);
  const onCityChange = (e: any) => {
    setSelectedCity1(e.value);
  };
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="mx-5 my-3">
      <div className="flex justify-content-between align-items-center">
        <h2 className=" "> Recrutier</h2>
        <Button label="Add New Recruiter" />
      </div>
      <DataTable value={products} responsiveLayout="scroll">
        <Column field="sno" header="S.No"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="designation" header="Designation"></Column>
        <Column field="gender" header="Gender"></Column>
        <Column field="dob" header="Date of Birth"></Column>
        <Column field="email" header="Email Address"></Column>
        <Column field="phone" header="Phone Number"></Column>
        <Column field="actions" header="Actions"></Column>
      </DataTable>
    </div>
  );
};
export default CreateRecrutierTable;
