import { Component } from "react";

export default class Users extends Component {

    render(){
        return (
            <section class="users 
            m-t-45
            on-sm-m-t-20
            ">
                <div class="container max-width-230">
                    <div class="users__head 
                    max-width-158 
                    m-x-auto
                    align-center
                    on-sm-align-left
                    m-b-28
                    on-sm-m-b-13
                    ">
                        <h2 class="users__title 
                    ff-2  
                    fs-10 l
                    h-1-5 
                    m-b-6
                    on-sm-fs-8
                    ">More than thousand of user we have
                            worldwide with happy feedback</h2>
                        <p class="users__text">Focus only on the meaning, we take care of the design. As soon as the
                            meeting end you can export in one click into your preferred.
                        </p>
                    </div>
    
                    <div class="users__img">
                        <img src="assets/network.svg" alt="Users" />
                    </div>
    
                </div>
            </section>
        )
    }
}