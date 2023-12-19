
import './App.css';

function App() {
  return (
    <div className = 'main-container'>
       
        <div style={{ height:"100vh", backgroundImage:"url(/farming.jpg)", backgroundSize: "cover",
               backgroundRepeat: "no-repeat",}}>

        <div className='logo'> Farm Insight</div>



<div className='buttons-container'>
<div className='buttons' >
          <button className='button' >Create survey</button>

          
        </div>
       
        <div className='buttons' >
          

          <button className='button' >View survey results</button>
        </div>
         
        </div>
</div>
        

        
      

    </div>
   
  );
}

export default App;
