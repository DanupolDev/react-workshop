
import { useState } from 'react';
import './App.css';
import SingleContent from './components/SingleContent';
import data from './data';

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className='container'>
          <h3>เครื่องมือพัฒนาเว็บ</h3>
          <section>
              {content.map((data)=>{
                return <SingleContent  key={data.id} {...data}/>
              })}
          </section>
      </div>
    </main>
  );
}

export default App;
