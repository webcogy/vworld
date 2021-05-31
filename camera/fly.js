var fly = null;
function startFly()
{
    isCameraAnimation = true;

    fly = new vw.cameraAction.Fly();
    fly.setSpeed(100);
    fly.start();
}

function stopFly()
{
    if(isCameraAnimation)
    {
        fly.stop();
        isCameraAnimation = false;
    }
}

function flyControl(flag, val){
  if(isCameraAnimation){
    switch(flag){
    case 'speed' :
      fly.setSpeed(val==0?val:fly.getSpeed()+val);
      break;
    case 'heading' :
      fly.setHeadingSpeed(val==0?val:fly.getHeadingSpeed()+val);
      break;
    case 'tilt' :
      fly.setTiltSpeed(val==0?val:fly.getTiltSpeed()+val);
      break;
    case 'roll' :
      fly.setRollSpeed(val==0?val:fly.getRollSpeed()+val);
      break;
    }
  }
}