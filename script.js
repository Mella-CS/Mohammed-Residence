(function(){
    var script = {
 "start": "this.playAudioList([this.audio_7D4A09B7_67D4_A159_41C8_2036B9302797]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "class": "Player",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "minWidth": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_t.jpg",
 "label": "Image0013",
 "id": "panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF",
   "class": "AdjacentPanorama",
   "backwardYaw": -112.13,
   "yaw": 76.44,
   "distance": 1
  },
  {
   "panorama": "this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B",
   "class": "AdjacentPanorama",
   "backwardYaw": 25.99,
   "yaw": 16.6,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7574A75D_67BC_A1CE_41C7_926EAE1AD8E8",
  "this.overlay_74F1B326_67BD_A17A_41CD_F7F1F5F4F905"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.18,
  "pitch": 0
 },
 "id": "camera_469F62CB_67ED_60C9_41C8_0072F364EFBD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.81,
  "pitch": 0
 },
 "id": "camera_46C8E256_67ED_63DB_41CE_CB17AB2B6F05",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.28,
  "pitch": 0
 },
 "id": "camera_46D51279_67ED_63C9_41D0_C9042E8D2487",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.4,
  "pitch": 0
 },
 "id": "camera_46C16268_67ED_63F7_41C5_081976239E02",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.56,
  "pitch": 0
 },
 "id": "camera_4732D244_67ED_633F_41D1_A6D20559809C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_t.jpg",
 "label": "Image0015",
 "id": "panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B",
   "class": "AdjacentPanorama",
   "backwardYaw": 27.97,
   "yaw": -163.72,
   "distance": 1
  },
  {
   "panorama": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF",
   "class": "AdjacentPanorama",
   "backwardYaw": -8.82,
   "yaw": -12.19,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "overlays": [
  "this.overlay_75F5D711_67B7_6159_41CD_EEB0CB5A5B89",
  "this.overlay_7558D005_67B4_BF39_41D8_EAA9EC6DB476",
  "this.overlay_716B9424_67AB_A77F_41D9_7B8A4BF04B70"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_t.jpg",
 "label": "Image0016",
 "id": "panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92",
   "class": "AdjacentPanorama",
   "backwardYaw": 16.6,
   "yaw": 25.99,
   "distance": 1
  },
  {
   "panorama": "this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD",
   "class": "AdjacentPanorama",
   "backwardYaw": -163.72,
   "yaw": 27.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "overlays": [
  "this.overlay_715DA5ED_67AD_60C9_41D9_8FE459C08991",
  "this.overlay_7F23ADEE_67AD_E0CB_41CF_4B853B746120"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.03,
  "pitch": 0
 },
 "id": "camera_468D82B1_67ED_6359_41B8_54969441AEA8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_camera"
  },
  {
   "media": "this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_camera"
  },
  {
   "media": "this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_camera"
  },
  {
   "media": "this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_7D4A09B7_67D4_A159_41C8_2036B9302797.mp3",
  "oggUrl": "media/audio_7D4A09B7_67D4_A159_41C8_2036B9302797.ogg"
 },
 "data": {
  "label": "abassel"
 },
 "id": "audio_7D4A09B7_67D4_A159_41C8_2036B9302797",
 "autoplay": true
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "id": "panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.01,
  "pitch": 0
 },
 "id": "camera_46FD129F_67ED_6349_41B0_49519D019B8E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_t.jpg",
 "label": "Image0014",
 "id": "panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92",
   "class": "AdjacentPanorama",
   "backwardYaw": 76.44,
   "yaw": -112.13,
   "distance": 1
  },
  {
   "panorama": "this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD",
   "class": "AdjacentPanorama",
   "backwardYaw": -12.19,
   "yaw": -8.82,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7613AE72_67B5_E3DB_41B6_D2DB4E067EFF",
  "this.overlay_7526D2B8_67B5_6357_41C5_5878866E16F6"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_camera"
  },
  {
   "media": "this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_camera"
  },
  {
   "media": "this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_camera"
  },
  {
   "media": "this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 67.87,
  "pitch": 0
 },
 "id": "camera_46E9C28C_67ED_634F_41D9_DB7979C3F264",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "backgroundOpacity": 0,
 "width": 550,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "visible",
 "top": 34,
 "paddingRight": 0,
 "borderSize": 0,
 "height": 98,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "right": "1.27%",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minWidth": 1,
 "bottom": "2.51%",
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxHeight": 58
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": true,
 "right": "0%",
 "overflow": "scroll",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "scroll",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "right": "0%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "5.247%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "bottom": "3.14%",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "43.457%",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container7538"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "left": "7.24%",
 "backgroundOpacity": 0,
 "width": "76.357%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "bottom": "3.04%",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "76.859%",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container4248"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxHeight": 58
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxHeight": 58
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B, this.camera_46FD129F_67ED_6349_41B0_49519D019B8E); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71244444_67AC_A73F_41D4_BBFF94D1FC33",
   "pitch": -6.7,
   "yaw": 16.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.85,
   "distance": 100
  }
 ],
 "id": "overlay_7574A75D_67BC_A1CE_41C7_926EAE1AD8E8",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -6.7,
   "hfov": 4.85
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF, this.camera_46E9C28C_67ED_634F_41D9_DB7979C3F264); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7124F447_67AC_A739_41C7_11D174E84155",
   "pitch": -24.7,
   "yaw": 76.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.43,
   "distance": 100
  }
 ],
 "id": "overlay_74F1B326_67BD_A17A_41CD_F7F1F5F4F905",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.7,
   "hfov": 4.43
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7BD8CBE7_67DD_A0F8_41BB_E7B264343F1A",
   "pitch": -8.68,
   "yaw": 24.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.94,
   "distance": 100
  }
 ],
 "id": "overlay_75F5D711_67B7_6159_41CD_EEB0CB5A5B89",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -8.68,
   "hfov": 2.94
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF, this.camera_469F62CB_67ED_60C9_41C8_0072F364EFBD); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7BD8BBE8_67DD_A0F7_41C1_C1A3EE7E47CF",
   "pitch": -8.67,
   "yaw": -12.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.09,
   "distance": 100
  }
 ],
 "id": "overlay_7558D005_67B4_BF39_41D8_EAA9EC6DB476",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -8.67,
   "hfov": 4.09
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B, this.camera_468D82B1_67ED_6359_41B8_54969441AEA8); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7BD86BE9_67DD_A0C9_41D4_7B1004D513B4",
   "pitch": -25.57,
   "yaw": -163.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.4,
   "distance": 100
  }
 ],
 "id": "overlay_716B9424_67AB_A77F_41D9_7B8A4BF04B70",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -25.57,
   "hfov": 4.4
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92, this.camera_46C16268_67ED_63F7_41C5_081976239E02); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7122544B_67AC_A7C9_41C4_568443A343E1",
   "pitch": -6.6,
   "yaw": 25.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.94,
   "distance": 100
  }
 ],
 "id": "overlay_715DA5ED_67AD_60C9_41D9_8FE459C08991",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -6.6,
   "hfov": 3.94
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD, this.camera_46D51279_67ED_63C9_41D0_C9042E8D2487); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7122944C_67AC_A7CF_41CA_FD58C9C8CB1B",
   "pitch": -20.63,
   "yaw": 27.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.57,
   "distance": 100
  }
 ],
 "id": "overlay_7F23ADEE_67AD_E0CB_41CF_4B853B746120",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -20.63,
   "hfov": 4.57
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxHeight": 58
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxHeight": 58
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD, this.camera_46C8E256_67ED_63DB_41CE_CB17AB2B6F05); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71252449_67AC_A7C9_41C9_79AA5A604D75",
   "pitch": -8.42,
   "yaw": -8.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.83,
   "distance": 100
  }
 ],
 "id": "overlay_7613AE72_67B5_E3DB_41B6_D2DB4E067EFF",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -8.42,
   "hfov": 4.83
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92, this.camera_4732D244_67ED_633F_41D1_A6D20559809C); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_71256449_67AC_A7C9_41D3_3B5D46CB05C8",
   "pitch": -13.12,
   "yaw": -112.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.32,
   "distance": 100
  }
 ],
 "id": "overlay_7526D2B8_67B5_6357_41C5_5878866E16F6",
 "data": {
  "label": "Circle Point 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -13.12,
   "hfov": 3.32
  }
 ],
 "rollOverDisplay": false
},
{
 "layout": "absolute",
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0.18%",
 "backgroundOpacity": 1,
 "width": 314,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 42,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "white block"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 314,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0.01
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 1,
 "height": 53,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "shadow": true,
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 391,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Label",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "text": "LOREM IPSUM",
 "propagateClick": true,
 "top": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 75,
 "fontSize": 61,
 "horizontalAlign": "left",
 "fontColor": "#000000",
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "propagateClick": true,
 "right": "0%",
 "overflow": "visible",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "height": 110,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "button menu sup"
 },
 "paddingTop": 0,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "right": "0%",
 "overflow": "scroll",
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": false,
 "right": 0,
 "overflow": "visible",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "- EXPANDED"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": false,
 "right": "15%",
 "overflow": "visible",
 "top": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": true,
 "right": "15%",
 "overflow": "visible",
 "top": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": false,
 "right": "15%",
 "overflow": "visible",
 "top": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "21.928%",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container8437"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "71.91%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "scroll",
 "paddingRight": 0,
 "bottom": "23.39%",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "48.2%",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Container9886"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "66.351%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "scroll",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container3396"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.883%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "98.501%",
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Container3434"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_71244444_67AC_A73F_41D4_BBFF94D1FC33",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE63A57_67B5_63D9_41C3_F0008E034B92_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_7124F447_67AC_A739_41C7_11D174E84155",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_7BD8CBE7_67DD_A0F8_41BB_E7B264343F1A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_7BD8BBE8_67DD_A0F7_41C1_C1A3EE7E47CF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE14E58_67B4_A3D7_41BA_18DF54966CBD_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_7BD86BE9_67DD_A0C9_41D4_7B1004D513B4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_7122544B_67AC_A7C9_41C4_568443A343E1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6B71E068_67B4_BFF7_41D8_814E1089E07B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_7122944C_67AC_A7CF_41CA_FD58C9C8CB1B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_71252449_67AC_A7C9_41C9_79AA5A604D75",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6CE48CD5_67B5_60D9_41A3_0879FA5023FF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_71256449_67AC_A7C9_41D3_3B5D46CB05C8",
 "frameDuration": 41
},
{
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "8.75%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "67.391%",
 "maxWidth": 635,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "ministry of revenue"
 },
 "maxHeight": 59,
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "32.903%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "19.43%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "60.377%",
 "maxWidth": 167,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image5496"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 59
},
{
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "79.355%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "98.113%",
 "maxWidth": 469,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11167"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 59
},
{
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "94.34%",
 "maxWidth": 880,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11246"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 59
},
{
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "46.774%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "20.75%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "47.17%",
 "maxWidth": 321,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11319"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 59
},
{
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "50.645%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "16.98%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "49.057%",
 "maxWidth": 395,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11499"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 59
},
{
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "53.226%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "11.32%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "62.264%",
 "maxWidth": 396,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11621"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 59
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxHeight": 60
},
{
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "backgroundOpacity": 0,
 "width": "45.71%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "height": "10.163%",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "Image5138"
 },
 "maxHeight": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "scaleMode": "fit_inside"
},
{
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "height": "8.167%",
 "maxWidth": 58,
 "shadow": false,
 "data": {
  "name": "Image4905"
 },
 "maxHeight": 58,
 "paddingTop": 0,
 "cursor": "hand",
 "scaleMode": "fit_inside"
},
{
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container black"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingRight": 0,
 "bottom": "40%",
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "maxWidth": 80,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "maxHeight": 80
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "width": "90%",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "width": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "right": 9,
 "propagateClick": true,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "minWidth": 1,
 "bottom": "40%",
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "maxWidth": 50,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "maxHeight": 50
},
{
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "backgroundOpacity": 0,
 "width": "30.303%",
 "borderRadius": 0,
 "minHeight": 1,
 "class": "HTMLText",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "propagateClick": false,
 "right": "0%",
 "top": "5.97%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "5.236%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.05vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.05vmin;font-family:'Segoe UI';\"/></p></div>",
 "shadow": false,
 "data": {
  "name": "HTMLText5367"
 },
 "paddingTop": 10
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingBottom": 20,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 50,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "height": "100%"
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 50,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "width": "25%",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "height": "75%",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "maxHeight": 60,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 140,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "itemThumbnailHeight": 125,
 "itemOpacity": 1,
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "height": "92%",
 "itemMaxHeight": 1000,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "minHeight": 1,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "class": "ThumbnailGrid",
 "paddingLeft": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColor": [],
 "minWidth": 1,
 "itemPaddingTop": 3,
 "propagateClick": true,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "center",
 "itemPaddingRight": 3,
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadow": true,
 "shadow": false,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50
},
{
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "class": "WebFrame",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "WebFrame"
 },
 "paddingTop": 0
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 50,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "width": "25%",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "height": "75%",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "maxHeight": 60,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "99.975%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 140,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundOpacity": 1,
 "width": "55%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundOpacity": 1,
 "width": "45%",
 "paddingBottom": 20,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 60,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "height": "100%"
},
{
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 50,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "width": "25%",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "height": "75%",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "maxHeight": 60,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "left": "7.87%",
 "backgroundOpacity": 0,
 "width": 71,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingRight": 0,
 "bottom": "1.5%",
 "borderSize": 0,
 "mode": "toggle",
 "height": 61,
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "maxHeight": 101
},
{
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "backgroundOpacity": 0,
 "width": "60.938%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "3.13%",
 "propagateClick": false,
 "top": "3.5%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "height": "42.529%",
 "maxWidth": 84,
 "shadow": false,
 "data": {
  "name": "Image2783"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "scaleMode": "fit_inside",
 "maxHeight": 84
},
{
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "backgroundOpacity": 0,
 "width": "57.813%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "4.69%",
 "propagateClick": false,
 "minWidth": 1,
 "bottom": "30.53%",
 "borderSize": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "height": "28.5%",
 "maxWidth": 84,
 "shadow": false,
 "data": {
  "name": "Image2877"
 },
 "maxHeight": 84,
 "paddingTop": 0,
 "cursor": "hand",
 "scaleMode": "fit_inside"
},
{
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "width": 44,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "right": "0%",
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "minWidth": 1,
 "bottom": "4.5%",
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "horizontalAlign": "center",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "maxHeight": 101
},
{
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "6.786%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "1.63%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "height": "5.865%",
 "maxWidth": 1202,
 "shadow": false,
 "data": {
  "name": "Image3661"
 },
 "maxHeight": 998,
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "height": "100%",
 "maxWidth": 1012,
 "shadow": false,
 "data": {
  "name": "Image4301"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 1185
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "paddingBottom": 40,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 40,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "- Buttons set"
 },
 "paddingTop": 40,
 "layout": "absolute",
 "height": "100%"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "100%",
 "maxWidth": 2000,
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxHeight": 1000
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 60,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "borderRadius": 0,
 "minHeight": 520,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "height": "100%"
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 40,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "transparencyActive": false,
 "right": 20,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "height": "36.14%",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "maxHeight": 60
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "transparencyActive": false,
 "right": 20,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "height": "36.14%",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "maxHeight": 60
},
{
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 50,
 "propagateClick": true,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "maxHeight": 60
},
{
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "right": 10,
 "propagateClick": true,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minWidth": 50,
 "bottom": "20%",
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "maxHeight": 60
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 50,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "transparencyActive": false,
 "right": 20,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "height": "10%",
 "maxWidth": 60,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "maxHeight": 60
},
{
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "height": "100%",
 "maxWidth": 2000,
 "shadow": false,
 "data": {
  "name": "Image40635"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxHeight": 1000
},
{
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "height": "5%"
},
{
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "borderRadius": 0,
 "minHeight": 520,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "height": "100%"
},
{
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 40,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 30,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 40,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "height": "25%",
 "maxWidth": 1095,
 "shadow": false,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 1095
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "right": "0%",
 "overflow": "scroll",
 "top": "26%",
 "minWidth": 1,
 "bottom": "26%",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-Level 1"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "height": 130,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 5,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-Level 2-1"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-Level 2-2"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-Level 2-3"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-Level 2-4"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-Level 2-5"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-Level 2-6"
 },
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "class": "HTMLText",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.83vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 50,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 50,
 "borderSize": 0,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "HTMLText",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "46%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "height": "75%"
},
{
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "RECEPTION >",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "ROOMS >",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "pressedLabel": "Inserdt Text",
 "fontSize": 18,
 "label": "AMENITIES >",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "SPORTS AREA >",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "SWIMMING POOL >",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "RESTAURANTS >",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "height": 2,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "blue line"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "HTMLText",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 78,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "visible",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 56,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 7,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingTop": 0,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "visible",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 44,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 7,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingTop": 0,
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundOpacity": 0,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "iconBeforeLabel": true,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Main Entrance",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "rollOverShadowBlurRadius": 18,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lobby",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "pressedLabel": "Reception",
 "fontSize": 18,
 "label": "Reception",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 1",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 2",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Bar",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Chill Out",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Terrace",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Garden",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundOpacity": 0,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "iconBeforeLabel": true,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "rollOverShadowBlurRadius": 18,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "pressedLabel": "Lorem Ipsum",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundOpacity": 0,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "iconBeforeLabel": true,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "rollOverShadowBlurRadius": 18,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "pressedLabel": "Lorem Ipsum",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundOpacity": 0,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "iconBeforeLabel": true,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "rollOverShadowBlurRadius": 18,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "pressedLabel": "Lorem Ipsum",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundOpacity": 0,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "iconBeforeLabel": true,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "rollOverShadowBlurRadius": 18,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "pressedLabel": "Lorem Ipsum",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundOpacity": 0,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "iconBeforeLabel": true,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 30,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Container",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "rollOverShadowBlurRadius": 18,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "pressedLabel": "Lorem Ipsum",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "Button",
 "paddingLeft": 10,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "iconWidth": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "class": "Image",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "height": "100%",
 "maxWidth": 200,
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "maxHeight": 200,
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "backgroundOpacity": 0,
 "width": "75%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
},
{
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 1,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "maxHeight": 101
},
{
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 1,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "maxHeight": 101
},
{
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "maxHeight": 101
},
{
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 1,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "maxHeight": 101
},
{
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "width": 44,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 1,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 44,
 "horizontalAlign": "center",
 "maxWidth": 101,
 "shadow": false,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "maxHeight": 101
},
{
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "width": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "class": "IconButton",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 50,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "maxWidth": 101,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton --"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "maxHeight": 101
}],
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } }
 },
 "contentOpaque": false,
 "shadow": false,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
