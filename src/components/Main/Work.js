import { Component } from "react";

const steps = [
    {
        visibleIndex :  '01' , 
        title : 'Connect with support' , 
        text : ` Our homes are designed to be move-in ready. Think furnished common areas, super fast
        wifi, and flexible leases.`
    } , 
    {
        visibleIndex :  '02' , 
        title : 'Explain you business idea' , 
        text : `Our homes are designed to be move-in ready. Think furnished common areas, super fast
        wifi, and flexible leases.`
    } , 
    {
        visibleIndex :  '03' , 
        title : 'Be partner & earn money' , 
        text : `Our homes are designed to be move-in ready. Think furnished common areas, super fast
        wifi, and flexible leases.`
    }
]; 


export default class Work extends Component{

    render(){
        return (
            <section class="work bg-soft-gray">
            <div class="container
            p-t-21
            p-b-21
            ">
                <div class="work__head
                max-width-146
                align-center
                m-b-35
                m-x-auto
                on-sm-m-b-13
                ">
                    <h2 class="work__title 
                    ff-2
                    lh-1-6
                    m-b-1
                    ">Let’s meet how its work</h2>
                    <p class="work__text">
                        Focus only on the meaning, we take care of the design. As soon as the meeting end you can export
                        in one click into your preferred format.
                    </p>
                </div>

                <div class="work__steps 
                max-width-317
                flex
                col-gap-15
                m-x-auto
                on-sm-flex-col
                on-sm-row-gap-12
                ">

                {
                    steps.map( step => {
                        return (

                            <div class="work__step
                            flex
                            ai-start
                            ">
                                <h3 class="step__number
                                fs-12
                                fw-100
                                lh-1
                                on-sm-width-60-rem
                                width-40-rem
                                ">{step.visibleIndex}</h3>
                                <div class="flex-grow-1">
                                    <h4 class="step__title 
                                    fs-5
                                    m-b-4
                                    lh-1
                                    ">{step.title}</h4>
                                    <p class="step__text">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        </section>
        )
    }
}