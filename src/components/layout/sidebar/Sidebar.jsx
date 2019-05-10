import React,{Component} from 'react';
import $ from 'jquery';
import 'jquery.scrollbar';

import User from './user/User';
import Nav from './nav/Nav';

import Div from './../../tags/Div'

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={
            panel:{
                User:{},
                Nav:{}
            }
        };
        // console.log(props);
    }

    render(){
        return(
            <Div panel={{class:"sidebar"}} tag-role="Sidebar-Div">
                <Div panel={{class:"scrollbar-inner sidebar-wrapper"}} tag-role="Sidebar-Inner-Div">
                    <User panel={
                        this.props.panel?
                        this.props.panel.User:
                        this.state.panel.User
                        }
                    />
                    <Nav panel={
                            this.props.panel?
                            this.props.panel.Nav:
                            this.state.panel.Nav
                        }
                    />
                </Div>
            </Div>
        );
    }

    componentDidMount(){
        $('.scrollbar-inner').scrollbar();
    }
}

export default Sidebar;