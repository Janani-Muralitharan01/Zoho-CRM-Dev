import { useState } from 'react';
import './buttons.css'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Draggable from 'react-draggable';
import ReplicateButton from '../ReplicateButton/ReplicateButton';



interface ButtonOptionsProps{
    name: string,
    icon: string,
    id: number,
}

  

// const [val,setVal]=useState([]);
// const handleAdd=()=>{
//   const abc: any =[...val,[]]
//   setVal(abc)
// }

// const handleChange=(onChangeValue: any)=>{
// const inputdata: any =[...val]
// inputdata[i]=onChangeValue.target.value;
// setVal(inputdata)
// }

const ButtonOptions : React.FC<ButtonOptionsProps> = ({ name , icon}) => {

    console.log('Buttonname',name);
    console.log('Buttonicon',icon);
    const [isDragged, setIsDragged] = useState(false)


    const onStart = (event: any, data: any) => {
        console.log('HELLO')
        console.log({event});
        console.log({data});
        setIsDragged(true)
    }

    return (
        <div>
            {isDragged && 
                <div className="rectanglebox">
                    <img className="imagedesign height" src={icon}></img>
                    <div>{name}</div>
                </div>
            }
            <Draggable
                onStart={(event, data) => onStart(event, data)}
                onDrag={(event, data) => { console.log('end') }}
                onStop={(event, data) => { setIsDragged(true) }}
            >
                <div>
                {isDragged && <ReplicateButton buttonName={name} icon={icon} />}
                    {!isDragged && <div className="rectanglebox">
                        <img className="imagedesign height" src={icon}></img>
                        <div>{name}</div>
                    </div>}
                </div>
            </Draggable>
        </div>
    );
  }

  
  export default ButtonOptions;
