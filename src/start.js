import React from 'react';
import './start.css';
import savings from './savings.png';
import cheque from './cheque.png';



function St() {
    return (
    <>
      <div id='ab'> <b>&#x1F6C8; COVID-19 Update:</b>Find up-to-date information and see ways we can help. <a href='#'>Learn more&gt;</a> </div>
      <div>
            <ul id ='ul'>
            <li id='b'> Personal </li>&emsp;   <li>Business</li> &emsp;  <li>Commercial </li> <span id='c'><li> SHEDULE A MEETING &emsp;</li> <li>CUSTOMER SERVICE &#9660;</li> <li> ESPANOL</li></span>
            </ul>
            <ul id='ul1'>
                <li id='chase'>CHASE&#9711;&emsp;</li><li>Credit Cards &emsp;</li> <li>Checking&emsp;</li> <li>Savings&emsp;</li> <li>Home Loans&emsp;</li> <li>Car Loans&emsp;</li> <li>Investments</li> <span id='d' class="glyphicon glyphicon-search"></span>
            </ul>
      </div>
      <div class='box'>
        <div class='fb'><p>Enjoy</p><h1 id='h1'><h3 id='span'>&#36;</h3><b id='sub'><div id='two'>200</div></b></h1></div>
        <div class='fb1'>New Chase <br/>Customers:<p id='su'>Open a new Chase Total Checking&reg;<br/>account and set Up direct deposit.<br/><button class="btn btn-primary" id='btn'>Open an account</button></p></div>
        <div id='ed'><p>Welcome</p> <button class="btn btn-primary">Sign In</button><br/> <a href='#'>Not enrolled?Sign up now. &gt;</a></div>
      </div>
      <h1 id='h11'>Choose what's right for you</h1>
      <div class='div3'>
        <div class="glyphicon glyphicon-menu-left" id="car"></div>
        <div  class="fa" id="card">&#128188; <br/><span>Business</span></div>
        <div id='card'>&#128179;<br/><span>Credit cards</span></div>
        <div><img src={cheque} ></img><br/><span id='img'>Checking</span> </div>
        <div><img src={savings} ></img><br/><span id='img'>Savings</span></div>
        <div id='card'>&#127968;<br/><span>Hoam Loans</span></div>
        <div class="glyphicon glyphicon-menu-right" id="car"></div>
        
      </div>
      
    </>
      )}
export default St;