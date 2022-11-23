import './buttons.css'

interface ButtonOptionsProps{
    name: string,
    icon: string,

}


const ButtonOptions : React.FC<ButtonOptionsProps> = ({ name , icon}) => {
    console.log('Buttonname',name)
    console.log('Buttonicon',icon)
    return (
    <div>
    <div className="rectanglebox">
        <div>{icon}</div>
        <div>{name}</div>
        </div>
        </div>
    );
  }
  
  export default ButtonOptions;
