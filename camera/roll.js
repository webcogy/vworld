var roll;
    
function regRollEvent(){
    var eventRemover = map.onClick.addEventListener(rollEvent);  
}

function rollEvent( windowposition, ecefposition, cartographic, featureInfo ){
    var loc = new vw.CoordZ(vw.Util.toDegrees(cartographic.longitude), vw.Util.toDegrees(cartographic.latitude), 0);
    rollControl('setLocation',loc);
}

function rollControl(flag,loc){
    if(flag == 'setLocation'){
    if(roll == null){
        var a = new vw.Direction(90,0,0);
        var dp = new vw.DevicePosition(loc,a);
        roll = new vw.cameraAction.Roll(dp);  
        roll.setHeadingSpeed(10);
        roll.setTiltSpeed(5);
    }else{
        var a = new vw.Direction(90,0,0);
        var dp = new vw.DevicePosition(loc,a);      
            roll.setPosition(dp);         
    }    
    }else if(flag == 'start'){       
        roll.start();
    }else if(flag == 'stop'){
        roll.stop();
        // map.lookat.moveTo(mapOptions.initPosition); //초기위치이동
    }
}