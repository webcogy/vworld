var east = 90, west = -90, south = 180, north = 0, ground = -90, front = 0;

function cameraPosition(Heading, Tilt)
{
    return new vw.CameraPosition(new vw.CoordZ(sX, sY, sZ),  new vw.Direction(Heading, Tilt, sR));
}

//동쪽
function vwDirectionEast()
{
    map.lookat.moveTo(cameraPosition(east, sT));
}

//서쪽
function vwDirectionWest()
{
    map.lookat.moveTo(cameraPosition(west, sT));
}

//북쪽
function vwDirectionNorth()
{
    map.lookat.moveTo(cameraPosition(north, sT));
}

//남쪽
function vwDirectionSouth()
{
    map.lookat.moveTo(cameraPosition(south, sT));
}

//지면
function vwDirectionGround()
{
    map.lookat.moveTo(cameraPosition(sH, ground));
}

//정면
function vwDirectionFront()
{
    sZ = 100;
    map.lookat.moveTo(cameraPosition(sH, front));
    sZ= 5000;
}