function _0x19a7(_0x3f93c0,_0x384dce){const _0x1ee5a9=_0x36e2();return _0x19a7=function(_0x23938d,_0x20a7da){_0x23938d=_0x23938d-(-0x2*0x557+0x5*0x31+0xa91);let _0x1ae71e=_0x1ee5a9[_0x23938d];return _0x1ae71e;},_0x19a7(_0x3f93c0,_0x384dce);}const _0x3632ba=_0x19a7;(function(_0x64b2f6,_0x26efc4){const _0x103dbf=_0x19a7,_0x405e46=_0x64b2f6();while(!![]){try{const _0x105ae0=parseInt(_0x103dbf(0x110))/(-0x1*-0x1eca+-0x300*0x1+0x943*-0x3)+parseInt(_0x103dbf(0xf9))/(0x1869+-0x136d*0x1+-0x4fa)+parseInt(_0x103dbf(0xe1))/(-0x1b65*0x1+0x1313+0x855)*(parseInt(_0x103dbf(0x129))/(-0xc3c+-0x2*0x5d+0xcfa*0x1))+-parseInt(_0x103dbf(0x11d))/(0x793+0x1a*0x115+-0x8*0x476)*(-parseInt(_0x103dbf(0xfd))/(0x1244+0x1*0xb66+-0xed2*0x2))+parseInt(_0x103dbf(0x132))/(-0x5bd+0x1366+-0xda2)*(parseInt(_0x103dbf(0xe3))/(-0x1*-0x20e7+0x2*0x680+-0x2ddf*0x1))+-parseInt(_0x103dbf(0x12e))/(0x1*-0xfab+0x61c+-0x998*-0x1)+-parseInt(_0x103dbf(0xe4))/(-0xbb*-0x17+0x728+-0x17eb)*(parseInt(_0x103dbf(0xdf))/(-0x17de+-0x37*-0x1d+0x11ae));if(_0x105ae0===_0x26efc4)break;else _0x405e46['push'](_0x405e46['shift']());}catch(_0x391165){_0x405e46['push'](_0x405e46['shift']());}}}(_0x36e2,-0x1*0x11c7e6+-0x4ee6*-0xb+0x1cf5aa));const statusDisplay=document[_0x3632ba(0x124)+_0x3632ba(0x102)](_0x3632ba(0xf1)+_0x3632ba(0x116));let gameActive=!![],currentPlayer='X',gameState=['','','','','','','','',''],cellsLeft=[0x1*0x229b+-0x1*0xf25+0x6a*-0x2f,-0x5*-0x37f+-0x14f*0x7+-0x851,-0x1*-0x16f6+-0x5ca+-0x2*0x895,-0x20ee+-0x1*-0x1f1f+0xe9*0x2,-0x13b4+-0x5*-0x793+0x1227*-0x1,0x133*-0x12+-0x27*-0xac+0x499*-0x1,-0xb60+-0x1*0xf3e+0x1aa4,-0x1192*0x2+0x19a8+0x983*0x1,-0x1*-0x1027+-0x17f3*-0x1+-0x2e*0xdf],player2=![],computerPlay=0xbbe*0x1+-0xa2a*-0x1+-0x15e8;function _0x36e2(){const _0x130646=['nMzni','8ygRwhO','32487060hRsuhD','ubrzz','bKLCA','url(\x22./ima','Image','style','FLdOP','JcHaz','index','kWmaZ','RMhJO','XokEz','torAll','.game--sta','cQLCg','Hnprj','splice','rfsXi','UdmCv','DYcKJ','indexOf','1751968OrVSZm','CQPPh','addEventLi','\x20has\x20won!','185430xTdSEM','Player\x20','SoieL','Znuhj','mGOEN','tor','random','tiUit','length','innerHTML','JWGQe','tuXco','cIIRo','checked','LCtDL','xcghg','NkpQh','getElement','.cell','979378vYzFvV','Hsint','sByClassNa','BtXvS','SSrnj','TosBi','tus','split','tart','XeTgT','includes','nephg','\x27s\x20turn','260rQbuEl','cell','PHBed','nrHii','HuEZC','YMmfg','background','querySelec','KfxWo','forEach','click','getAttribu','8lGlZXr','\x20in\x20a\x20draw','[data-cell','2|5|4|0|1|','-index=\x27','13468257hVttyP','stener','data-cell-','VTxcm','8218105avGWsn','ById','.game--res','Game\x20ended','ges/x.png\x22','myCheck','target','ges/o.png\x22','Itqfy','It\x27s\x20','11gQiYIM','floor','1595298UIKYLh'];_0x36e2=function(){return _0x130646;};return _0x36e2();}const winningConditions=[[0x8*0x6b+-0x156c+0x4*0x485,0x13db+0x1107+-0x24e1,-0x25c0*-0x1+-0x61a+-0x32*0xa2],[0x1*0x1ff7+0x1ea5+-0x5*0xc85,-0x1545+-0x43*0x22+0x1e2f,-0x1*-0x242f+0x115c+-0x3586],[-0x2*0x39b+0x17d3+-0x1*0x1097,0x1d18+-0xb*-0x281+-0x389c,0x1*0x8ed+-0x470*-0x1+-0xd55*0x1],[-0x3*-0x1c1+0x1fac+-0x24ef,-0x11a*-0x13+-0x2481*-0x1+-0x1cb6*0x2,-0x1*0x935+0x109c+-0x1*0x761],[-0xa6*0xd+0x1*-0x24bb+-0xf6*-0x2f,0xa6b+0x21*0x1d+-0xe24,-0x1*-0x7f7+0x2284+-0x23c*0x13],[0x22c*0xb+0x24*0x55+0xbf2*-0x3,-0x1e79+-0x8*0x112+0x270e,0x14e4+0xa17+-0x1ef3],[-0x6*0x64+0x1b86+-0x192e,-0x25f9*-0x1+-0x5bb*-0x2+-0x316b,0x24d6+0x1b9e+0x934*-0x7],[-0x4*-0x35e+-0x1*-0x55d+0x12d3*-0x1,0x263c+0xc8f+-0x3*0x10ed,-0x81d+0x38*-0x8b+0x268b]],winningMessage=()=>_0x3632ba(0xfe)+currentPlayer+_0x3632ba(0xfc),drawMessage=()=>_0x3632ba(0xd8)+_0x3632ba(0x12a)+'!',currentPlayerTurn=()=>_0x3632ba(0xde)+currentPlayer+_0x3632ba(0x11c);statusDisplay[_0x3632ba(0x106)]=currentPlayerTurn();function handleCellPlayed(_0xf864db,_0x1b21c9){const _0x56caaf=_0x3632ba,_0x122762={'BtXvS':function(_0xfbfe0e,_0x34d61e){return _0xfbfe0e==_0x34d61e;},'VTxcm':_0x56caaf(0xe7)+_0x56caaf(0xd9)+')','kWmaZ':_0x56caaf(0xe7)+_0x56caaf(0xdc)+')'};gameState[_0x1b21c9]=currentPlayer,_0x122762[_0x56caaf(0x113)](currentPlayer,'X')?_0xf864db[_0x56caaf(0xe9)][_0x56caaf(0x123)+_0x56caaf(0xe8)]=_0x122762[_0x56caaf(0x131)]:_0xf864db[_0x56caaf(0xe9)][_0x56caaf(0x123)+_0x56caaf(0xe8)]=_0x122762[_0x56caaf(0xed)];}function handleComputerPlay(){const _0x258a31=_0x3632ba,_0x32ea9c={'JcHaz':function(_0x1a91e7,_0x51e731){return _0x1a91e7<=_0x51e731;},'KfxWo':function(_0x269568,_0x1131fd){return _0x269568===_0x1131fd;},'YMmfg':function(_0x52758c,_0x5b96b7){return _0x52758c!=_0x5b96b7;},'CQPPh':function(_0x522eaa,_0xe61245){return _0x522eaa===_0xe61245;},'cQLCg':function(_0x1ac465,_0x5d862b){return _0x1ac465===_0x5d862b;},'NkpQh':function(_0x44b0a5,_0x3f619e){return _0x44b0a5!=_0x3f619e;},'bKLCA':function(_0x205b87,_0x6defcb){return _0x205b87===_0x6defcb;},'XokEz':function(_0x340c43,_0x49b7a4){return _0x340c43===_0x49b7a4;},'ubrzz':function(_0x1c51d9,_0x55d4ed){return _0x1c51d9!=_0x55d4ed;},'SSrnj':function(_0x427407,_0x2cda6d){return _0x427407*_0x2cda6d;},'PHBed':_0x258a31(0xe7)+_0x258a31(0xdc)+')','XeTgT':function(_0x1745de){return _0x1745de();}};for(let _0x2c5053=0x1da2+-0x1139*-0x2+-0x4014;_0x32ea9c[_0x258a31(0xeb)](_0x2c5053,0x2*-0x632+0xf81+-0x316);_0x2c5053++){const _0x1a7204=winningConditions[_0x2c5053];let _0x406f76=gameState[_0x1a7204[0x2d1+-0x1*0x1213+0xf42]],_0x394938=gameState[_0x1a7204[0x2*-0x120b+0xd50+-0x7*-0x341]],_0x95e34=gameState[_0x1a7204[-0xf1*0x1d+-0x1*-0x2ef+0x1860]];if(_0x32ea9c[_0x258a31(0x125)](_0x406f76,'X')&&_0x32ea9c[_0x258a31(0x125)](_0x394938,'X')&&_0x32ea9c[_0x258a31(0x122)](_0x95e34,'O')){computerPlay=_0x1a7204[-0xed+-0x1eeb*-0x1+-0x1dfc];break;}else{if(_0x32ea9c[_0x258a31(0xfa)](_0x406f76,'X')&&_0x32ea9c[_0x258a31(0xf2)](_0x95e34,'X')&&_0x32ea9c[_0x258a31(0x10d)](_0x394938,'O')){computerPlay=_0x1a7204[0x2169+-0x6aa+-0x6*0x475];break;}else{if(_0x32ea9c[_0x258a31(0xe6)](_0x394938,'X')&&_0x32ea9c[_0x258a31(0xef)](_0x95e34,'X')&&_0x32ea9c[_0x258a31(0xe5)](_0x406f76,'O')){computerPlay=_0x1a7204[0xb8*-0x23+-0x1743+0x306b];break;}else computerPlay=cellsLeft[Math[_0x258a31(0xe0)](_0x32ea9c[_0x258a31(0x114)](Math[_0x258a31(0x103)](),cellsLeft[_0x258a31(0x105)]))];}}}gameState[computerPlay]=currentPlayer,document[_0x258a31(0x124)+_0x258a31(0xf0)](_0x258a31(0x12b)+_0x258a31(0x12d)+computerPlay+'\x27]')[-0x1b2c+0x2554+-0x64*0x1a][_0x258a31(0xe9)][_0x258a31(0x123)+_0x258a31(0xe8)]=_0x32ea9c[_0x258a31(0x11f)],cellsLeft[_0x258a31(0xf4)](cellsLeft[_0x258a31(0xf8)](computerPlay),-0x2450+-0x90a+0x2d5b),_0x32ea9c[_0x258a31(0x119)](handleResultValidation);}function handlePlayerChange(){const _0x1e6046=_0x3632ba,_0x12327b={'nephg':function(_0xee7b4c,_0x25793d){return _0xee7b4c===_0x25793d;},'DYcKJ':function(_0x1c24d8){return _0x1c24d8();}};currentPlayer=_0x12327b[_0x1e6046(0x11b)](currentPlayer,'X')?'O':'X',statusDisplay[_0x1e6046(0x106)]=_0x12327b[_0x1e6046(0xf7)](currentPlayerTurn);}function handleResultValidation(){const _0x49d215=_0x3632ba,_0x5a4baa={'tuXco':function(_0x1b4027,_0x418221){return _0x1b4027<=_0x418221;},'HuEZC':function(_0x5e0ac1,_0x28a3fe){return _0x5e0ac1===_0x28a3fe;},'xcghg':function(_0xfba046,_0x433fa0){return _0xfba046===_0x433fa0;},'Hsint':function(_0x59dbb4,_0x52f2b7){return _0x59dbb4===_0x52f2b7;},'Hnprj':function(_0x325478,_0x3a9c2e){return _0x325478===_0x3a9c2e;},'UdmCv':function(_0x46219e){return _0x46219e();},'Itqfy':function(_0x292c21){return _0x292c21();}};let _0x1d438c=![];for(let _0x11ac44=-0x2300+0x600*0x4+0xb00;_0x5a4baa[_0x49d215(0x108)](_0x11ac44,0x134a+-0x24cd+0x382*0x5);_0x11ac44++){const _0x1d9772=winningConditions[_0x11ac44];let _0x5c210b=gameState[_0x1d9772[0x2f*-0x67+0xa*0xd1+-0x83*-0x15]],_0x3074d3=gameState[_0x1d9772[0x35*-0x1e+0x6*0x304+-0x1*0xbe1]],_0x3244ee=gameState[_0x1d9772[0x238e+0xa67+-0x2df3]];if(_0x5a4baa[_0x49d215(0x121)](_0x5c210b,'')||_0x5a4baa[_0x49d215(0x10c)](_0x3074d3,'')||_0x5a4baa[_0x49d215(0x111)](_0x3244ee,''))continue;if(_0x5a4baa[_0x49d215(0x121)](_0x5c210b,_0x3074d3)&&_0x5a4baa[_0x49d215(0xf3)](_0x3074d3,_0x3244ee)){_0x1d438c=!![];break;}}if(_0x1d438c){statusDisplay[_0x49d215(0x106)]=_0x5a4baa[_0x49d215(0xf6)](winningMessage),gameActive=![];return;}let _0x3c3c65=!gameState[_0x49d215(0x11a)]('');if(_0x3c3c65){statusDisplay[_0x49d215(0x106)]=_0x5a4baa[_0x49d215(0xdd)](drawMessage),gameActive=![];return;}_0x5a4baa[_0x49d215(0xf6)](handlePlayerChange);}function handleCellClick(_0x5efdca){const _0x2966f9=_0x3632ba,_0x59d627={'RMhJO':function(_0x5e2808,_0x380445){return _0x5e2808(_0x380445);},'TosBi':_0x2966f9(0x130)+_0x2966f9(0xec),'LCtDL':function(_0x4c0b9a,_0x24d393){return _0x4c0b9a!==_0x24d393;},'nMzni':function(_0x193ffa,_0x4d46f1,_0x11179f){return _0x193ffa(_0x4d46f1,_0x11179f);},'tiUit':function(_0x5d4187){return _0x5d4187();},'FLdOP':function(_0x2a8072,_0x45ca10){return _0x2a8072&&_0x45ca10;},'mGOEN':function(_0x4869ee){return _0x4869ee();}},_0x20f688=_0x5efdca[_0x2966f9(0xdb)],_0x27917e=_0x59d627[_0x2966f9(0xee)](parseInt,_0x20f688[_0x2966f9(0x128)+'te'](_0x59d627[_0x2966f9(0x115)]));if(_0x59d627[_0x2966f9(0x10b)](gameState[_0x27917e],'')||!gameActive)return;cellsLeft[_0x2966f9(0xf4)](cellsLeft[_0x2966f9(0xf8)](_0x27917e),0x21a5+-0x82f*0x3+0x917*-0x1),_0x59d627[_0x2966f9(0xe2)](handleCellPlayed,_0x20f688,_0x27917e),_0x59d627[_0x2966f9(0x104)](handleResultValidation),_0x59d627[_0x2966f9(0xea)](player2,gameActive)&&_0x59d627[_0x2966f9(0x101)](handleComputerPlay);}function handleRestartGame(){const _0x3ae264=_0x3632ba,_0x1f91e2={'nrHii':_0x3ae264(0x12c)+'3','SoieL':function(_0x29d6ff){return _0x29d6ff();},'JWGQe':function(_0x3b0ba0,_0x43cda0){return _0x3b0ba0<_0x43cda0;}},_0x1a670b=_0x1f91e2[_0x3ae264(0x120)][_0x3ae264(0x117)]('|');let _0x2a6701=0x1*-0x1323+0x6*0x7f+0x1029;while(!![]){switch(_0x1a670b[_0x2a6701++]){case'0':cellsLeft=[0x2*0xee9+0x17d*0x13+-0x3a19,-0xfd2+-0xc*-0x2f0+-0x136d*0x1,0x4e9*-0x1+-0x43*0x3d+-0x1*-0x14e2,-0x1809+0x12d3+0x539,-0x39*-0x59+-0x2171*-0x1+-0xeb*0x3a,-0x9*0x2cb+-0x3c1*-0x7+-0x29*0x7,0x1dc0+-0x1e06+0x4c,0xb*0x216+-0xe12+-0x8d9,0x389+-0x2176+-0x1*-0x1df5];continue;case'1':statusDisplay[_0x3ae264(0x106)]=_0x1f91e2[_0x3ae264(0xff)](currentPlayerTurn);continue;case'2':gameActive=!![];continue;case'3':for(i=0x274+-0xb06+0x892;_0x1f91e2[_0x3ae264(0x107)](i,gameState[_0x3ae264(0x105)]);i++){document[_0x3ae264(0x10e)+_0x3ae264(0x112)+'me'](_0x3ae264(0x11e)+i)[0x252f+-0x258b+0x5c][_0x3ae264(0xe9)][_0x3ae264(0x123)+_0x3ae264(0xe8)]='';}continue;case'4':gameState=['','','','','','','','',''];continue;case'5':currentPlayer='X';continue;}break;}}function addPlayer2(){const _0x16c1a6=_0x3632ba,_0x5d17eb={'Znuhj':function(_0x2b72ec,_0x50e45d){return _0x2b72ec==_0x50e45d;},'rfsXi':_0x16c1a6(0xda),'cIIRo':function(_0x261708){return _0x261708();}};_0x5d17eb[_0x16c1a6(0x100)](document[_0x16c1a6(0x10e)+_0x16c1a6(0x133)](_0x5d17eb[_0x16c1a6(0xf5)])[_0x16c1a6(0x10a)],!![])?player2=!![]:player2=![],_0x5d17eb[_0x16c1a6(0x109)](handleRestartGame);}document[_0x3632ba(0x124)+_0x3632ba(0xf0)](_0x3632ba(0x10f))[_0x3632ba(0x126)](_0x4737d7=>_0x4737d7[_0x3632ba(0xfb)+_0x3632ba(0x12f)](_0x3632ba(0x127),handleCellClick)),document[_0x3632ba(0x124)+_0x3632ba(0x102)](_0x3632ba(0x134)+_0x3632ba(0x118))[_0x3632ba(0xfb)+_0x3632ba(0x12f)](_0x3632ba(0x127),handleRestartGame);