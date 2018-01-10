import React, { Component } from 'react'

export default class BasicDisplay extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      keyClassName: '',
      valueClassName: ''
    }
  }
  render()
  {
    const { keyProfile, valueProfile } = this.props
    return (
      <div>
        <p className="keyprofile">{keyProfile}</p>
        <p className="valueprofile">{valueProfile}</p>
      </div>
    )
  }
}
