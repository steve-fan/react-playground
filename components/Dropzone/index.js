import React from 'react'
import style from './style'

class Dropzone extends React.Component {
  render() {
    return <div className={style.root}>Drag files here or click to upload files.</div>
  }
}

export default Dropzone;
