const Fortmatic = require('fortmatic')
import Web3 from 'web3'

const fm = new Fortmatic('');

const web3: Web3 = new Web3(fm.getProvider);

export default web3