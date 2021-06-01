var rotate;
    
function regRotateEvent(){
    var eventRemover = map.onClick.addEventListener(rotateEvent);  
}

function rotateEvent( windowposition, ecefposition, cartographic, featureInfo ){
    var loc = new vw.CoordZ(vw.Util.toDegrees(cartographic.longitude), vw.Util.toDegrees(cartographic.latitude), 0);
    rotateControl("setLocation",loc, cartographic.height);
}

function rotateControl(flag,loc,_altitude){
    if(flag == "setLocation"){
    if(rotate == null){
        rotate = new vw.cameraAction.Rotate(loc, _altitude);
        rotate.setSpeed(-10);
    }else{      
            rotate.setTarget(loc);
            rotate.setDistance(_altitude);
    }    
    }else if(flag == "start"){       
        rotate.start();
    }else if(flag == "stop"){
        rotate.stop();
    }
}