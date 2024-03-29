//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { MemoryInterface, LayerMapping, ListInterface, LayerConnectors } from "./interfaces.sol";


abstract contract Stores {

  /**
   * @dev Return ethereum address
   */
  address constant internal ethAddr = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

  /**
   * @dev Return Wrapped ETH address
   */
  address constant internal wethAddr = 0x82aF49447D8a07e3bd95BD0d56f35241523fBab1;

  /**
   * @dev Return memory variable address
   */
  MemoryInterface constant internal layerMemory = MemoryInterface(0x79Ac9A5546693cBA774038dB9db3e6c9DA2c4f76);

  /**
   * @dev Return InstaList address
   */
  ListInterface internal constant layerList = ListInterface(0xB1017f5559F0cb53928D526179E8E10Ba7073bc8);

  /**
   * @dev Return connectors registry address
   */
  LayerConnectors internal constant layerConnectors = LayerConnectors(0x8AB22126876319A7246e8Fd01B5560FAe639Bceb);

  /**
   * @dev Get Uint value from LayerMemory Contract.
   */
  function getUint(uint getId, uint val) internal returns (uint returnVal) {
    returnVal = getId == 0 ? val : layerMemory.getUint(getId);
  }

  /**
  * @dev Set Uint value in LayerMemory Contract.
  */
  function setUint(uint setId, uint val) virtual internal {
    if (setId != 0) layerMemory.setUint(setId, val);
  }

}