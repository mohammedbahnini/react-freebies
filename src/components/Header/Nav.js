import React, { Component } from 'react';



export default class Nav extends Component{
    render(){

        const links = [
            {
                text : 'Princing' , 
                class : 'links__item' , 
                anchorClass : ''
            } , 
            {
                text : 'Support' , 
                class : 'links__item' , 
                anchorClass : ''
            } , 
            {
                text : 'Register' , 
                class : 'links__item' , 
                anchorClass : ''
            } , 
            {
                text : 'Get Started' , 
                class : 'links__item links__item--active links__item--get-started' , 
                anchorClass : 'fw-600'
            }
        ];


        return (
            <nav class="p-t-6 flex ai-center jc-space-between on-sm-flex-col on-sm-row-gap-4">
            <a href="#" class="logo">
                <img src="assets/logo.svg" alt="Logo" />
            </a>

            <ul class="links flex ai-center col-gap-3">
                {
                    links.map( link =>{
                        return (
                            <li className={link.class}>
                                <a className={link.anchorClass + ' blue-1-text'}>{link.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>

        )
    }
}