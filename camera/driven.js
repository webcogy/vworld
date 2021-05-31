/**
 * 관련 레퍼런스
    클래스	함수	반환값	                    설명
    vw.cameraAction.Drive 클래스	speed()	 	카메라 이동 속도 
    vw.cameraAction.Drive 클래스	headingSpeed()	 	카메라 heading방향의 회전 속도 
 * 
 */

var drive;
function startDrive()
{
    if(drive == null){
    drive = new vw.cameraAction.Drive();
    }
    drive.start();
}

function stopDrive()
{
    if(drive != null)
    {
        drive.stop();
    }
}

function driveControl(flag, val){
    switch(flag){
    case 'speed' :
        val = drive.getSpeed() + val;
        drive.setSpeed(val);
        break;
    case 'heading' :
        drive.setHeadingSpeed(val);
        break;
    }
}