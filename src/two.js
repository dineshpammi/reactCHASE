import React from 'react';
import './two.css';
import savings from './savings.png';
import cheque from './cheque.png';

function Two(){
return( <>
            <div class='div1'>
                <div id='option'>&#9776;&emsp;</div>
                <div>Explore products </div> <span id='span1'>&nbsp;V</span>
                <div id='spa'> ATM &amp; branch&emsp;</div>
                <div> Espanol&emsp;</div>
                <div><button class='btn btn-primary'>Sign in</button></div>
                <div>&emsp;<span class="glyphicon glyphicon-search"></span></div>
            </div>
                <p class='p'>Chose what's right for your business</p>
        <div class='divtwo'>
        <div class="glyphicon glyphicon-menu-left" id="car"></div>
        <div class='twocc'>&#128188; <br/><span>Business checking</span></div>
        <div class='twocc'>&#128179;<br/><span>Merchant services</span></div>
        <div id='divimg'><img src={cheque} ></img><br/><span>Business credit cards</span> </div>
        <div  id='divimg'><img src={savings}></img><br/><span>Business lending</span></div>
        <div class='twocc'>&#127968;<br/><span>Resource center</span></div>
        <div class="glyphicon glyphicon-menu-right" id="car"></div>
        </div>
        <div class='twose'>
            <div class='twose1'><p class='twohe'>Merchant<br/>Services<span id='twoic'>&#x1F6C8;</span></p><h3>Take card payments<br/> online or over the phone</h3><h6>No matter how customers want to pay. We can<br/>help tou find the right solution for your business</h6>
                <br/><button class='btn btn-primary'>Get started</button></div>
            <div class='twose1'><p class='twohe'>Business<br/>Credit card<span id='twoic1'>&#128179;</span></p><h3>&#36;500 bonus cash back</h3><h6>Plus,earn 5% cashback in select business categories<br/>with the ink business cash credit card</h6>
                <br/><br/><button class='btn btn-primary'>Learn more</button></div>
            <div class='twose1'><p class='twohe'>Business<br/>Credit card<span id='twoic2'>&#128179;</span></p><h3>100,000 bonus points</h3><h6>Plus, earn 3x points when you spend on travel and<br/>Select business categories  with the Ink business<br/>Preffered* credit card</h6>
                <br/><button class='btn btn-primary'>Learn more</button></div>

        </div>

        </>
    )
}
export default Two;