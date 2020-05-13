import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function Navbar (props) {
  const Page = props.location.pathname.replace('/', '')

  return (
    <div className='topNav'>
      <div className='pageName'>{Page}</div>

      <div className='config'>
        <div className='icon'>
        <FontAwesomeIcon icon={faBell} />
        </div>
        <div className='title'>
          <h4>Super Admin</h4>
          <p>Super Admin</p>
        </div>
        <div className='imageH'>
          <img
            className='image'
            src='https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard
'
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
