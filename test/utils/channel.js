class Channel {
  async invoke() {
    return {
      address: '5c75e6041a05d266914cbf3837da81e29b4a7e66b9f9f8804809e914f6012293ldpos',
      forgingPublicKey: 'kDV3ud1DL6FbTE5P+lXLzjmCRaNgHbzvKCxX6LPcTIU=',
      nextForgingKeyIndex: 0,
      multisigPublicKey: 'kIMXds9V3k2ArVXiCkO9zMZthMG0gxaJD5nkUGvr1jA=',
      nextMultisigKeyIndex: 0,
      sigPublicKey: 'XHXmBBoF0maRTL84N9qB4ptKfma5+fiASAnpFPYBIpM=',
      nextSigKeyIndex: 0,
      balance: '10000000000000000',
      updateHeight: 1
    };
  }
}

module.exports = Channel;
