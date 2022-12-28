import './createRecruiterTable.css';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const CreateRecrutierTable = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [products, setProducts] = useState([
    {
      code: 1,
      name: 'Recruiters',
    },
    {
      code: 2,
      name: 'Recruiters list',
    },
    {
      code: 3,
      name: 'Recruiters Top',
    },
  ]);
  const onCityChange = (e: any) => {
    setSelectedCity1(e.value);
  };
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  return (
    <div className="grid justify-content-center align-items-center w-11  ">
      <div className="flex justify-content-between align-items-center w-10">
        <h2 className=" ">Create Recrutier</h2>
        <div className="flex">
          <Button label="Secondary" className="p-button-secondary" />

          <Dropdown
            value={selectedCity1}
            options={cities}
            onChange={onCityChange}
            optionLabel="name"
            placeholder="Sort:A-B"
            className="ml-1"
          />
        </div>
      </div>
      <div className=" ">
        <DataTable value={products} responsiveLayout="scroll">
          <Column field="code" header="Sno"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Designation"></Column>
          <Column field="quantity" header="Gender"></Column>
          <Column field="category" header="Date of Birth"></Column>
          <Column field="quantity" header="Email Address"></Column>
          <Column field="quantity" header="Phone No"></Column>
          <Column field="quantity" header="Action"></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default CreateRecrutierTable;
