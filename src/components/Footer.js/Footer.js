import { Component } from "react"

export default class Footer extends Component{
    render(){
        return(
            <footer class=" bg-soft-gray">
            <div class="container p-t-41 on-sm-p-t-50 p-b-21 p-x-45 flex on-sm-flex-col on-sm-p-x-4">
    
                <div class="info m-r-23 on-sm-m-r-0 on-sm-m-b-12 on-sm-align-center">
                    <div class="info__log m-b-6 on-sm-m-b-4">
                        <img src="assets/logo.svg" alt="Logo" />
                    </div>
                    <div class="info__links blue-1-text m-b-5 on-sm-m-b-4 ">
                        <a href="#" class="p-r-4">Terms of use</a>
                        <a href="#" class="p-l-4">Privacy</a>
                    </div>
                    <div class="info__copy blue-4-text ">
                        <p>Copyright by 2019 Redq, Inc</p>
                    </div>
                </div>
    
                <div class="about m-r-18 on-sm-m-r-0 on-sm-m-b-12 on-sm-align-center">
                    <h5 class="abou__title fs-5 m-b-7 on-sm-m-b-4">About Us</h5>
                    <ul>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Support Center</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Customer Support</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Copyright</a>
                        </li>
                    </ul>
                </div>
    
                <div class="ourinfo m-r-18 on-sm-m-r-0 on-sm-m-b-12 on-sm-align-center">
                    <h5 class="ourinfo__title fs-5 m-b-7 on-sm-m-b-4">Our Information</h5>
                    <ul>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Return Policy </a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Privacy Policyt</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Site Map</a>
                        </li>
                    </ul>
                </div>
    
    
                <div class="account m-r-18 on-sm-m-r-0 on-sm-m-b-12 on-sm-align-center">
                    <h5 class="acount__title fs-5 m-b-7 on-sm-m-b-4">My Account</h5>
                    <ul>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Press inquiries</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Social media </a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">directories</a>
                        </li>
                        <li>
                            <a href="#" class="lh-3 on-sm-lh-2">Images & B-roll</a>
                        </li>
                    </ul>
                </div>
    
                <div class="connect on-sm-align-center ">
                    <h5 class="connect__title fs-5 m-b-7">Connect</h5>
                    <ul>
                        <li>
                            <a href="#" class="flex ai-center lh-3 on-sm-lh-2 on-sm-jc-center">
                                <img src="assets/social/facebook.svg" alt="Facbook" class="m-r-2" /> Facbook
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex ai-center lh-3 on-sm-lh-2 on-sm-jc-center">
                                <img src="assets/social/twitter.svg" alt="Twitter" class="m-r-2  " />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex ai-center lh-3 on-sm-lh-2 on-sm-jc-center">
                                <img src="assets/social/github.svg" alt="Github" class="m-r-2" /> Github
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex ai-center lh-3 on-sm-lh-2 on-sm-jc-center">
                                <img src="assets/social/dribble.svg" alt="Dribble" class="m-r-2" /> Dribble
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        )
    }
}