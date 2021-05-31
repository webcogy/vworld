vw.MapControllerOption = {                  
    container : "vmap",
    mapMode : "ws3d-map",
    basemapType : vw.ol3.BasemapType.GRAPHIC,
    controlDensity : vw.ol3.DensityType.EMPTY,
    interactionDensity : vw.ol3.DensityType.BASIC,
    controlsAutoArrange : true,
    homePosition : vw.ol3.CameraPosition,
    initPosition : vw.ol3.CameraPosition                  
};            

mapController = new vw.MapController(vw.MapControllerOption);