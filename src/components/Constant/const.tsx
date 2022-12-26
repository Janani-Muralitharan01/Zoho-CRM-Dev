import { v4 as uuidv4 } from "uuid";
import singleline from "../../assets/singleline.svg";
import onetwothree from "../../assets/123.svg";
import autonum from "../../assets/autonum.svg";
import check from "../../assets/check.svg";
import currency from "../../assets/currency.svg";
import date from "../../assets/date.svg";
import dateandtime from "../../assets/dateandtime.svg";
import decimal from "../../assets/decimal.svg";
import fileupload from "../../assets/fileupload.svg";
import fx from "../../assets/fx.svg";
import imageupload from "../../assets/imageupload.svg";
import longint from "../../assets/longint.svg";
import lookup from "../../assets/lookup.svg";
import mail from "../../assets/mail.svg";
import multiline from "../../assets/multiline.svg";
import multiselect from "../../assets/multiselect.svg";
import multilookup from "../../assets/multi-lookup.svg";
import percent from "../../assets/percent.svg";
import phone from "../../assets/phone.svg";
import picklist from "../../assets/picklist.svg";
import user from "../../assets/user.svg";
import subform from "../../assets/subform.svg";
import url from "../../assets/url.svg";
import rect from "../../assets/rect.svg";

export const BASEURL = "http://localhost:8085/";

export const ITEMS = [
  {
    names: "Single Line",
    subName: "Single Line",
    id: uuidv4(),
  },
  {
    names: "Multi-Line",
    subName: "Multi-Line",
    id: uuidv4(),
  },
  {
    names: "Email",
    subName: "Email",
    id: uuidv4(),
  },
  {
    names: "Phone",
    subName: "Phone",
    id: uuidv4(),
  },
  {
    names: "Pick List",
    subName: "Pick List",
    id: uuidv4(),
  },
  {
    names: "Multi-Select",
    subName: "Multi-Select",
    id: uuidv4(),
  },
  {
    names: "Date",
    subName: "Date",
    id: uuidv4(),
  },
  {
    names: "Date/Time",
    subName: "Date/Time",
    id: uuidv4(),
  },
  {
    names: "Number",
    subName: "Number",
    id: uuidv4(),
  },
  {
    names: "Auto-Number",
    subName: "Auto-Number",
    id: uuidv4(),
  },
  {
    names: "Currency",
    subName: "Currency",
    id: uuidv4(),
  },
  {
    names: "Decimal",
    subName: "Decimal",
    id: uuidv4(),
  },
  {
    names: "Percent",
    subName: "Percent",
    id: uuidv4(),
  },
  {
    names: "Long integer",
    subName: "Long integer",
    id: uuidv4(),
  },
  {
    names: "Checkbox",
    subName: "Checkbox",
    id: uuidv4(),
  },
  {
    names: "URL",
    subName: "URL",
    id: uuidv4(),
  },
  {
    names: "Lookup",
    subName: "Lookup",
    id: uuidv4(),
  },
  {
    names: "Formula",
    subName: "Formula",
    id: uuidv4(),
  },
  {
    names: "User",
    subName: "User",
    id: uuidv4(),
  },
  {
    names: "File Upload",
    subName: "File Upload",
    id: uuidv4(),
  },
  {
    names: "Image Upload",
    subName: "Image Upload",
    id: uuidv4(),
  },
  {
    names: "Multi-Select Lookup",
    subName: "Multi-Select Lookup",
    id: uuidv4(),
  },
  {
    names: "Subform",
    subName: "Subform",
    id: uuidv4(),
  },
  {
    names: "NEW SECTION",
    subName: "NEW SECTION",
    id: uuidv4(),
  },
];

export const QUICKITEMS = [
  {
    names: "Single Line",
    subName: "Single Line",
    id: uuidv4(),
  },
  {
    names: "Multi-Line",
    subName: "Multi-Line",
    id: uuidv4(),
  },
  {
    names: "Email",
    subName: "Email",
    id: uuidv4(),
  },
];

export const COMPLETE = [
  {
    names: "Untitled Owner",
    subName: "Untitled Owner",
    id: uuidv4(),
  },
  {
    names: "Untitled Name",
    subName: "Untitled Name",
    id: uuidv4(),
  },
  {
    names: "Created By",
    subName: "Created By",
    id: uuidv4(),
  },
  {
    names: "Secondary Email",
    subName: "Secondary Email",
    id: uuidv4(),
  },
  {
    names: "Email Opt Out",
    subName: "Email Opt Out",
    id: uuidv4(),
  },
  {
    names: "Email",
    subName: "Email",
    id: uuidv4(),
  },
  {
    names: "Modified By",
    subName: "Modified By",
    id: uuidv4(),
  },
];

export const QUICKCREATECOMPLETE = [
  {
    names: "Untitled Name",
    subName: "Untitled Name",
    id: uuidv4(),
  },
  {
    names: "Email",
    subName: "Email",
    id: uuidv4(),
  },
];

export const SUPERADMINSIDEBAR = [
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
    names: "Recruiters Create",
  },
  {
    id: 4,
    names: "Form Creation",
  },
  {
    id: 5,
    names: "Form Submission",
  },
  {
    id: 6,
    names: "Candidate",
  },
  {
    id: 7,
    names: "Candidate List",
  },
  {
    id: 8,
    names: "Create Candidate ",
  },
];

export const SIDEBARITEMS = [
  {
    names: "Single Line",
    icon: singleline,
    id: uuidv4(),
  },
  {
    names: "Multi-Line",
    icon: multiline,
    id: uuidv4(),
  },
  {
    names: "Email",
    icon: mail,
    id: uuidv4(),
  },
  {
    names: "Phone",
    icon: phone,
    id: uuidv4(),
  },
  {
    names: "Pick List",
    icon: picklist,
    id: uuidv4(),
  },
  {
    names: "Multi-Select",
    icon: multiselect,
    id: uuidv4(),
  },
  {
    names: "Date",
    icon: date,
    id: uuidv4(),
  },
  {
    names: "Date/Time",
    icon: dateandtime,
    id: uuidv4(),
  },
  {
    names: "Number",
    icon: onetwothree,
    id: uuidv4(),
  },
  {
    names: "Auto-Number",
    icon: autonum,
    id: uuidv4(),
  },
  {
    names: "Currency",
    icon: currency,
    id: uuidv4(),
  },
  {
    names: "Decimal",
    icon: decimal,
    id: uuidv4(),
  },
  {
    names: "Percent",
    icon: percent,
    id: uuidv4(),
  },
  {
    names: "Long integer",
    icon: longint,
    id: uuidv4(),
  },
  {
    names: "Checkbox",
    icon: check,
    id: uuidv4(),
  },
  {
    names: "URL",
    icon: url,
    id: uuidv4(),
  },
  {
    names: "Lookup",
    icon: lookup,
    id: uuidv4(),
  },
  {
    names: "Formula",
    icon: fx,
    id: uuidv4(),
  },
  {
    names: "User",
    icon: user,
    id: uuidv4(),
  },
  {
    names: "File Upload",
    icon: fileupload,
    id: uuidv4(),
  },
  {
    names: "Image Upload",
    icon: imageupload,
    id: uuidv4(),
  },
  {
    names: "Multi-Select Lookup",
    icon: multilookup,
    id: uuidv4(),
  },
  {
    names: "Subform",
    icon: subform,
    id: uuidv4(),
  },
  {
    names: "NEW SECTION",
    icon: rect,
    id: uuidv4(),
  },
];
