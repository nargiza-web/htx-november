import React from 'react';
import { connect } from 'react-redux'

function DisplayCounter(props) {

  return (
    <div>{props.ctr}
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        // state.REDUCER.globalstateproperty
        ctr: state.ctrRed.counter  // props.ctr
    }
}

export default connect(mapStateToProps)(DisplayCounter);
