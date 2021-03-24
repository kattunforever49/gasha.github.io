System.register("chunks:///DeviceMotionEvent.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var n,o,c,i,r,s,u;return e({_dec:void 0,_class:void 0}),{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,c=e._decorator,i=e.Component}],execute:function(){o._RF.push({},"3c1fckD/rdISrJwZfRBDaoD","DeviceMotionEvent",void 0),u=c.ccclass,c.property,e("DeviceMotionEvent",(r=u("DeviceMotionEvent"),r(s=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.start=function(){},t}(i))||s)),o._RF.pop()}}}));

System.register("chunks:///GashaMain.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,i){var r,t,n,o,a,l,c,s,u,p,d,b,y,_,v,f,h,g,m,w,z,D,M,x,E,F,S,G,O,R,T,C;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_dec5:void 0,_dec6:void 0,_dec7:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_descriptor4:void 0,_descriptor5:void 0,_descriptor6:void 0,_temp:void 0}),{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,a=e.defineProperty},function(e){l=e.cclegacy,c=e._decorator,s=e.RichText,u=e.Sprite,p=e.SpriteFrame,d=e.Vec3,b=e.tween,y=e.systemEvent,_=e.SystemEventType,v=e.Component}],execute:function(){l._RF.push({},"ca3a5bhyvVOypd/uFRYvbYJ","GashaMain",void 0),T=c.ccclass,C=c.property,e("GashaMain",(f=T("GashaMain"),h=C(s),g=C(u),m=C({type:[p]}),w=C(s),z=C(s),D=C(s),f((E=r((x=function(e){function i(){for(var i,r=arguments.length,t=new Array(r),l=0;l<r;l++)t[l]=arguments[l];return i=e.call.apply(e,[this].concat(t))||this,n(o(i),"label",E,o(i)),n(o(i),"rewardDisplayer",F,o(i)),n(o(i),"sprites",S,o(i)),n(o(i),"label_x",G,o(i)),n(o(i),"label_y",O,o(i)),n(o(i),"label_z",R,o(i)),a(o(i),"_pos",new d(2,2,2)),i}t(i,e);var r=i.prototype;return r.buttonClick=function(){console.log("按鈕");var e=Math.floor(4*Math.random())+0;this.label.string="成功"+e,this.rewardDisplayer.spriteFrame=this.sprites[e],this.rewardDisplayer.node.setScale(0,0,0),b(this.rewardDisplayer.node).to(.5,{scale:new d(.55,.55,.55)},{easing:"bounceOut"}).start()},r.onLoad=function(){y.setAccelerometerEnabled(!0),y.on(_.DEVICEMOTION,this.onDeviceMotionEvent,this)},r.onDeviceMotionEvent=function(e){this.label_x.string="x: "+e.acc.x,this.label_y.string="y: "+e.acc.y,this.label_z.string="z: "+e.acc.z},i}(v)).prototype,"label",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=r(x.prototype,"rewardDisplayer",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=r(x.prototype,"sprites",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=r(x.prototype,"label_x",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=r(x.prototype,"label_y",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=r(x.prototype,"label_z",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=x))||M)),l._RF.pop()}}}));

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