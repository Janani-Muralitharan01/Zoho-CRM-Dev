import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./sidebar.css";
import ButtonOptions from "../../CommonModules/ButtonOptions/buttons";
import singleline from "../../../assets/singleline.svg";
import onetwothree from "../../../assets/123.svg";
import autonum from "../../../assets/autonum.svg";
import check from "../../../assets/check.svg";
import currency from "../../../assets/currency.svg";
import date from "../../../assets/date.svg";
import dateandtime from "../../../assets/dateandtime.svg";
import decimal from "../../../assets/decimal.svg";
import fileupload from "../../../assets/fileupload.svg";
import fx from "../../../assets/fx.svg";
import imageupload from "../../../assets/imageupload.svg";
import longint from "../../../assets/longint.svg";
import lookup from "../../../assets/lookup.svg";
import mail from "../../../assets/mail.svg";
import multiline from "../../../assets/multiline.svg";
import multiselect from "../../../assets/multiselect.svg";
import multilookup from "../../../assets/multi-lookup.svg";
import percent from "../../../assets/percent.svg";
import phone from "../../../assets/phone.svg";
import picklist from "../../../assets/picklist.svg";
import user from "../../../assets/user.svg";
import subform from "../../../assets/subform.svg";
import url from "../../../assets/url.svg";
import rect from "../../../assets/rect.svg";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = useSelector((state: any) => state);

  useEffect(() => {
    setActiveIndex(count.user.indexValue);
  }, [count.user.indexValue]);

  console.log("123", count);
  const buttonNames = [
    {
      names: "Single Line",
      icon: singleline,
      id: 1,
    },
    {
      names: "Multi-Line",
      icon: multiline,
      id: 2,
    },
    {
      names: "Email",
      icon: mail,
      id: 3,
    },
    {
      names: "Phone",
      icon: phone,
      id: 4,
    },
    {
      names: "Pick List",
      icon: picklist,
      id: 5,
    },
    {
      names: "Multi-Select",
      icon: multiselect,
      id: 6,
    },
    {
      names: "Date",
      icon: date,
      id: 7,
    },
    {
      names: "Date/Time",
      icon: dateandtime,
      id: 8,
    },
    {
      names: "Number",
      icon: onetwothree,
      id: 9,
    },
    {
      names: "Auto-Number",
      icon: autonum,
      id: 10,
    },
    {
      names: "Currency",
      icon: currency,
      id: 11,
    },
    {
      names: "Decimal",
      icon: decimal,
      id: 12,
    },
    {
      names: "Percent",
      icon: percent,
      id: 13,
    },
    {
      names: "Long integer",
      icon: longint,
      id: 14,
    },
    {
      names: "Checkbox",
      icon: check,
      id: 15,
    },
    {
      names: "URL",
      icon: url,
      id: 16,
    },
    {
      names: "Lookup",
      icon: lookup,
      id: 17,
    },
    {
      names: "Formula",
      icon: fx,
      id: 18,
    },
    {
      names: "User",
      icon: user,
      id: 19,
    },
    {
      names: "File Upload",
      icon: fileupload,
      id: 20,
    },
    {
      names: "Image Upload",
      icon: imageupload,
      id: 21,
    },
    {
      names: "Multi-Select Lookup",
      icon: multilookup,
      id: 22,
    },
    {
      names: "Subform",
      icon: subform,
      id: 23,
    },
    {
      names: "NEW SECTION",
      icon: rect,
      id: 25,
    },
  ];

  const AvailableButtonNames = [
    {
      names: "Single Line",
      icon: singleline,
      id: 1,
    },
    {
      names: "Multi-Line",
      icon: multiline,
      id: 2,
    },
    {
      names: "Email",
      icon: mail,
      id: 3,
    },
  ];

  const updateMissinButton = () => {};

  return (
    <div>
      {activeIndex === 0 ? (
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>New Fields</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="alignTwo">
                {buttonNames.map((button) => (
                  <ButtonOptions
                    name={button.names}
                    icon={button.icon}
                    id={button.id}
                  />
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Unused Fields</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ) : activeIndex === 1 ? (
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Available Fields</AccordionItemButton>
            </AccordionItemHeading>
            <p className=" text-white font-light text-base">
              Untitled Information
            </p>
            <AccordionItemPanel>
              <div>
                {AvailableButtonNames.map((button) => (
                  <ButtonOptions
                    name={button.names}
                    icon={button.icon}
                    id={button.id}
                  />
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <div>
          <p className=" text-white  font-light text-base ">Related List</p>
          <p className=" text-white font-light text-sm">
            All available related lists have been selected.
          </p>
        </div>
      )}
    </div>
  );
};

export default SideBar;
