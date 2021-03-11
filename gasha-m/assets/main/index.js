System.register("chunks:///GashaMain.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,r){var i,t,a,n,o,s,l,c,p,u,d,h,y,b,f,v,_,w,g,m,D,M,z,F;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_temp:void 0}),{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,n=e.assertThisInitialized,o=e.defineProperty},function(e){s=e.cclegacy,l=e._decorator,c=e.RichText,p=e.Sprite,u=e.SpriteFrame,d=e.tween,h=e.Vec3,y=e.Component}],execute:function(){s._RF.push({},"ca3a5bhyvVOypd/uFRYvbYJ","GashaMain",void 0),z=l.ccclass,F=l.property,e("GashaMain",(b=z("GashaMain"),f=F(c),v=F(p),_=F({type:[u]}),b((m=i((g=function(e){function r(){for(var r,i=arguments.length,t=new Array(i),s=0;s<i;s++)t[s]=arguments[s];return r=e.call.apply(e,[this].concat(t))||this,a(n(r),"label",m,n(r)),a(n(r),"rewardDisplayer",D,n(r)),a(n(r),"sprites",M,n(r)),o(n(r),"_pos",new h(2,2,2)),r}return t(r,e),r.prototype.buttonClick=function(){console.log("按鈕");var e=Math.floor(4*Math.random())+0;this.label.string="成功"+e,this.rewardDisplayer.spriteFrame=this.sprites[e],this.rewardDisplayer.node.setScale(0,0,0),d(this.rewardDisplayer.node).to(.5,{scale:new h(.55,.55,.55)},{easing:"bounceOut"}).start()},r}(y)).prototype,"label",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=i(g.prototype,"rewardDisplayer",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(g.prototype,"sprites",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=g))||w)),s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["../GashaMain.js"],(function(n,t){return{setters:[function(n){}],execute:function(){}}}));

(function(r) {
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