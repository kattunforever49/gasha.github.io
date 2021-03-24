System.register("chunks:///DeviceMotionEvent.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var n,o,c,i,r,s,u;return e({_dec:void 0,_class:void 0}),{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,c=e._decorator,i=e.Component}],execute:function(){o._RF.push({},"3c1fckD/rdISrJwZfRBDaoD","DeviceMotionEvent",void 0),u=c.ccclass,c.property,e("DeviceMotionEvent",(r=u("DeviceMotionEvent"),r(s=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.start=function(){},t}(i))||s)),o._RF.pop()}}}));

System.register("chunks:///GashaMain.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,i){var t,r,n,a,l,o,c,s,u,p,d,v,y,b,_,h,f,x,m,w,g,z,M,D,E,F,S,Y,G,I,O,P,R,T,C;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_dec5:void 0,_dec6:void 0,_dec7:void 0,_dec8:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_descriptor4:void 0,_descriptor5:void 0,_descriptor6:void 0,_descriptor7:void 0,_temp:void 0}),{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,l=e.defineProperty},function(e){o=e.cclegacy,c=e._decorator,s=e.RichText,u=e.Sprite,p=e.SpriteFrame,d=e.Node,v=e.Vec3,y=e.tween,b=e.systemEvent,_=e.SystemEventType,h=e.Component}],execute:function(){o._RF.push({},"ca3a5bhyvVOypd/uFRYvbYJ","GashaMain",void 0),T=c.ccclass,C=c.property,e("GashaMain",(f=T("GashaMain"),x=C(s),m=C(u),w=C({type:[p]}),g=C(s),z=C(s),M=C(s),D=C(d),f((S=t((F=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return i=e.call.apply(e,[this].concat(r))||this,n(a(i),"label",S,a(i)),n(a(i),"rewardDisplayer",Y,a(i)),n(a(i),"sprites",G,a(i)),n(a(i),"label_x",I,a(i)),n(a(i),"label_y",O,a(i)),n(a(i),"label_z",P,a(i)),n(a(i),"ball",R,a(i)),l(a(i),"_pos",new v(2,2,2)),l(a(i),"x",0),l(a(i),"y",0),l(a(i),"ax",0),l(a(i),"ay",0),l(a(i),"vx",0),l(a(i),"vy",0),l(a(i),"maxX",window.screen.width),l(a(i),"maxY",window.screen.height),l(a(i),"vMultiplier",.01),i}r(i,e);var t=i.prototype;return t.buttonClick=function(){console.log("按鈕");var e=Math.floor(4*Math.random())+0;this.label.string="成功"+e,this.rewardDisplayer.spriteFrame=this.sprites[e],this.rewardDisplayer.node.setScale(0,0,0),y(this.rewardDisplayer.node).to(.5,{scale:new v(.55,.55,.55)},{easing:"bounceOut"}).start()},t.onLoad=function(){var e=this;b.setAccelerometerEnabled(!0),b.on(_.DEVICEMOTION,this.onDeviceMotionEvent,this),setInterval((function(){e.y=e.y+e.vy*e.vMultiplier,e.x=e.x+e.vx*e.vMultiplier,e.x<0&&(e.x=0,e.vx=0),e.y<0&&(e.y=0,e.vy=0),e.x>e.maxX&&(e.x=e.maxX,e.vx=0),e.y>e.maxY&&(e.y=e.maxY,e.vx=0),e.ball.setPosition(new v(e.x,e.y,0))}),1e3)},t.onDeviceMotionEvent=function(e){this.label_x.string="x: "+e.acc.x,this.label_y.string="y: "+e.acc.y,this.label_z.string="z: "+e.acc.z},i}(h)).prototype,"label",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(F.prototype,"rewardDisplayer",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(F.prototype,"sprites",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(F.prototype,"label_x",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(F.prototype,"label_y",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(F.prototype,"label_z",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(F.prototype,"ball",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=F))||E)),o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["../DeviceMotionEvent.js","../GashaMain.js"],(function(n,t){return{setters:[function(n){},function(n){}],execute:function(){}}}));

(function(r) {
  r('project:///assets/Scripts/DeviceMotionEvent.js', 'chunks:///DeviceMotionEvent.js');
  r('project:///assets/Scripts/GashaMain.js', 'chunks:///GashaMain.js');
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});