import React, {PureComponent} from 'react';
import './index.css';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';

import { connect } from 'react-redux'

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return(
            <div className="main">
            <SideNav/>
            <div className="content">
            <Navbar/>
            </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
