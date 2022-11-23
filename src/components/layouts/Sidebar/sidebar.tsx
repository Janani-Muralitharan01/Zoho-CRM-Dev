import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './sidebar.css'
import ButtonOptions from '../../CommonModules/ButtonOptions/buttons';

const SideBar = () => {

  const buttonNames = [
    {
    names : 'Single Line',
    icon : 'ab',
    id : 1
    },
    {
      names : 'Multi-Line',
      icon : 'ab',
      id : 2,
    },
    {
      names : 'Email',
      icon : 'ab',
      id : 3,
    },
    {
      names : 'Phone',
      icon : 'ab',
      id : 4,
    },
    {
      names : 'Pick List',
      icon : 'ab',
      id : 5,
    },
    {
      names : 'Multi-Select',
      icon : 'ab',
      id : 6,
    },
    {
      names : 'Date',
      icon : 'ab',
      id : 7,
    },
    {
      names : 'Date/Time',
      icon : 'ab',
      id : 8,
    },
    {
      names : 'Number',
      icon : 'ab',
      id : 9,

    },
    {
      names : 'Auto-Number',
      icon : 'ab',
      id : 10,
    },
    {
      names : 'Currency',
      icon : 'ab',
      id : 11,
    },
    {
      names : 'Decimal',
      icon : 'ab',
      id : 12,
    },
    {
      names : 'Percent',
      icon : 'ab',
      id : 13,
    },
    {
      names : 'Long integer',
      icon : 'ab',
      id : 14,
    },
    {
      names : 'Checkbox',
      icon : 'ab',
      id : 15,
    },
    {
      names : 'URL',
      icon : 'ab',
      id : 16,
    },
    {
      names : 'Lookup',
      icon : 'ab',
      id : 17,
    },
    {
      names : 'Formula',
      icon : 'ab',
      id : 18,
    },
    {
      names : 'User',
      icon : 'ab',
      id : 19,
    },
    {
      names : 'File Upload',
      icon : 'ab',
      id : 20,
    },
    {
      names : 'Image Upload',
      icon : 'ab',
      id : 21,
    },
    {
      names : 'Multi-Select Lookup',
      icon : 'ab',
      id : 22,
    },
    {
      names : 'Subform',
      icon : 'ab',
      id : 23,
    },
    {
      names : 'NEW SECTION',
      icon : 'ab',
      id : 25,
    },
  ]

  return (
  <div>

          <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       New Fields
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="alignTwo">
                {buttonNames.map(button=><ButtonOptions name={button.names} icon={button.icon}/>)}
                </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Unused Fields
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

  
  
  </div>
  
  );
}

export default SideBar;
