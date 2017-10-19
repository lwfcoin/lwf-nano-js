/*
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
/**
 * Multisignature module provides functions for creating multisignature group registration
 * transactions, and signing transactions requiring multisignatures.
 * @class multisignature
 */
import cryptoModule from '../crypto';
import { SEND_FEE } from '../constants';
import { prepareTransaction } from './utils';
import { getTimeWithOffset } from './utils/time';

/**
 * @method sendFromMultisignatureAccount
 * @param {Object} Object - Object
 * @param {String} Object.recipientId
 * @param {String} Object.amount
 * @param {String} Object.secret
 * @param {String} Object.secondSecret
 * @param {String} Object.requesterPublicKey
 * @param {Number} Object.timeOffset
 *
 * @return {Object}
 */

export default function sendFromMultisignatureAccount({
	recipientId,
	amount,
	secret,
	secondSecret,
	requesterPublicKey,
	timeOffset,
}) {
	const keys = cryptoModule.getKeys(secret);

	const transaction = {
		type: 0,
		amount: amount.toString(),
		fee: SEND_FEE.toString(),
		recipientId,
		senderPublicKey: keys.publicKey,
		requesterPublicKey: requesterPublicKey || keys.publicKey,
		timestamp: getTimeWithOffset(timeOffset),
		asset: {},
		signatures: [],
	};

	return prepareTransaction(transaction, secret, secondSecret);
}