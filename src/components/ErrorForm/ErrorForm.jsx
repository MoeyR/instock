import ErrorLogo from "../../assets/icons/error-24px.svg"

function ErrorForm(){
    return (
        <div className="error__box">
            <img src={ErrorLogo} alt={ErrorLogo} />
            <p>Required field</p>
        </div>
    );
};

export default ErrorStateForm;