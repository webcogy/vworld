// 초기 위치로 이동
var map;
var hX = 127.425;
var hY = 38.196;
var hZ = 13487000;
var hH = 0;
var hT = -90;
var hR = 0;

var sX = 126.92529813255122;
var sY = 37.52509165877161;
var sZ = 10000;
var sH = 0;
var sT = -50;
var sR = 0;


/* begin -------- 맵 초기화 코드 --------- */
function vwmap() {
    var mapOptions = new vw.MapOptions(
        vw.BasemapType.GRAPHIC, "",
        vw.DensityType.BASIC,
        vw.DensityType.BASIC,
        false,
        new vw.CameraPosition(
            new vw.CoordZ(hX, hY, hZ),
            new vw.Direction(hH, hT, hR)
        ),
        new vw.CameraPosition(
            //new vw.CoordZ(126.968007,37.3998313, 1500),
            new vw.CoordZ(sX, sY, sZ),
            new vw.Direction(sH, sT, sR)
        )
    );
    //console.log(mapOptions)
    map = new vw.Map("vmap", mapOptions);   

    setTimeout(function(){
        setMarker(sX,sY, '맵 시작 위치 (위치변경가능)');
        getMapCoods(map);
    },1000);
}

// 웹지엘 지도 호출.
// vwmap();

/* end -------- 맵 초기화 코드 --------- */

function flyHome() {
    if ( map != null ) {
        vw.NavigationZoom.initHome();
        console.log("이동 :");
    }
}