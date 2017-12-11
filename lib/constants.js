/**
 * `constants` are the objects containing information about the fee size for different tranasctions.
 *
 * @property constants
 * @static
 * @type object
 */

module.exports = {
	fees: {
		send: 10000000,
		signature: 10000000,
		delegate: 500000000,
		vote: 100000000,
		multisignature: 100000000,
		dapp: 2500000000
	},
	fee: {
		0: 10000000,
		1: 10000000,
		2: 500000000,
		3: 100000000,
		4: 100000000,
		5: 2500000000
	}
};
