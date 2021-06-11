import React, {Component} from 'react'
import './Preloader/preloader.css'

class Preloader extends React.Component {
  render() {
      return <div className={'backgrnd'}>
      <div className={'lds-default'}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      </div>
  }
}

export default Preloader