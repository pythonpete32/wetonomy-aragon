pragma solidity 0.4.18;

import "@aragon/os/contracts/apps/AragonApp.sol";

contract DummyApp is AragonApp {
    ////
    ////               ....
    ////           .,,,,..,,,,.
    ////       ..,,.. ..     .,,,..
    ////     .,,.  ..,:....,,..  .,,.
    ////    ,:   ...,.    .,,..,.   :,
    ////    .:. ,. ,           ,.. .:.
    ////     ,:,.  ..        .,,., :,
    ////      ,;.   ........,..,..:,
    ////       ,:.       .. .....:,
    ////        .:,           .::.
    ////          .,,.      .,,.
    ////            .,,,..,,,.
    ////               ....
    ////
    ////  Build something beautiful.
    function initialize(string _name) onlyInit {
        initialized();
    }
}
