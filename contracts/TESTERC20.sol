// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
pragma solidity ^0.8.0;

contract TESTERC20 is ERC20PresetMinterPauser{
    uint8 private _decimals;
    constructor (string memory name_, string memory symbol_, uint8 decimals_) ERC20PresetMinterPauser(name_, symbol_) {
        _decimals = decimals_;
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}

