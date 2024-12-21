import { IonCard, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonText
            style={{
              color: "white",
              padding: "10px",
              fontSize: "20px",
            }}
          >
            This is Ionic React with Capacitor.  
          </IonText>  
        </IonCard>    

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
