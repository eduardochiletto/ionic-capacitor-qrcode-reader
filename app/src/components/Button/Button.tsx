import React from 'react';
import { IonButton } from '@ionic/react';

import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <IonButton className='button' color='undefined'>
                Read QR Code
            </IonButton>
        );
    };
}

export default Button;