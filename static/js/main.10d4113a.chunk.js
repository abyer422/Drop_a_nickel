(this.webpackJsonpdrop_a_nickel=this.webpackJsonpdrop_a_nickel||[]).push([[0],{62:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c.n(n),s=c(41),r=c.n(s),a=(c(62),c(13)),l=c(51),j=c.n(l),d=c(52),o=c.n(d),b=c.p+"static/media/bowlingLogo.cc826c0e.png",h=c(21),u=(c(63),c(2));var O=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],i=t[1],s=function(){return i(!c)};return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("div",{className:"leftSide",children:Object(u.jsx)(h.b,{className:"link",to:"/",children:Object(u.jsx)(j.a,{})})}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)(h.b,{to:"/uploadform",children:Object(u.jsx)("img",{src:b,alt:"Logo"})})}),Object(u.jsx)("div",{className:"rightSide",children:Object(u.jsx)(o.a,{onClick:s})}),Object(u.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/inventory",onClick:s,children:" Shop "})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/hours",onClick:s,children:" Hours & Pricing "})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/lessons",onClick:s,children:" Lessons "})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/about",onClick:s,children:" About Me "})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/contact",onClick:s,children:" Contact Me "})})]})})]})},m=c(53),x=c.n(m),p=c(54),g=c.n(p),f=c(55),v=c.n(f);c(70);var N=function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"https://www.instagram.com/teamnickel_drpankl/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(x.a,{})}),Object(u.jsx)("a",{href:"https://twitter.com/DropANickel",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(g.a,{})}),Object(u.jsx)("a",{href:"https://www.facebook.com/IBeMoney/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(v.a,{})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:" \xa9 2021 drpnkl.com "})})]})},y=c.p+"static/media/bowlingHome2.92bc7463.jpg";c(71);var k=function(){return Object(u.jsx)("div",{className:"home",style:{backgroundImage:"url(".concat(y,")")},children:Object(u.jsxs)("div",{className:"headerContainer",children:[Object(u.jsx)("h1",{children:" Welcome to Drop a Nickel Pro Shop "}),Object(u.jsx)("p",{children:" For all of your professional bowling needs! "})]})})},w=c(39),S=c(40);c(82),c(83);S.a.initializeApp({apiKey:"AIzaSyBPPyN6ozRG30An7E-Nzy9PN4Vi04W1T-o",authDomain:"drop-a-nickel-pro-shop.firebaseapp.com",projectId:"drop-a-nickel-pro-shop",storageBucket:"drop-a-nickel-pro-shop.appspot.com",messagingSenderId:"170410912971",appId:"1:170410912971:web:3a1b8d7764375a666c7f4e",measurementId:"G-PGHWD1YNP3"});var F=S.a.storage(),B=S.a.firestore(),I=(S.a.firestore.FieldValue.serverTimestamp,function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)([]),l=Object(a.a)(r,2),j=l[0],d=l[1],o=Object(n.useState)([]),b=Object(a.a)(o,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){var t=B.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(w.a)(Object(w.a)({},e.data()),{},{id:e.id}))})),s(t),d(t),u(t)}));return function(){return t()}}),[e]),{balls:i,bags:j,accessories:h}});c(74);var P=function(){var e=I("Accessories").accessories,t=I("Balls").balls,c=I("Bags").bags;return Object(u.jsxs)("div",{className:"inv-wrap",children:[Object(u.jsx)("h1",{children:" Balls "}),Object(u.jsx)("div",{className:"inv-grid",children:t&&t.map((function(e){return Object(u.jsxs)("div",{className:"inv-wrap1",children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("img",{src:e.url,alt:e.name}),Object(u.jsxs)("p",{children:["Condition: ",e.condition," "]}),Object(u.jsxs)("p",{children:["Description: ",e.description," "]}),Object(u.jsxs)("p",{children:["Price: $",e.price," "]}),Object(u.jsxs)("p",{children:["Weight: ",e.weight," lbs "]}),Object(u.jsx)("button",{children:" Find out more "})]},e.id)}))}),Object(u.jsx)("h1",{children:" Bags "}),Object(u.jsx)("div",{className:"inv-grid",children:c&&c.map((function(e){return Object(u.jsxs)("div",{className:"inv-wrap1",children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("img",{src:e.url,alt:e.name}),Object(u.jsxs)("p",{children:["Condition: ",e.condition," "]}),Object(u.jsxs)("p",{children:["Description: ",e.description," "]}),Object(u.jsxs)("p",{children:["Price: $",e.price," "]}),Object(u.jsx)("button",{children:" Find out more "})]},e.id)}))}),Object(u.jsx)("h1",{children:" Accessories "}),Object(u.jsx)("div",{className:"inv-grid",children:e&&e.map((function(e){return Object(u.jsxs)("div",{className:"inv-wrap1",children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("img",{src:e.url,alt:e.name}),Object(u.jsxs)("p",{children:["Condition: ",e.condition," "]}),Object(u.jsxs)("p",{children:["Description: ",e.description," "]}),Object(u.jsxs)("p",{children:["Price: $",e.price," "]}),Object(u.jsx)("button",{children:" Find out more "})]},e.id)}))})]})},E=c.p+"static/media/Billy.674c74a4.jpg";c(75);var C=function(){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("div",{className:"leftSide",style:{backgroundImage:"url(".concat(E,")")}}),Object(u.jsxs)("div",{className:"rightSide",children:[Object(u.jsx)("h1",{children:" ABOUT ME "}),Object(u.jsx)("p",{children:" In nulla labore cillum ut culpa irure eu velit sed exercitation aute esse fugiat dolore roident aliquip pariatur fugiat. Aute in ut minim amet duis ut nulla ut in officia dolore voluptate ullamco sunt in aute labore in ea sit. Lorem ipsum mollit magna laboris consectetur magna ut ex ut occaecat culpa in aliquip nulla deserunt sint nostrud laborum tempor qui consectetur fugiat dolore do amet laboris est fugiat mollit ut labore adipisicing deserunt velit non exercitation elit elit esse et velit commodo ex dolore amet quis qui et ad laborum."})]})]})},q=c(56),D=c.p+"static/media/Billy2.c31a77f3.jpg",$=(c(76),c(48));Object($.a)("user_1trT0OPzsLaeCi658ABiD");var _=function(){var e=Object(n.useState)("000000"),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(q.a)(),r=s.handleSubmit,l=s.watch,j=s.register,d=1500-(l("message")||"").length;return Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)("div",{className:"leftSide",style:{backgroundImage:"url(".concat(D,")")}}),Object(u.jsx)("div",{className:"rightSide",children:Object(u.jsxs)("div",{className:"contact-form",children:[Object(u.jsx)("h1",{children:" Contact Me "}),Object(u.jsxs)("form",{id:"contact-form",onSubmit:r((function(e){!function(){var e="000000"+(1e6*Math.random()|0);i(e.substring(e.length-6))}(),Object($.b)("default_service","template_15t4u5d","#contact-form").then((function(e){alert("Thank you for your email!")}),(function(e){alert("Failed to send message! Please try again later")})),document.getElementById("contact-form").reset()})),children:[Object(u.jsx)("input",{type:"hidden",name:"contact_number",value:c}),Object(u.jsx)("label",{htmlFor:"name",children:"Full Name"}),Object(u.jsx)("input",{name:"name",placeholder:"Enter full name...",type:"text",maxLength:"30",required:!0}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{name:"email",placeholder:"Enter email...",type:"email",maxLength:"50",required:!0}),Object(u.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(u.jsx)("input",{name:"phone",placeholder:"123-456-7890",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",maxLength:"30",required:!0}),Object(u.jsx)("small",{children:"Format: 123-456-7890"}),Object(u.jsx)("label",{htmlFor:"message",children:"Message"}),Object(u.jsx)("textarea",Object(w.a)({rows:"6",placeholder:"Enter message...",name:"message",maxLength:"1500",required:!0},j("message"))),Object(u.jsxs)("p",{children:[d," characters left "]}),Object(u.jsx)("button",{type:"submit",children:" Send Message "})]})]})})]})},A=c(0),L=c.n(A),M=c(5),T=function(e){var t=Object(n.useState)(0),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(null),l=Object(a.a)(r,2),j=l[0],d=l[1],o=Object(n.useState)(null),b=Object(a.a)(o,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){var t=F.ref(e.name),c=document.querySelector("input[name=category]:checked").value,n=B.collection(c);t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){d(e)}),Object(M.a)(L.a.mark((function e(){var c,i,s,r,a,l;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:c=e.sent,i=document.getElementById("Name").value,s=document.getElementById("Description").value,r=document.getElementById("Price").value,a=document.getElementById("Weight").value,l=document.querySelector("input[name=status]:checked").value,n.add({url:c,name:i,description:s,price:r,weight:a,condition:l}),u(c);case 10:case"end":return e.stop()}}),e)}))))}),[e]),{progress:i,url:h,error:j}},G=function(e){var t=e.file,c=e.setFile,i=T(t),s=i.url,r=i.progress;return Object(n.useEffect)((function(){s&&c(null)}),[s,c]),Object(u.jsx)("div",{className:"progress-bar",style:{width:r+"%"}})},W=(c(77),function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),r=Object(a.a)(s,2),l=r[0],j=r[1],d=["image/png","image/jpeg","image/jpg"];return Object(u.jsxs)("form",{className:"form",id:"Inv",children:[Object(u.jsx)("div",{className:"upload-center",children:"Choose a category"}),Object(u.jsxs)("div",{className:"radio",children:[Object(u.jsx)("label",{htmlFor:"balls",children:"Balls"}),Object(u.jsx)("input",{id:"balls",name:"category",type:"radio",value:"Balls",required:!0}),Object(u.jsx)("label",{htmlFor:"bags",children:"Bags"}),Object(u.jsx)("input",{id:"bags",name:"category",type:"radio",value:"Bags",required:!0}),Object(u.jsx)("label",{htmlFor:"accessories",children:"Accessories"}),Object(u.jsx)("input",{id:"accessories",name:"category",type:"radio",value:"Accessories",required:!0})]}),Object(u.jsx)("label",{htmlFor:"name",children:"Item Name"}),Object(u.jsx)("input",{id:"Name",name:"name",placeholder:"Enter name of item...",type:"text",maxLength:"30",required:!0}),Object(u.jsxs)("div",{className:"radio",children:[Object(u.jsx)("label",{htmlFor:"new",children:"New"}),Object(u.jsx)("input",{id:"new",name:"status",type:"radio",value:"New",required:!0}),Object(u.jsx)("label",{htmlFor:"used",children:"Used"}),Object(u.jsx)("input",{id:"used",name:"status",type:"radio",value:"Used",required:!0})]}),Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("input",{id:"Description",name:"description",placeholder:"Enter description of item...",type:"text",maxLength:"200",required:!0}),Object(u.jsx)("label",{htmlFor:"price",children:"Price"}),Object(u.jsx)("input",{id:"Price",name:"price",placeholder:"Enter price of item...",type:"number",required:!0}),Object(u.jsx)("label",{htmlFor:"weight",children:"Weight"}),Object(u.jsx)("input",{id:"Weight",name:"weight",placeholder:"Enter weight of item...",type:"number"}),Object(u.jsx)("label",{htmlFor:"Image",children:"Item image"}),Object(u.jsx)("input",{id:"Image",name:"file",type:"file",onChange:function(e){var t=e.target.files[0];t&&d.includes(t.type)?(i(t),j("")):(i(null),j("Please select an image file (png, jpeg or jpg)"))}}),Object(u.jsxs)("div",{className:"output",children:[l&&Object(u.jsx)("div",{className:"error",children:l}),c&&Object(u.jsx)("div",{children:c.name}),c&&Object(u.jsx)(G,{file:c,setFile:i})]}),Object(u.jsx)("button",{type:"submit",children:" Submit "})]})});c(78);var H=function(){return Object(u.jsxs)("div",{className:"hours-page",children:[Object(u.jsxs)("div",{className:"hours",children:[Object(u.jsx)("h1",{children:" Hours: "}),Object(u.jsx)("p",{children:" Contact me to schedule an appointment! "}),Object(u.jsx)(h.b,{to:"/contact",className:"link",children:Object(u.jsx)("button",{children:" Contact Me "})})]}),Object(u.jsx)("div",{className:"pricing",children:Object(u.jsx)("h1",{children:" Pricing: "})}),Object(u.jsx)("div",{className:"table-container",children:Object(u.jsxs)("table",{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Ball Drilling:"})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Drill (Plastic)"}),Object(u.jsx)("td",{children:"$30"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Drill (Reactive)"}),Object(u.jsx)("td",{children:"$40"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Drilling Extras:"})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Finger Grips - Pair"}),Object(u.jsx)("td",{children:"$8.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Replace Grip - Each"}),Object(u.jsx)("td",{children:"$4.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Thumb Slug"}),Object(u.jsx)("td",{children:"$10.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Switch Grip Inner"}),Object(u.jsx)("td",{children:"$20.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Switch Grip Outer"}),Object(u.jsx)("td",{children:"$18.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"I.T. Inner (Thumb)"}),Object(u.jsx)("td",{children:"$18.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"I.T. Base and Sleeve"}),Object(u.jsx)("td",{children:"$15.00"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Services:"})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Resurface (By Hand)"}),Object(u.jsx)("td",{children:"$30.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Revive"}),Object(u.jsx)("td",{children:"$10.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Clean/Polish/Sand"}),Object(u.jsx)("td",{children:"$5.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Full Plug"}),Object(u.jsx)("td",{children:"$40.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Plug Finger or Thumb Only"}),Object(u.jsx)("td",{children:"$20.00"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Plug Hole or Fix Damage"}),Object(u.jsx)("td",{children:"$10.00"})]})]})})]})},R=(c(79),c.p+"static/media/underConstruction.df49dabf.gif");var z=function(){return Object(u.jsxs)("div",{className:"lessons-page",children:[Object(u.jsxs)("div",{className:"lessons",children:[Object(u.jsx)("h1",{children:" Lesson packages coming soon! "}),Object(u.jsx)("p",{children:" Contact me to schedule a lesson! "}),Object(u.jsx)(h.b,{to:"/contact",className:"link",children:Object(u.jsx)("button",{children:" Contact Me "})})]}),Object(u.jsx)("div",{className:"construction",children:Object(u.jsx)("img",{src:R,alt:""})})]})},U=c(16);var J=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(h.a,{basename:"/Drop_a_nickel",children:[Object(u.jsx)(O,{}),Object(u.jsxs)(U.c,{children:[Object(u.jsx)(U.a,{path:"/",exact:!0,component:k}),Object(u.jsx)(U.a,{path:"/inventory",exact:!0,component:P}),Object(u.jsx)(U.a,{path:"/about",exact:!0,component:C}),Object(u.jsx)(U.a,{path:"/contact",exact:!0,component:_}),Object(u.jsx)(U.a,{path:"/uploadform",exact:!0,component:W}),Object(u.jsx)(U.a,{path:"/hours",exact:!0,component:H}),Object(u.jsx)(U.a,{path:"/lessons",exact:!0,component:z})]}),Object(u.jsx)(N,{})]})})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.10d4113a.chunk.js.map