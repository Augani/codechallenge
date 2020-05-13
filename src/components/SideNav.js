import React from 'react'
import { connect } from 'react-redux'
import Logo from '../app_logo.png'
import { withRouter, Link } from 'react-router-dom'

function SideNav (props) {
  const links = ['Profile', 'Help']

  return (
    <div className='sideNav'>
      <div className='logoHolder'>
        <img className='logo' src={Logo} />
      </div>
      <div className='sideLinks'>
        {links.map((link, i) => (
          <div key={i} className='links'>
            <Link
              to={'/' + links[i]}
              className={`link ${
                props.location.pathname == '/' + links[i] ? 'active' : ''
              }`}
            >
              {link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideNav))
