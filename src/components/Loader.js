import { Component } from "react";
import svgLoader  from './loader.svg';
import './../scss/custom/_loader.scss';



export default class Loader extends Component {
    render(){
        const { isLoading  , isLoaded} = this.props ; 

        return (
            <div className={`loader ${isLoading == false ? 'fade-out' : ''} `}>
                <img  src={svgLoader} />
            </div>
        )
    }
}