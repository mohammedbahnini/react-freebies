import { Component } from "react";


export default class Knowledge extends Component{
    render(){
        return (
            <section class="knowledge 
            m-t-27 
            on-sm-m-t-20
            ">
                <div class="container 
                flex 
                max-width-296
                on-sm-flex-col
                ">
                    <div class="konwledge__desc 
                    width-50 
                    p-r-10
                    on-sm-width-100
                    on-sm-m-b-7
                    ">
                        <h2 class="knowledge__title 
                        ff-2  
                        fs-10 
                        lh-1-5 
                        m-b-1 
                        on-sm-fs-8
                        ">we are committed to using
                            fact-based knowledge to
                            our customers</h2>
                        <p class="knowledge__text 
                        lh-2-7 
                        m-b-6
                        on-sm-lh-1-5
                        ">Get your tests delivered at let home collect sample from the
                            victory of the managments that supplies best design system guidelines ever. Get your tests
                            delivered at let home collect sample.</p>
                        <a href="#" class="knowledge__link blue-5-text">
                            Explore Details <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
    
                    <div class="knowledge__img width-50 
                    z-index-10
                    on-sm-width-100">
                        <img src="assets/mobile.svg" alt="Fact-based knowledge" />
                    </div>
                </div>
            </section>
        )
    }
}