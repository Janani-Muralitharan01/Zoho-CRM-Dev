import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState, useEffect, useRef } from 'react';
import './MultipleSelect.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { OverlayPanel } from 'primereact/overlaypanel';

interface MultipleSelectProps {
  dialogVisible: boolean;
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({ dialogVisible }) => {
  const inputArr = [
    {
      type: 'text',
      id: 1,
      value: '',
    },
  ];

  const [state, setState] = useState(false);
  const [checkAlpha, setCheckAlpha] = useState('');
  const [checkRequire, setCheckRequire] = useState('');
  const [checkToolTip, setCheckToolTip] = useState('');
  const [val, setVal] = useState([]);
  const [OptionOne, setOptionOne] = useState(false);
  const [OptionThree, setOptionThree] = useState(false);
  const [option, setOption] = useState([]);
  const [arr, setArr] = useState(inputArr);
  const [checked, setChecked] = useState(false);
  const op: any = useRef(null);

  function handlerSiebarOptionOne() {
    setOptionOne(!OptionOne);
  }
  function handlerSiebarOptionThree() {
    setOptionThree(!OptionThree);
  }
  const addInput = () => {
    setArr((s: any) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: 'text',
          value: '',
        },
      ];
    });
  };
  var k = 1;
  const handlerCheck = (e: any) => {
    setChecked(!checked);
  };
  const deleteinput = (i: any) => {
    const deleteVal = [...arr];
    deleteVal.splice(i, 1);
    setArr(deleteVal);
  };
  const handleChange = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  useEffect(() => {
    setState(dialogVisible);
  }, [dialogVisible]);

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
  ];

  return (
    <div>
      <Dialog
        visible={state}
        onHide={() => setState(false)}
        position="top"
        header="Multi Pick List Properties"
      >
        <p className="multiSelect_feild_lable">
          <label>Field Label</label>
          <InputText type="text" />
        </p>

        <div className="flex justify-content-between ">
          <span>Multi Pick List Option</span>{' '}
          <span onClick={(e) => op.current.toggle(e)}>
            <i className="pi pi-cog cursor-pointer"></i>
          </span>
        </div>
        <OverlayPanel
          ref={op}
          style={{ width: '255px' }}
          className="overlaypanel-demo"
        >
          <div>
            <span className=" options" onClick={handlerSiebarOptionOne}>
              View/add unused values
            </span>
            <hr />
            <span className=" options">Add prefined choices</span>
            <br />
            <br />
            <span className="  options " onClick={handlerSiebarOptionThree}>
              Add Bulk choices
            </span>
            <br />
          </div>
        </OverlayPanel>
        <Dialog
          header="Unused Values"
          visible={OptionOne}
          style={{ width: '50vw' }}
          position="top"
          onHide={() => setOptionOne(!OptionOne)}
        >
          <div className="allOptionUse">All options are in use.</div>
        </Dialog>
        <Dialog
          header="Bulk Choice"
          visible={OptionThree}
          style={{ width: '45vw' }}
          position="top"
          onHide={() => setOptionThree(!OptionThree)}
        >
          <div>
            {' '}
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputTextarea id="textarea" rows={15} cols={65} autoResize />
                <label htmlFor="textarea">Textarea</label>
              </span>
            </div>
            <div className="pt">
              <div className="footerstyle">
                <span className="p-2 text-primary">Don't save this field</span>
                <button
                  className="buttonStyle ml-8 mt-1"
                  onClick={handlerCheck}
                >
                  {' '}
                  Cancel{' '}
                </button>
                <Button label="Done" />
              </div>
            </div>
          </div>
        </Dialog>
        <section className="multipleSelectDialogOption_main">
          {arr.map((item, i: any) => {
            return (
              <section className="multipleSelectDialogOption">
                <input
                  onChange={handleChange}
                  value={item.value}
                  id={i}
                  placeholder={' Options' + '' + k++}
                  type={item.type}
                />
                <i
                  className="pi pi-plus "
                  onMouseEnter={() => 'hello'}
                  onClick={addInput}
                ></i>
                <i className="pi pi-minus" onClick={() => deleteinput(i)}></i>
              </section>
            );
          })}
        </section>
        <section>
          <p>
            <input
              type="checkbox"
              value="alphabetically"
              name="alphabetically"
              onChange={(event) => setCheckAlpha(event.target.value)}
            ></input>
            Display values alphabetically, instead of in the order entered.
          </p>

          <p>
            <input
              type="checkbox"
              value="Required"
              name="Required"
              onChange={(event) => setCheckRequire(event.target.value)}
            ></input>
            Required
          </p>

          <p>
            {' '}
            <Checkbox
              inputId="binary"
              checked={checked}
              onChange={handlerCheck}
            />
            <label className="ml-1">Show Tooltip</label>{' '}
          </p>
          {checked ? (
            <div>
              <InputTextarea placeholder="Type tooltip message" />
            </div>
          ) : (
            ''
          )}
        </section>

        <p>Select default value</p>

        <Dropdown
          value={option}
          options={cities}
          optionLabel="name"
          placeholder="-None-"
        />

        <div className="multiSelect_cancel">
          <p className="">Don't save this field.</p>
          <Button label="Done" onClick={() => setState(!state)} />
        </div>
      </Dialog>
    </div>
  );
};

export default MultipleSelect;
