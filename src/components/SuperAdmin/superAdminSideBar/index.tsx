import "./superAdminSideBar.css";

const sideBar = [
  {
    id: 1,
    names: "Recruiters",
  },
  {
    id: 2,
    names: "Recruiters list",
  },
  {
    id: 3,
    names: "Recruiters Top",
  },
  {
    id: 1,
    names: "Recruiters",
  },
  {
    id: 2,
    names: "Recruiters list",
  },
  {
    id: 3,
    names: "Recruiters Top",
  },
  {
    id: 2,
    names: "Recruiters list",
  },
  {
    id: 3,
    names: "Recruiters Top",
  },
];

const SuperAdminSideBar = () => {
  return (
    <div className="">
      <div>
        {sideBar.map((x: any) => (
          <span className="grid justify-content-center align-items-center p-2 text-xl surface-500 m-2 ">
            {x.names}
          </span>
        ))}
      </div>
    </div>
  );
};
export default SuperAdminSideBar;
