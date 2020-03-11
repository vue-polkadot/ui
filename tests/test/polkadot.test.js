const { expect } = require('chai');
const { ApiPromise, WsProvider } = require('@polkadot/api');

describe("@polkadot/api", async () => {
  it("should connect to Kusama Node (Parity)", async () => {
    const provider = new WsProvider('wss://kusama-rpc.polkadot.io/');
    const api = await ApiPromise.create({ provider });
    const chain = await api.rpc.system.chain()
    expect(chain.toString()).to.equal('Kusama CC3');
  });
  
  it("should connect to Substrate (Parity)", async () => {
    const provider = new WsProvider('wss://substrate-rpc.parity.io/');
    const api = await ApiPromise.create({ provider });
    const chain = await api.rpc.system.chain()
    expect(chain.toString()).to.equal('Flaming Fir');
  });
});
