import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

//this component is a button to show the phone number
function PhoneButton(props) {
    const className = props.className;

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    //function to change the content of the phone number button when the user clicks on it
    const togglePhoneButton = () => {
        setShowPhoneNumber(prev => !prev);
    }

    return (
        <button onClick={togglePhoneButton} className={className}>
            <FontAwesomeIcon className="phone-icon" icon={faPhone} />
            {showPhoneNumber ? ' 07 49 70 57 35' : ' Appelez-nous'}
        </button>
    );
}

export default PhoneButton;
