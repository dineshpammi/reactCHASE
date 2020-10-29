import React from 'react';
import './three.css';
import parl from './parl.jpg';
function Th(){
    return(
    <>
    <div class='thimg'>
        <img src={parl}></img>
        <div id='thlogo'>CHASE</div>
        <div class='lgin'>
            <label>Username</label><br/>
            <input type='text' id='line'/><br/><br/>
            <label>Password</label><br/>
            <input type='password' id='line'/><br/><br/>
            <input type='checkbox'/> Remember me &emsp;<input type='checkbox' id='cbx'/> Use token <br/>
            <br/><button class='btn btn-primary'>Sign in</button> <br/>
            <br/><a href='#'>Forgot username/password? &gt;</a> <br/>
            <a href='#'>Not enrolled? Sign Up now &gt;</a>
        </div><br/>
        <div class='thext'>
            <h2 id='somet'>Follow Us:&emsp;
            <span class="fa fa-facebook"></span>&emsp; <span class="fa fa-instagram"></span>&emsp;
            <span class="fa fa-twitter"></span>&emsp;<span class="fa fa-youtube"></span>&emsp;
            <span class="fa fa-linkedin"></span></h2>
        </div><br/>
        <h6 class='footer'><span>Contact us</span>&emsp;<span>Privacy</span>&emsp;<span>Security</span>&emsp;<span>Terms of us</span>e&emsp;<span>Accessibility</span>&emsp;<span>Safe Act:Chase Mortgage Loan Orginators</span>&emsp;<span>Fair Lending</span>&emsp;<span>About Chase</span>&emsp;<span>J.P Morgan</span>&emsp;<span>J.P Morgan Chase&amp;Co</span>&emsp;<span>Careers</span>&emsp;<span>Espanol</span><br/><br/><span>Chase</span>&emsp;<span>Site map</span>&emsp;<span>Member FDIC</span>&emsp;<span>Equal Housing Lender</span><br/><br/><span>&copy;2020 JPMorgan Chase&amp; Co.</span></h6>

        
    </div>
    </>
    )
}
export default Th;