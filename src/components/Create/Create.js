import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './create.css';
import Eventimg from './Event.svg';

const Create = () => {
  const navigate = useNavigate();

  return (
    <div className="createpage">
      <img className="createimage" src={Eventimg} alt="img" />
      <div className="createbtns">
        <Button className="createbacktn" type="button" onClick={() => navigate('/')}>
          <span>Back</span>
        </Button>
        <Button className="createnextbtn" type="button" onClick={() => navigate('/event')}>
          <span>Next</span>
        </Button>
      </div>
    </div>
  );
};

export default Create;
