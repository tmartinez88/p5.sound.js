// https://github.com/Tonejs/Tone.js/blob/r10/Tone/signal/Multiply.js

import Gain from './Gain';
// import Signal from './Signal';

/**
*  @class  Multiply two incoming signals. Or, if a number is given in the constructor,
*          multiplies the incoming signal by that value.
*
*  @constructor
*  @extends {Tone.Signal}
*  @param {number=} value Constant value to multiple. If no value is provided,
*                         it will return the product of the first and second inputs
*  @example
* var mult = new Tone.Multiply();
* var sigA = new Tone.Signal(3);
* var sigB = new Tone.Signal(4);
* sigA.connect(mult, 0, 0);
* sigB.connect(mult, 0, 1);
* //output of mult is 12.
*  @example
* var mult = new Tone.Multiply(10);
* var sig = new Tone.Signal(2).connect(mult);
* //the output of mult is 20.
*/

class SignalMultiply {
  constructor() {
    this.createInsOuts(2, 0);
    /**
		 *  the input node is the same as the output node
		 *  it is also the GainNode which handles the scaling of incoming signal
		 *
		 *  @type {GainNode}
		 *  @private
		 */
    this._mult = this.input[0] = this.output = new Gain();

    /**
		 *  the scaling parameter
		 *  @type {AudioParam}
		 *  @private
		 */
    this._param = this.input[1] = this.output.gain;

    this._param.value = this.defaultArg(value, 0);
  }

  /**
	*  clean up
	*  @returns {Multiply} this
	*/
  dispose() {
    this._mult.dispose();
    this._mult = null;
    this._param = null;
    return this;
  }
}

export default SignalMultiply;
