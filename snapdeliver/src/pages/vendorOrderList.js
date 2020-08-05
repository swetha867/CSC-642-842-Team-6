import React from "react";
import "../css/vendororder.css"
import {Link} from 'react-router-dom';

const vendorOrderList = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bgg-light">
                <img className="snap-logo card-img-top" src={require(`../images/snaplogo.png`)} alt=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item active">
                            <a className="nav-link homepage" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>

                    </ul>

                </div>

                <div>
                    <ul>
                        <a href="/login"><button type="button" class="btn btn-primary button-space">My Orders</button></a>

                        <button type="button" class="btn btn-primary button-space">Log out</button>
                    </ul>
                </div>
            </nav>


            <div className="container">
                <h2>Order Lists</h2>
                <p> Order listed from the most recent to the least recent one</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Status</th>
                        <th>Date</th>
                        <th>More Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>#11232434337</td>
                        <td>Amanda</td>
                        <td>Open</td>
                        <td>08/03/2020</td>
                        <td> <button type="button" className="btn btn-info">View</button> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>#88647847323</td>
                        <td>John</td>
                        <td>Open</td>
                        <td>08/03/2020</td>
                        <td> <button type="button" className="btn btn-info">View</button> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>#11232343433</td>
                        <td>Ariana</td>
                        <td>Closed</td>
                        <td>08/02/2020</td>
                        <td> <button type="button" className="btn btn-info">View</button> </td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>#13572434335</td>
                        <td>David</td>
                        <td>Delivered</td>
                        <td>08/02/2020</td>
                        <td> <button type="button" className="btn btn-info">View</button></td>

                    </tr>

                    <tr>
                        <td>5</td>
                        <td>#13572534339</td>
                        <td>Kyle</td>
                        <td>Delivered</td>
                        <td>08/02/2020</td>
                        <td> <button type="button" className="btn btn-info">View</button> </td>

                    </tr>

                    <tr>
                        <a className= "alignment" href="">View More</a>

                    </tr>

                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default vendorOrderList;