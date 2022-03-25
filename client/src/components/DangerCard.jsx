import React from 'react';
import Rectangle from '../image/danger-rectangle.svg';
import Frame from '../image/danger-frame.svg';
import Video1 from '../image/project.mp4';
import Video2 from '../image/project.ogv';
function DangerCard(){
    return(
        <div>
        <div className="card">
          <div className="card-body">
            <div className="container card1">
            <div class="row">
                    <div class="column rectangle">
                        <img className='image' src={Rectangle}></img>
                    </div>
                    <div class="column text">
                        <h4><b>Danger</b></h4> 
                        <p>Threat is there near the ocean</p>
                    </div>
                    <div class="column frame">
                        <img className='image' src={Frame}></img>
                    </div>
                </div>
            </div>
          </div>
          <div className="card-body">
            <div className="container card2"> 
                <div class="row">
                    <div class="column">
                        <h4><b>Wind Speed</b></h4> 
                        <p>132km/hr</p>
                    </div>
                    <div class="column">
                        <h4><b>Intensity</b></h4> 
                        <p>Danger</p>
                    </div>
                    <div class="column">
                        <h4><b>See More</b></h4> 
                        <p><b>+</b></p>
                    </div>
                </div>
            </div>
          </div>
            
        </div>
        <video width="400" loop autoPlay>
            <source src={Video1} type="video/mp4"></source>
            <source src={Video2} type="video/ogg"></source>
        </video>
        </div>
    );
}
export default DangerCard;