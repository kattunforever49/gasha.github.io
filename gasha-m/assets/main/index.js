System.register("chunks:///DeviceMotionEvent.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var n,o,c,i,r,s,u;return e({_dec:void 0,_class:void 0}),{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,c=e._decorator,i=e.Component}],execute:function(){o._RF.push({},"3c1fckD/rdISrJwZfRBDaoD","DeviceMotionEvent",void 0),u=c.ccclass,c.property,e("DeviceMotionEvent",(r=u("DeviceMotionEvent"),r(s=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.start=function(){},t}(i))||s)),o._RF.pop()}}}));

System.register("chunks:///GashaMain.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var i,r,a,n,c,o,s,l,p,u,d,y,v,h,b,f,_,m,g,w,D,z,M,E,x,F;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_temp:void 0}),{setters:[function(e){i=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.initializerDefineProperty,n=e.assertThisInitialized,c=e.defineProperty},function(e){o=e.cclegacy,s=e._decorator,l=e.RichText,p=e.Sprite,u=e.SpriteFrame,d=e.Vec3,y=e.tween,v=e.systemEvent,h=e.SystemEventType,b=e.Component}],execute:function(){o._RF.push({},"ca3a5bhyvVOypd/uFRYvbYJ","GashaMain",void 0),x=s.ccclass,F=s.property,e("GashaMain",(f=x("GashaMain"),_=F(l),m=F(p),g=F({type:[u]}),f((z=i((D=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,a(n(t),"label",z,n(t)),a(n(t),"rewardDisplayer",M,n(t)),a(n(t),"sprites",E,n(t)),c(n(t),"_pos",new d(2,2,2)),t}r(t,e);var i=t.prototype;return i.buttonClick=function(){console.log("按鈕");var e=Math.floor(4*Math.random())+0;this.label.string="成功"+e,this.rewardDisplayer.spriteFrame=this.sprites[e],this.rewardDisplayer.node.setScale(0,0,0),y(this.rewardDisplayer.node).to(.5,{scale:new d(.55,.55,.55)},{easing:"bounceOut"}).start()},i.onLoad=function(){v.setAccelerometerEnabled(!0),v.on(h.DEVICEMOTION,this.onDeviceMotionEvent,this)},i.onDeviceMotionEvent=function(e){console.log("event name:",e.type," acc x:",e.acc.x," acc y:",e.acc.y," acc z:",e.acc.z),this.label.string=" acc x:"+e.acc.x+" acc y:"+e.acc.y+" acc z:"+e.acc.z},t}(b)).prototype,"label",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(D.prototype,"rewardDisplayer",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=i(D.prototype,"sprites",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=D))||w)),o._RF.pop()}}}));

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