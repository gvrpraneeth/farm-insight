// import './App.css';

// function App() {
//   return (
//     <div className="main-container">
//       <div
//         style={{
//           height: '100vh',
//           backgroundImage: 'url(/farming.jpg)',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="logo"> Farm Insight</div>

//         <div className="buttons-container">
//           <div className="buttons">
//             <button className="button">Create survey</button>
//           </div>

//           <div className="buttons">
//             <button className="button">View survey results</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
