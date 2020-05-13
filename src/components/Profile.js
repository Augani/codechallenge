import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Profile () {
  return (
    <div className='pMain'>
      <div className='card'>
        <div className='heading'>
        <img
            className='image'
            src='https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard
'
          />
        </div>
        <div className='mid'>
            <div className="ids">
                <div className="name">
                    Fullname
                    <p>Super Admin</p>      
                </div>
                <div className="email">
                    Email
                    <p>super admin</p>
                </div>
            </div>
            <div className="editP">
                Edit profile
            </div>
        </div>
        <div className='beneath'></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
