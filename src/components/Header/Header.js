import React , { Component , Fragment } from 'react';
import Nav from './Nav';


export default class Header extends Component{
    render(){
        return (
            <header>
            <div class="container">
               <Nav />
    
            </div>
    
            <div class="container intro m-t-20 flex jc-space-between on-sm-flex-col on-sm-flex-col-reverse on-sm-m-t-10">
                <div class="intro__desc width-44 on-sm-width-100 p-r-2 on-sm-align-center">
                    <h1 class="intro__desc--title ff-2 fs-15 m-b-4 on-xlg-fs-12 on-sm-fs-8">A Creative way to grow your
                        Exciting Business model</h1>
                    <p class="intro__desc--text blue-2-text m-b-6 p-r-24 fs-5  on-sm-fs-4 on-sm-p-r-0 lh-2-3 on-sm-lh-1-5">
                        Get your blood tests delivered at let home collect sample from the victory of the managments that
                        supplies best
                        design system guidelines ever.</p>
                    <form class="flex width-100 col-gap-4 p-r-24 on-sm-flex-col on-sm-p-r-0 on-sm-row-gap-4">
                        <input type="email" placeholder="Enter Email address" class="block blue-4-text fs-5 on-sm-fs-4" />
                        <input type="submit" value="Subscribe" class="block white-text bg-red align-center on-sm-fs-4 fs-5" />
                    </form>
    
                    <div class="sponsors m-t-8 flex col-gap-5 p-r-24 ai-center on-sm-p-r-0 on-sm-flex-col on-sm-row-gap-4 ">
                        <p class="blue-4-text ">Sponsored by:</p>
                        <div class="sponsors__imgs flex col-gap-7">
                            <div class="sponsor__imgs--img">
                                <img src="assets/companies/paypal.svg" alt="Paypal" />
                            </div>
                            <div class="sponsor__imgs--img">
                                <img src="assets/companies/google.svg" alt="Paypal" />
                            </div>
                            <div class="sponsor__imgs--img">
                                <img src="assets/companies/dropbox.svg" alt="Paypal" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro__img width-55 on-sm-width-100">
                    <img src="assets/header-img.svg" alt="" />
                </div>
            </div>
        </header>
        )
    }
}
                                                            