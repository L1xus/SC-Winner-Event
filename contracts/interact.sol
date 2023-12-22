// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Interact {
    function interact(address emmit_address) external {
        (bool success, ) = emmit_address.call(
            abi.encodeWithSignature("attempt()")
        );
        require(success);
    }
}
