// Code your solution in this file!


function distanceFromHqInBlocks(destinationBlockNum){
    // takes pickup location
    // returns number of blocks
    
    // return someValue-42;
    return Math.abs(destinationBlockNum-42);
}

function distanceFromHqInFeet(blockNum){
    // returns distance in feet

    return distanceFromHqInBlocks(blockNum)*264;
}
function distanceTravelledInFeet(startingBlock, endingBlock){
    // returns number of ft traveled
    return Math.abs((endingBlock - startingBlock)*264);
}
function calculatesFarePrice(startingBlock, endingBlock){
    // store the actual distance I can charge
    /*
    const chargeableDistance = (distanceTravelledInFeet(startingBlock,endingBlock)-400);
    if(chargeableDistance < 400){
        // this is free
        console.log(`${chargeableDistance} is the distance we are charging`);
        return 0;
    }
    else if (chargeableDistance > 400 && chargeableDistance < 2000){
        // this is 2c (.02 of $1 (1.00) ) per foot
        return chargeableDistance*0.02;
    }
    else if(chargeableDistance > 2000 && chargeableDistance < 2500){
        // this is a flat fee of $25
        return 25;
    }
    else {
        // too far
        return 'cannot travel that far'
    }
    */
   if(distanceTravelledInFeet(startingBlock,endingBlock) < 400){
        // free rides
        return 0;
   }
   else if (distanceTravelledInFeet(startingBlock,endingBlock) > 400 && distanceTravelledInFeet(startingBlock,endingBlock) < 2000){
       // 2c per feet
       return (distanceTravelledInFeet(startingBlock,endingBlock)-400)*0.02;
   }
   else if (distanceTravelledInFeet(startingBlock,endingBlock) > 2000 && distanceTravelledInFeet(startingBlock,endingBlock) < 2500){
       // $25 flat fee
       return 25;
   }
   else {
    // too far
    return 'cannot travel that far'
}
}