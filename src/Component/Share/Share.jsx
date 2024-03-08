import React from 'react';
import p1 from '../../Image/person/1.jpeg'
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
const Share = () => {
  return (
    <div className='share'>
      <div className="sharewrapper">
        <div className="sharetop">
            <img className='shareProfile' src={p1} />
            <input 
             placeholder='what in your mind Safak'
             className='ShareInput'
             />
        </div>
        <hr className='sharehr'/>
        <div className="shareBoottom">
            <div className="shareOptions">
                  <div className="shareoption">
                    <PermMedia htmlColor='tomato'  className='shareIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                  </div>
                  <div className="shareoption">
                    <Label htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                  </div>
                  <div className="shareoption">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                  </div>
                  <div className="shareoption">
                    <EmojiEmotions htmlColor='goldenrod'  className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                  </div>
            </div>
            <div className="sharButton">
                Share
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share
