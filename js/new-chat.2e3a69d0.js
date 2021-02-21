(function(e){function t(t){for(var n,i,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={"new-chat":0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=l;c.push([4,"chunk-vendors"]),a()})({"370e":function(e,t,a){},4:function(e,t,a){e.exports=a("dc77")},4423:function(e,t,a){"use strict";a("d3ca")},"583b":function(e,t,a){},"65cc":function(e,t,a){"use strict";a("e39a")},"72c3":function(e,t,a){"use strict";a("370e")},c686:function(e,t,a){},cab0:function(e,t,a){"use strict";a("c686")},d3ca:function(e,t,a){},dc77:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=Object(n["z"])("data-v-49af4154");Object(n["l"])("data-v-49af4154");var c=Object(n["h"])("a",{href:"/"},[Object(n["h"])("img",{class:"logo",src:"/static/logo.png"})],-1);Object(n["k"])();var i=r((function(e,t,a,r,i,o){var l=Object(n["p"])("NewChatForm");return Object(n["j"])(),Object(n["e"])(n["a"],null,[c,Object(n["h"])("div",null,[Object(n["h"])(l)])],64)})),o=Object(n["z"])("data-v-587aada8");Object(n["l"])("data-v-587aada8");var l=Object(n["h"])("h3",null,"New Chat",-1),u={class:"form-group"},s=Object(n["h"])("label",null,"Topic:",-1),d=Object(n["h"])("button",{type:"submit",class:"btn btn-dark btn-lg btn-block"},"Submit",-1);Object(n["k"])();var f=o((function(e,t,a,r,c,i){var o=Object(n["p"])("Multiselect"),f=Object(n["p"])("AffiliationSlider"),p=Object(n["p"])("BannedWordsInput");return Object(n["j"])(),Object(n["e"])("form",{class:"range-field needs-validation",novalidate:"",onSubmit:t[4]||(t[4]=Object(n["y"])((function(){return i.submit&&i.submit.apply(i,arguments)}),["prevent"]))},[l,Object(n["h"])("div",u,[s,Object(n["h"])(o,{ref:"multiselect",modelValue:c.topic,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.topic=e}),class:"multiselect",searchable:!0,options:c.options,"allow-empty":!1},null,8,["modelValue","options"]),Object(n["w"])(Object(n["h"])("input",{ref:"mirror","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.topic=e}),class:"mirror form-control form-control-lg",required:"",onInput:t[3]||(t[3]=function(){return e.validate&&e.validate.apply(e,arguments)})},null,544),[[n["s"],c.topic]])]),Object(n["h"])(f,{ref:"affiliationSlider",default:i.default},null,8,["default"]),Object(n["h"])("div",null,[Object(n["h"])(p,{ref:"banned"},null,512)]),d],32)})),p=(a("fb6a"),a("159b"),a("96cf"),a("1da1")),b=a("bc3a"),h=a.n(b),v=a("e817"),m=a("a306"),j=Object(n["z"])("data-v-2a1adb8f");Object(n["l"])("data-v-2a1adb8f");var O=Object(n["h"])("label",null,"Banned Words:",-1),g={class:"tag-input form-control form-control-lg"};Object(n["k"])();var y=j((function(e,t,a,r,c,i){return Object(n["j"])(),Object(n["e"])("div",null,[O,Object(n["h"])("div",g,[(Object(n["j"])(!0),Object(n["e"])(n["a"],null,Object(n["n"])(c.tags,(function(e,t){return Object(n["j"])(),Object(n["e"])("div",{key:e,class:"tag-input__tag"},[Object(n["h"])("span",{onClick:function(e){return i.removeTag(t)}},"✕",8,["onClick"]),Object(n["g"])(" "+Object(n["q"])(e),1)])})),128)),Object(n["h"])("input",{type:"text",placeholder:"Add Word...",class:"tag-input__text",onKeydown:t[1]||(t[1]=Object(n["x"])((function(){return i.addTag&&i.addTag.apply(i,arguments)}),["enter"]))},null,32)])])})),w=(a("a434"),a("498a"),{data:function(){return{tags:[]}},methods:{addTag:function(e){e.preventDefault();var t=e.target.value.trim();t.length>0&&(this.tags.push(t),e.target.value="")},removeTag:function(e){this.tags.splice(e,1)}}});a("72c3");w.render=y,w.__scopeId="data-v-2a1adb8f";var k=w,S={components:{Multiselect:m["a"],AffiliationSlider:v["a"],BannedWordsInput:k},data:function(){return{topic:null,options:["Gun Control","Abortion","Religious Freedom","Animal Rights","Vaccines","Privacy Rights","Free-Market Capitalism","Global Climate Change","Evolution","Marijuana Legalization","Capital Punishment","Marriage Equality","Immigration Reform","The Trump Presidency","The Opioid Crisis","Transgender Rights","Federal Livable Wage","White Supremacy","The Green New Deal","Electoral College","Black Lives Matter","Cancel Culture","Student Debt Crisis","The Israeli-Palestinian Conflict","Universal Healthcare"]}},computed:{default:function(){return localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).affiliation:null}},mounted:function(){var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach((function(e){e.addEventListener("submit",(function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")}),!1)}))},methods:{submit:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkValidity(),e.$el.checkValidity()){t.next=3;break}return t.abrupt("return");case 3:return a={issue:e.options[e.topic],rating:e.$refs.affiliationSlider.getValue(),banned:e.$refs.banned.tags,userId:JSON.parse(localStorage.getItem("user"))._id},t.next=6,h.a.post("https://purplepov-api.herokuapp.com/match/find/",a).then((function(){window.location.href="/home"})).catch((function(e){return alert("An error occurred. Try again. "+e)}));case 6:case"end":return t.stop()}}),t)})))()},checkValidity:function(){this.$el.checkValidity()?this.$refs.multiselect.$el.children[0].classList.remove("invalid"):this.$refs.multiselect.$el.children[0].classList.add("invalid")}}};a("d742"),a("cab0");S.render=f,S.__scopeId="data-v-587aada8";var _=S,C={components:{NewChatForm:_},created:function(){localStorage.getItem("token")||(window.location.href="/sign-in")}};a("4423");C.render=i,C.__scopeId="data-v-49af4154";var x=C;a("ab8b"),a("583b");Object(n["d"])(x).mount("#app")},e39a:function(e,t,a){},e817:function(e,t,a){"use strict";var n=a("7a23"),r=Object(n["z"])("data-v-7a0763ca");Object(n["l"])("data-v-7a0763ca");var c={class:"form-group"},i=Object(n["h"])("label",{for:"formControlRange"},"Political Affiliation",-1),o={class:"d-flex justify-content-center my-4"},l=Object(n["h"])("span",{class:"font-weight-bold purple-text mr-2 mt-1"},"Democrat",-1),u=Object(n["h"])("span",{class:"font-weight-bold purple-text ml-2 mt-1"},"Republican",-1);Object(n["k"])();var s=r((function(e,t,a,r,s,d){return Object(n["j"])(),Object(n["e"])("div",c,[i,Object(n["h"])("div",o,[l,Object(n["h"])("input",{ref:"slider",class:"border-0 input",type:"range",min:"-5",max:"5",value:a.default},null,8,["value"]),u])])})),d=(a("a9e3"),{props:{default:{type:Number,default:0}},methods:{getValue:function(){return this.$refs.slider.value}}});a("65cc");d.render=s,d.__scopeId="data-v-7a0763ca";t["a"]=d}});
//# sourceMappingURL=new-chat.2e3a69d0.js.map