/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useState,useEffect} from 'react';

import '../css/css.css';




export const Review=()=> {
  //inside parenthese en ecrire html
 
  const [inputs,setInputs]=useState([GetFormvalues]);
  const [creat,setCreat]=useState([Getform]);


  const handlechange =(event) =>{
  const name=event.target.name;
  const value =event.target.value;
  setInputs(values =>({...values,[name]:value}))
  }

  const handlechangecreat=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setCreat(values =>({...values,[name]:value}))
  }
  
  

  React.useEffect(()=>{localStorage.setItem("login",JSON.stringify(inputs));},[inputs]);
  React.useEffect(()=>{localStorage.setItem("creat",JSON.stringify(creat));},[creat]);
  
  

  function GetFormvalues(){
    const storedvalues = localStorage.getItem("login");
    return JSON.parse(storedvalues);
  } 

  function Getform(){
    const storedvalues = localStorage.getItem("creat");
    return JSON.parse(storedvalues);
  } 
   
  

  const handlsubmit=(event)=>{
      event.preventDefault();
      const but=document.querySelector("#botona2");
      const txt=document.querySelector("#demo1");
      const cree=document.querySelector("#back");
      cree.style.backgroundColor= 'rgba(255, 255, 255, 0.5)';
      cree.style.opacity=0.2;
      txt.id='yes';
  };


  

  const Reject=(e)=>{
     e.preventDefault();
     // eslint-disable-next-line no-unused-vars
     const but=document.querySelector("#close");
     const txt=document.querySelector("#yes");
     const cree=document.querySelector("#back");
      cree.style.backgroundColor= 'rgba(255, 255, 255, 0.5)';
      cree.style.opacity=1;
     txt.id='demo1';
  };



  const styly={
    height:"15px",
    width:"20px"
  };
   

  

return (
<>
    <body className='body'>
    <div id='back'>
    <article className='motiv'>What are  you  waitng for!go a head and create an account to have more fun 
        </article>
      <div id="demo">
       <form>  
           <label >Email<br/>
           <input type="text" name="Email" value={inputs.Email || ''}  className="input1" onChange={handlechange} placeholder="Enter your email"/></label>

           <label >Password<br/>
           <input type="text" name="Password" value={inputs.Password || ''}  className="input1" onChange={handlechange} placeholder="Enter your Password"/></label>

           <div id="claser">
            <button className="but1" type="submit">Log in</button><br/>
           
            <a className='forget'>forgot password?</a><br/><hr id='bar'/>
            <button className="but2" id='botona2' onClick={handlsubmit}>Sign Up</button>
          </div>
       </form>
     </div>
    </div> 
    
    <div id="demo1">
      <button className="reject" id='close' onClick={Reject}>X</button>
      <div id="contenu">
        <h3 className='hre'>Sign Up<hr className='bari'/></h3>  
       
          <div className="name">
              <input type="text" name="prenom"  className='se'value={creat.prenom || ''} onChange={handlechangecreat} placeholder="laste name"/>
              <input type="text" name='nom' className='se' value={creat.nom || ''} onChange={handlechangecreat} placeholder="First name"/>
          </div>
          <input type="text" name="email" className="seul" value={creat.email || ''} onChange={handlechangecreat} placeholder="Phone number or e-mail"/>
           <input type="password" name="password" placeholder="new password" value={creat.password || ''} onChange={handlechangecreat} className='se'/>
           <span className='spane'>date of birth<button className="button-div" >?</button></span>
          <div className="naissance">
            
            <select name="days" value={creat.days || ''} onChange={handlechangecreat} className='se'>
            <option >1</option><option >2</option><option >3</option><option >4</option><option >5</option><option >6</option><option >7</option><option >8</option><option >9</option><option >10</option><option >11</option><option >12</option><option >13</option><option >14</option><option >15</option><option >16</option><option >17</option><option >18</option><option >19</option><option >20</option><option >21</option><option >22</option><option >23</option><option >24</option><option >25</option><option >26</option><option >27</option><option >28</option><option >29</option><option >30</option><option >31</option>
            </select>
            <select name="month" value={creat.month || ''} onChange={handlechangecreat} className='se'>
            <option>January</option><option >February </option><option >March </option><option >April </option><option >May </option><option >June </option><option >July </option><option >August</option><option >September</option><option >October</option><option >November</option><option > December</option>
            </select>
            <select name="years" value={creat.years || ''} onChange={handlechangecreat} className='se'>
            <option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option>
              <option value="1944">1944</option>
              <option value="1945">1945</option>
              <option value="1946">1946</option>
              <option value="1947">1947</option>
              <option value="1948">1948</option>
              <option value="1949">1949</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <span className='spann'>Gender <button className="button-div">?</button></span>
          
          <div className="genre">
               <label className="border">femal<input type="radio" name="sex"  value={"femme" || ''} onChange={handlechangecreat} style={styly}/></label>
               <label className="border">mal<input type="radio" name="sex"  value={"homme" || ''} onChange={handlechangecreat} style={styly}/></label>
          </div>
          
           <p className='ss'>by clicking on register to accept in our application, with respect to policy and functionality, you can receive emails for new books and many .....</p>
          <button type="submit" className="inscrire" onClick={() => window.location.reload(true)}>Sign Up</button>    
         
      </div>
    </div>

  </body>

</>
  
)
}


