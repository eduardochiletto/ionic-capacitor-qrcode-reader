import { IonPage } from '@ionic/react';
import Button from '../components/Button/Button';

import './Home.css'
import qrcode from '../assets/qrcode.svg'

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className='container' >
        <div className='title'>
          QR Code Reader
        </div>

        <div>
          <img className='logo' alt='qrcode' src={qrcode} />
        </div>

        <Button />
      </div>
    </IonPage>
  );
};

export default Home;
