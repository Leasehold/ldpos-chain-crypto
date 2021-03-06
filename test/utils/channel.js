class Channel {
  async invoke() {
    return {
      address: 'ldpos313ac2d3d1d081901be0c5ce074d1e81a8a0bf5f',
      forgingPublicKey: '65afbf3e6e0f1b99bd595852ab59e9d54cd6ebffad3fb3608d6f084534938757',
      nextForgingKeyIndex: 0,
      multisigPublicKey: '9cd1cb3923eaf015762a6a2c44f224004060f60e4b12c27f61489685742e1c11',
      nextMultisigKeyIndex: 0,
      sigPublicKey: '313ac2d3d1d081901be0c5ce074d1e81a8a0bf5fe29515ac2d349cfa2f5b3b10',
      nextSigKeyIndex: 0,
      balance: '10000000000000000',
      updateHeight: 1
    };
  }
}

module.exports = Channel;
