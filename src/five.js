import React from 'react';
import './five.css';
import bg from './bg.png'
import fi from './fin.jpg'
function Fiv(){
    return(
        <>
        <div class='fibg'><img src={bg}/>
            <div class='fitx'><h4>Bank &emsp;Treasury &emsp;Lending&emsp; F/X services &emsp;Investments</h4></div>
                <div class='fitx1'><h2>Hello Donna</h2>
                <div class='final'>
                    <h3>Items for review &emsp; &emsp;&emsp;&emsp;&emsp;&#x21bb;</h3> <br/> <span id='fivsp'>Unapplied Deposit: $950,00.00 on 09/18/2019 - Account ********300000</span>
                    <br/><br/><div><h3>Cash projections&emsp;&emsp;&emsp;&emsp;&emsp;Income&emsp;Cost&emsp; Balance</h3>Past 5 months</div>
                <div class='fibx'></div> <br/>
                <h3>Accounts</h3>
                <table  class="table table-bordered">
                    <tr> <td>Account Number</td> <td>Name</td> <td>Type</td>< td>Balance</td> </tr>
                    <tr> <td>******65464</td> <td>Disbursement Account</td> <td>Zero Balance</td> <td>$300,354</td></tr>
                    <tr> <td>******35165</td> <td>Operating account</td> <td>DDA</td>  <td>$564,545</td> </tr>
                    <tr> <td>******65456</td> <td>Customer Payment Account</td> <td>Sweep</td>  <td>$43,3565</td>
                    </tr>
                </table>
                </div>
            </div>
            <div class='fitx2'>
                <div class='fiwh'>
                    <img src={fi}/>
                    <h3>Business services</h3><br/>
                    Engage our dedicated Business <br/>Services team to provide<br/>
                    Specialist support access <br/> business process outsourcing <br/>(BPO), facilities management <br/>
                    recruitment, technical services <br/> and more.<br/><br/>Learn more<br/><br/><br/><br/>
                    <h4>Key rates</h4><br/>
                    This week &emsp; 52wk high &emsp; 52wk low<br/><br/>
                    Tresury Bills(90day)<br/>
                    &uarr; 2.43 &emsp; &emsp;2.67 &emsp; &emsp;1.75 <br/><br/>
                    Commercial paper(90day)<br/>
                    &darr; 2.43 &emsp;&emsp; 2.67 &emsp;&emsp; 1.99 <br/><br/>
                    Federal funds (overnight)
                </div>
            </div>
        </div>
        
        </>)
}
export default Fiv;