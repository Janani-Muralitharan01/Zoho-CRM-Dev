interface ReplicateButtonOptions {
    buttonName: string;
    icon: string;
}


const ReplicateButton: React.FC<ReplicateButtonOptions> = ({ buttonName, icon }) => {
    return (
        <div>
            {buttonName}
            {icon}
        </div>
    )
}

export default ReplicateButton;