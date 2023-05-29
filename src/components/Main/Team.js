import { Component } from "react";

export default class Team extends Component{

    render(){
        return (
            <section class="team">
            <div class="container p-t-21">
                <div class="max-width-248 m-x-auto">
                    <div class="team__head 
                align-center on-sm-align-left
                m-x-auto
                m-b-12
                ">
                    <h2 class="team__title
                    ff-2
                    m-b-7
                    fs-10 on-sm-fs-8
                    max-width-158
                    m-x-auto
                    ">
                        Meet our support team who always
                        work hardly behind the scenes
                    </h2>
                    <p class="team__text
                    max-width-140
                    m-x-auto
                    ">
                        Focus only on the meaning, we take care of the design. As soon as the
                        meeting end you can export in one click into your preferred.
                    </p>

                </div>

                <div class="team__img flex">
                    <img src="assets/team.webp" alt="Team" />
                </div>
                </div>

                <div class="team__contact bg-grayish-blue white-text max-width-322 m-x-auto p-y-12 p-x-20  on-sm-p-x-10 on-sm-p-y-6 on-sm-p-b-12 z-index-10">
                    <div class="flex ai-center on-sm-flex-col on-sm-row-gap-14">
                        <h4 class="team__contact--text fs-9 on-sm-fs-6 ff-2 width-126-rem m-r-12 on-sm-width-auto ">
                            Do you have any question? Feel
                            free to contact us
                        </h4>
                        <img src="assets/contac-curve.svg" alt="" class="team__contact--img m-r-18 on-sm-hide " />
                        <a href="#" class="team__contact--btn uppercase bg-white p-y-5 p-x-10 fw-600 on-sm-width-100 on-sm-align-center on-sm-fs-3">contact us now</a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}