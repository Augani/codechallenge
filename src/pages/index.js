import React, {PureComponent} from 'react';
import './index.css';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom';
import Profile from '../components/Profile'
import Help from '../components/Help';
class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    renderPage = route =>{
        switch(route){
            case "/Profile":
                return <Profile/>;
             case "/Help":
                 return <Help/>;
             default:
                 return <Profile/>;     
        }
    }

    render() {
        if(this.props.location.pathname == "/")return <Redirect to="/Profile"/>;
        
        return(
            <div className="main">
            <SideNav/>
            <div className="content">
            <Navbar/>
            <div className="restOfPage">
                {this.renderPage(this.props.location.pathname)}
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
