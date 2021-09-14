#! /usr/bin/bash
echo "will copy json file to project for abi and contracts address."

if [ $# -eq 1 ]
then
    if [ ! -d $1 ] 
    then
        echo  $1 "not found."
    else
        echo "*** dest path is " $1
        cp -v -i ./artifacts/contracts/ViolasNft1155.sol/ViolasNft1155.json $1
        cp -v -i ./artifacts/contracts/ViolasNft721.sol/ViolasNft721.json $1
        
        echo "*** cp violas contracts info file."
        cp -v -i ./jsons/contracts/vlscontract_internal.json $1
        cp -v -i ./jsons/contracts/vlscontract_external.json $1
    fi 
else
    echo "input dest path"
fi
