import { Component } from "react";

const boosts = [
    {
        text : 'Unlimited design possibility'
    } , 
    {
        text : 'Completely responsive features'
    }
]

export default class Boost extends Component{
    render(){
        return (
            <section class="boost bg-soft-gray">
            <div class="container 
            flex 
            m-t-39 
            p-t-14 
            p-b-58 
            on-sm-flex-col 
            on-sm-row-gap-12 
            on-sm-m-t-20
            on-sm-p-b-14
            ">

                <div class="boost__img width-50 flex-shrink-0 on-sm-width-100">
                    <img src="assets/people-on-desk.svg" alt="Boost" />
                </div>

                <div class="boost__desc p-l-44 on-sm-width-100  on-sm-p-l-0">
                    <h2 class="boost__tile ff-2  fs-10 lh-1-5 m-b-7 on-sm-fs-8">We help you to boost your
                        business profitable with
                        our talent marketer</h2>
                    <p class="boost__text m-b-7">
                        Get your tests delivered at let home collect sample from the victory of the managments that
                        supplies best design system guidelines ever.
                    </p>
                    <ul class="boost__items">
                        {
                            boosts.map( boost =>{
                                return (
                                    <li class="boost__item">
                                        <i class="fa-solid fa-circle-check green-text m-r-1"></i>
                                        <span class="blue-2-text lh-2-8">{boost.text }</span>
                                    </li>
                                )
                            })
                        }
                        <li class="boost__item--read-more m-t-5">
                            <a href="#" class="blue-5-text">Explore Details <i class="fa-solid fa-angle-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        )
    }
}