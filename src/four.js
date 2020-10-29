import React from 'react';
import './four.css';
function Fou(){
    return(
        <>
        <div class='foudiv1'>
            <div>&#x2630;</div>
            <div>O</div>
            <div>Espanol</div>
        </div>
        <div class='fobx'>
            <div class='fobx1'><h4>? Questions?</h4>&emsp;check out our <a href='#'>FAQs</a></div>
            <div class='fobx2'>
               <h5>Getting started</h5> <br/>
               <h3>Thanks for Enrolling</h3>
               We need a bit more info to verify your identity <br/>
               <div class='foic'>
                   <div><div class='focirc'><span class='fospn'>&#128179;</span></div>Your security number or <br/>Tax ID number</div>
                   <div><div class='focirc'><span class='fospn'>&#x1F4F1;</span></div>Any account or application<br/> number</div>
                   <div><div class='focirc'><span class='fospn'>&#x1F4F1;</span></div>Access to the phone or email <br/> you told us</div>
               </div><br/>
               <a href='#'><u>Already enrolled?Sign in now</u></a> <br/><br/><br/>
               <h3>Tell us more about you</h3>
               Which type of account would you like to access online?&#x1F6C8; <br/>
               <input type='radio'/>&emsp; Personal&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
               <input type='radio'/>&emsp; Business&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
               <input type='radio'/>&emsp;Commercial   <br/><br/> <br/>         
                Account, card or application number &#x1F6C8;<br/> <br/>
                _________________________________________________ <br/><br/>
                Social security number&#x1F6C8;__________________________________<br/><br/><br/>
            </div>
        </div>
        <div class='foform'>
            <ol class='fool'>
                <li><b>1 Intiate</b><br/>Capture details</li>
                <li><b>2 Add Product</b><br/>Add products</li>
                <li><b>3 Approval</b><br/>Waiting for approval</li>
                <li><b>4 Customer Agreement</b><br/>Docu Sign</li>
                <li><b>5 Completed</b><br/>Completed</li>
            </ol>
            <form class='foform'>
                <label>Company Name</label><br/> <input type='text' value='Company Name'/> <br/>
                <label>Certificate of Formation</label><br/> <input type='file' /> <br/>
                <h4>Transaction Limit</h4>
                <label>Inflow Volume</label><br/> <input type='text' value='Inflow Volume'/> <br/>
                <label>Total Inflow value per year</label><br/> <input type='text' value='Total Inflow value per year'/> <br/>
                <label>Outflow Volume</label><br/> <input type='text' value='Outflow Volume'/> <br/>
                <label>Total Outflow value per year</label><br/> <input type='text' value='Total Outflow value per year'/> <br/>
            </form>
        </div><br/>
        <input id='foip' type='checkbox'/> I agree the Terms and Conditions <br/><br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button class='btn btn-warning'>Submit</button> <br/><br/><br/><br/>
        <div class='foform1'>
            <ol class='fool'>
                <li><b id='tick'> Intiate</b><br/>Capture details</li>
                <li><b>2 Add Product</b><br/>Add products</li>
                <li><b>3 Approval</b><br/>Waiting for approval</li>
                <li><b>4 Customer Agreement</b><br/>Docu Sign</li>
                <li><b>5 Completed</b><br/>Completed</li>
            </ol>
            <form class='fofo2'>
                <h3>Registration Address</h3>
                <label>Address Line 1</label><br/>
                <input type='text' value='18500 Von Karman Ave'/><br/>
                <label>Address Line 2</label><br/>
                <input type='text' value='Ste 550 Irvine'/><br/>
                <label>City</label><br/>
                <input type='text' value='Irvine'/><br/>
                <label>Country</label><br/>
                <input type='text' value='United States'/><br/>
            </form>
        </div>
        <div><br/>
        <h3>&emsp;&emsp;&emsp;&emsp;Products</h3>
        <table border='2' id='fotab'>
            <tr>
                <td>Include</td><td>Product ID</td><td>Product Name</td><td>Product Category</td>
            </tr>
            <tr>
                <td><input type='checkbox'/></td><td>K-1225</td><td>Security</td><td>Global Corporate Finance</td>
            </tr>
            <tr>
                <td><input type='checkbox'/></td><td>K-228</td><td>Correspondent Account</td><td>Global Transaction Banking</td>
            </tr>
        </table> <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button class='btn btn-warning'>Submit</button>
        </div><br/><br/>
        <div class='foform1'>
        <ol class='fool'>
                <li><b id='tick'> Intiate</b><br/>Capture details</li>
                <li><b id='tick'> Add Product</b><br/>Add products</li>
                <li><b>3 Approval</b><br/>Waiting for approval</li>
                <li><b>4 Customer Agreement</b><br/>Docu Sign</li>
                <li><b>5 Completed</b><br/>Completed</li>
            </ol>
        </div>
        <div class='fofin'>
            <h4>Waiting for approval</h4>Please wait until the request has been approved
        </div><br/><br/>

        </>
    )
}
export default Fou;