import React, {useState} from 'react';
import NormalCard from './NormalCard';
import DangerCard from './DangerCard';
import FooterCard from './FooterCard';
import {useFetch} from '../utils/hooks';
import {useData} from '../utils/data';

function App(){

    const area = useFetch(
        'http://localhost:8080/python'
      );
    const data = useData(
        'http://localhost:8080/result'
    );

    const [isDone, setIsDone] = useState(false);

    // if (area>1){
    //     setIsDone(true);
    // }


    function handleClick(){
        setIsDone(!isDone);
    }

    return(
        <div onClick={handleClick}>

            {!isDone ? <NormalCard /> : <DangerCard />}
            <div>
              <h1 style={{color: 'white', textAlign: 'center'}}>Area of Cyclone: {area}</h1>
          </div>
          <div>
              <h1 style={{color: 'red', textAlign: 'center'}}>{data}</h1>
          </div>
            
            <FooterCard />
            {/* {data.map((item) => {
                return (
                    <div>
                    <h1 style={{color: 'red'}}>{item}</h1>
                    </div>
          ) */}
          
        {/* })} */}

        </div>
    );
}
export default App;