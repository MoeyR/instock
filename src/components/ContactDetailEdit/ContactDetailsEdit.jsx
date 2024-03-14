import "./ContactDetailEdit.scss"
import ErrorForm from "../ErrorForm/ErrorForm"

function ContactDetailsEdit({}) {
    return (
        <div>
        <div>
            <div>
                <h2>Contact Details</h2>
                <label htmlFor='contact'>Contact Name</label>
                <input type='text' name='contact' id='contact' placeholder="Graeme Lyon" required />
                <label htmlFor='position'>Position</label>
                <input type='text' name='position' id='position' placeholder="Warehouse Manager" required />
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' id='phone' placeholder="+1(647) 504-0911" required />
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder="glyon@instock.com" required />
            </div>          

            </div>
        </div>
    
    );
};

export default ContactDetailsEdit;
