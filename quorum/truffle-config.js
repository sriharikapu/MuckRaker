/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry')
// const infuraKey = "fj4jll3k.....";
//
const fs = require('fs');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*"     // Any network (default: none)
    },
    quorom: {
      provider: () => {
        const appCred = 'u0ahzrd4s2:EqEI3NkifBZbkR0w_9oBXe-I_ONiOJ2JgefmuJdscTE'; // from application credential widget
        const connectionURL = 'u0otleikl1-u0zommdzvc-rpc.us0-aws.kaleido.io'; // without protocol (https://)
        return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 10000000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 6500000,
      type: 'quorum' // Use this property for Quorum environments */
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.1",
      settings: {
        optimizer: {
          enabled: true
        }
      }
    }
  },
  plugins: ['oneclick']
};
