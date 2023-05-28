import { Component } from "react";

const features = [
    {
        icon : 'fa-solid fa-store' , 
        title : 'Trusted marketplace' , 
        text : `Our homes are designed to be move-in ready.
        Think furnished common areas, super fast wifi, and flexible leases.`
    } , 
    {
        icon : 'fa-solid fa-gift' , 
        title : 'Trusted marketplace' , 
        text : `Our homes are designed to be move-in ready.
        Think furnished common areas, super fast wifi, and flexible leases.`
    } , 
    {
        icon : 'fa-solid fa-trophy' , 
        title : 'Trusted marketplace' , 
        text : `Our homes are designed to be move-in ready.
        Think furnished common areas, super fast wifi, and flexible leases.`
    }
]

export default class Features extends Component{

    render(){
        return (
            <section className="container">
            <section className="features">

                <div className="features__head align-center m-b-35 on-sm-m-b-13 on-sm-m-t-13">
                    <h2 className="features__title ff-2 fs-7 lh-1-7 m-b-3 blue-2-text on-sm-fs-6">Go Beyond unlimited
                        features</h2>
                    <p className="features__subtitle m-x-auto lh-2-2 on-sm-lh-1-5">Focus only on the meaning, we take care
                        of the design. As soon as the meeting end you can export in one click into your preferred
                        format.</p>
                </div>

                <div className="features__body">
                    <div className="features__list flex col-gap-15 on-sm-flex-col on-sm-row-gap-12">

                        {
                            features.map( feature => {
                                return (
                                    <div className="feature flex col-gap-7">
                                        <span className="feature__logo fs-12">
                                            <i className={feature.icon}></i>
                                        </span>
            
                                        <div className="feature__body">
                                            <h4 className="feature__title m-b-4 fs-5">{feature.title}</h4>
                                            <p className="feature__text fs-4 on-sm-lh-1-5">{feature.text}</p>
                                        </div>
            
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>



            </section>
        </section>

        )
    }
}