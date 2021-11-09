import { IonPage, IonButton, useIonAlert } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@capacitor/clipboard';

import './Home.css'
import qrcode from '../assets/qrcode.svg'

const Home: React.FC = () => {
  const [alert] = useIonAlert();

  const openScanner = async () => {
    const data = await BarcodeScanner.scan({
      prompt: 'Place the QR Code inside the scan area',
      resultDisplayDuration: 0,
      disableSuccessBeep: true,
      formats: 'QR_CODE',
    });

    if (!data.cancelled) message(data);
  };

  const message = async (data: any) => {
    alert({
      cssClass: 'alert',
      header: 'QR Code Content',
      message: data.text,
      buttons: [
        { text: 'Copy to Clipboard', handler: () => copy(data.text) },
        'Ok',
      ],
    });
  };

  const copy = async (text: string) => {
    await Clipboard.write({
      string: text,
    });
  };

  return (
    <IonPage>
      <div className='container' >
        <div className='title'>
          QR Code Reader
        </div>

        <div>
          <img className='logo' alt='qrcode' src={qrcode} />
        </div>

        <IonButton className='button' color='undefined' onClick={openScanner}>
          Read QR Code
        </IonButton>
      </div>
    </IonPage>
  );
};

export default Home;
