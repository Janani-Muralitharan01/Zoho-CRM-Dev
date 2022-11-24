import './ReplicateButton.css'
interface ReplicateButtonOptions {
    buttonName: string;
    icon: string;
}


const ReplicateButton: React.FC<ReplicateButtonOptions> = ({ buttonName, icon }) => {
    return (
        <div className="designBox">
            {buttonName}
        </div>
    )
}

export default ReplicateButton;