System.register("chunks:///DeviceMotionEvent.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var n,o,c,i,r,s,u;return e({_dec:void 0,_class:void 0}),{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,c=e._decorator,i=e.Component}],execute:function(){o._RF.push({},"3c1fckD/rdISrJwZfRBDaoD","DeviceMotionEvent",void 0),u=c.ccclass,c.property,e("DeviceMotionEvent",(r=u("DeviceMotionEvent"),r(s=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.start=function(){},t}(i))||s)),o._RF.pop()}}}));

System.register("chunks:///GashaMain.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,i){var t,r,a,l,n,o,c,s,u,p,v,y,d,b,x,h,_,m,f,g,w,z,M,D,F,S,E,Y,X,G,I,O,P,R,T,C;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_dec5:void 0,_dec6:void 0,_dec7:void 0,_dec8:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_descriptor4:void 0,_descriptor5:void 0,_descriptor6:void 0,_descriptor7:void 0,_temp:void 0}),{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.initializerDefineProperty,l=e.assertThisInitialized,n=e.defineProperty},function(e){o=e.cclegacy,c=e._decorator,s=e.RichText,u=e.Sprite,p=e.SpriteFrame,v=e.Node,y=e.Vec3,d=e.view,b=e.tween,x=e.systemEvent,h=e.SystemEventType,_=e.Component}],execute:function(){o._RF.push({},"ca3a5bhyvVOypd/uFRYvbYJ","GashaMain",void 0),T=c.ccclass,C=c.property,e("GashaMain",(m=T("GashaMain"),f=C(s),g=C(u),w=C({type:[p]}),z=C(s),M=C(s),D=C(s),F=C(v),m((Y=t((E=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return i=e.call.apply(e,[this].concat(r))||this,a(l(i),"label",Y,l(i)),a(l(i),"rewardDisplayer",X,l(i)),a(l(i),"sprites",G,l(i)),a(l(i),"label_x",I,l(i)),a(l(i),"label_y",O,l(i)),a(l(i),"label_z",P,l(i)),a(l(i),"ball",R,l(i)),n(l(i),"_pos",new y(2,2,2)),n(l(i),"x",0),n(l(i),"y",0),n(l(i),"ax",0),n(l(i),"ay",0),n(l(i),"vx",0),n(l(i),"vy",0),n(l(i),"maxX",d.getFrameSize().width),n(l(i),"maxY",d.getFrameSize().height),n(l(i),"vMultiplier",.01),i}r(i,e);var t=i.prototype;return t.buttonClick=function(){console.log("按鈕");var e=Math.floor(4*Math.random())+0;this.label.string="成功"+e,this.rewardDisplayer.spriteFrame=this.sprites[e],this.rewardDisplayer.node.setScale(0,0,0),b(this.rewardDisplayer.node).to(.5,{scale:new y(.55,.55,.55)},{easing:"bounceOut"}).start()},t.onLoad=function(){var e=this;x.setAccelerometerEnabled(!0),x.on(h.DEVICEMOTION,this.onDeviceMotionEvent,this),setInterval((function(){e.vy=e.vy+-e.ay,e.vx=e.vx+e.ax,e.y=e.y+e.vy*e.vMultiplier,e.x=e.x+e.vx*e.vMultiplier,e.x<0&&(e.x=0,e.vx=0),e.y<0&&(e.y=0,e.vy=0),e.x>e.maxX&&(e.x=e.maxX,e.vx=0),e.y>e.maxY&&(e.y=e.maxY,e.vy=0),e.ball.setPosition(new y(e.x-d.getFrameSize().width/2,e.y-d.getFrameSize().height/2,0)),console.log("maxX:"+e.maxX+" maxY:"+e.maxY),console.log("ax:"+e.ax+" ay:"+e.ay),console.log("x:"+e.x+" y:"+e.y),console.log("vx:"+e.vx+" vy:"+e.vy," vMultiplier:"+e.vMultiplier)}),.016)},t.onDeviceMotionEvent=function(e){this.label_x.string="x: "+e.acc.x,this.label_y.string="y: "+e.acc.y,this.label_z.string="z: "+e.acc.z,this.ay=e.acc.y,this.ax=e.acc.x},i}(_)).prototype,"label",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(E.prototype,"rewardDisplayer",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(E.prototype,"sprites",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(E.prototype,"label_x",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(E.prototype,"label_y",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(E.prototype,"label_z",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(E.prototype,"ball",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=E))||S)),o._RF.pop()}}}));

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