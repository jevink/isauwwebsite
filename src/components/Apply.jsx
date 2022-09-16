import React, { useState, useEffect } from 'react';
// import FileUploaded from './FileUploaded';
import axios from 'axios';

function Apply() {
// gdrive client ID: 799175424998-b3j32lo9hpli5lkc3e886d9lft6vicmg.apps.googleusercontent.com
// gdrive client secret: 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
  const [info, setInfo] = useState({
      name: "",
      phoneNumber: "",
      email: "",
      major: "",
      year: "",
      strengths: "",
      past: "",
      c1:"",
      c2:"",
      c3:"",
  });

  // const CLIENT_ID = '799175424998-b3j32lo9hpli5lkc3e886d9lft6vicmg.apps.googleusercontent.com';
  // const CLIENT_SECRET = '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';
  // const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  //
  // const REFRESH_TOKEN = '1//04KVspinox46jCgYIARAAGAQSNwF-L9IrHMcg3FsLH0JGVe3ExJn1TqCK-qo7eLHCVDl0fBc_LZ2vQchGLDy3rRRg9HRAYj_USnE';
  //
  // const oauth2Client = new google.auth.OAuth2(
  //   CLIENT_ID,
  //   CLIENT_SECRET,
  //   REDIRECT_URI
  // );
  //
  // oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

  const[resume, setResume] = useState(null);

  const {name, phoneNumber, email, major, year, strengths, past, c1, c2, c3} = info;

  const handleChange = (event) => {
      setInfo({ ...info, [event.target.name]: event.target.value });
  }

  const submitForm = (e) => {
    let file = resume
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload = function(e){
      let rawLog = reader.result.split(',')[1];
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
        fetch('https://script.google.com/macros/s/AKfycby7-IBnbdvg3EcV0LMZaTQhY5w40k2c6C-nqXYz7zXO_GI2XQT4dItogYkRwvDv5cAn/exec', //your AppsScript URL
          { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
          .then(res => res.json()).then((a) => {
            console.log(a) //See response
          }).catch(e => console.log(e)) // Or Error in console
      }
};

  const handleEffect =()=>{
    console.log(resume)
  }

  return (
    <div>
      <div className="navbar-overlay">
          <img
              className="d-block w-100"
              src="../images/officers/isauw-group.jpg"
              alt=""
              style={{ height: "calc(50vh + 10vw)" }}
          />
      </div>

      <form
      className="apply-form"
      // action="https://script.google.com/macros/s/AKfycby1iZ3xMuUJ0-AL-CGdouNX_bD7AuKVmidPtcwX1EtqZYV2e4GKrvdCOcEAtXZ0Jzw/exec"
      >
        <h3> Apply form </h3>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="on"
            required
           />
        </label>
        <br/>
        <label>
          Phone:
          <input // might use react phoneNumber
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            international = {false}
            onChange={handleChange}
            autoComplete="on"
            defaultCountry={'US'}
            countries={["NG", "MG", "SC", "KM", "BW", "MR"]}
            required
           />
        </label>
        <br/>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="on"
            required
           />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="major"
            value={major}
            onChange={handleChange}
            autoComplete="on"
            required
           />
        </label>
        <br />
        <label>
        Current Year:
          <select name="year" value={year} onChange={handleChange}>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <br />
        <label>
          What would you say are your strengths and weaknesses?
          <br />
          <textarea
          type="text"
          name="strengths"
          value={strengths}
          onChange={handleChange}
          required
          />
        </label>
        <br />
        <label>
          Describe a past experience that you think will help you contribute to ISAUW.
          <br />
          <textarea
          type="text"
          name="past"
          value={past}
          onChange={handleChange}
          required
          />
        </label>
        <br />
          From most to least priority, list up to 3 positions that you are most interested in and explain why.
        <br />
        choice 1:
        <br />
        <label>
          <select name="c1" value={c1} onChange={handleChange}>
            <option value="EO">Event Organizers</option>
            <option value="IO">Inventory & Logistics</option>
            <option value="CM">Creativity Management</option>
            <option value="Sponsor">Sponsorship</option>
            <option value="Treasury">Treasury</option>
            <option value="MarCom">Marketing Communication</option>
            <option value="Documentary">Documentary and Design*</option>
            <option value="IT">Information Technology</option>
          </select>
        </label>
        <br />
        choice 2:
        <br />
        <label>
        <select name="c2" value={c2} onChange={handleChange}>
          <option value="EO">Event Organizers</option>
          <option value="IO">Inventory & Logistics</option>
          <option value="CM">Creativity Management</option>
          <option value="Sponsor">Sponsorship</option>
          <option value="Treasury">Treasury</option>
          <option value="MarCom">Marketing Communication</option>
          <option value="Documentary">Documentary and Design*</option>
          <option value="IT">Information Technology</option>
        </select>
        </label>
        <br />
        choice 3:
        <br />

          <label>
          <select name="c3" value={c3} onChange={handleChange}>
            <option value="EO">Event Organizers</option>
            <option value="IO">Inventory & Logistics</option>
            <option value="CM">Creativity Management</option>
            <option value="Sponsor">Sponsorship</option>
            <option value="Treasury">Treasury</option>
            <option value="MarCom">Marketing Communication</option>
            <option value="Documentary">Documentary and Design*</option>
            <option value="IT">Information Technology</option>
          </select>
          </label>
          <br />
          <b>* bring portfolio.</b>
          <br />
          Resume:
          <br />
          <input type="file" name="resume" onChange={(e)=>{
            console.log(e.target.files)
            setResume(e.target.files[0])
          }
        }/>
        <br/>
          <br />
          <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}
export default Apply;
