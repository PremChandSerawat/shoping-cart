import * as React from 'react';
import { render } from 'react-dom';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track } from './component'; // example render components

const sliderStyle: React.CSSProperties = {
  margin:'auto',
  height:'50%',

  position: 'relative',
  width: '95%'
};

const railStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 7,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: 'rgb(155,155,155)'
};

const domain: number[] = [0, 500];

export default class Slider1 extends React.Component {
   state={
     values:[0,500],
   }
  constructor(props){
    super(props);
  }

changeState=(min,max)=>{
  console.log("child channge is called",min);
  console.log("child channge is called",max);
  console.log(values);
    this.setState({

      values:[this.props.min,this.props.max],
    });
    console.log("values",this.state.values);
}
componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
   render() {
    const {
      state: { values }
    } = this;

    return (
      <div style={{ height: 30, width: '100%' }}>
        <Slider
          mode={1}
          step={100}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={this.props.rangeChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}
