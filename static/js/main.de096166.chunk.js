(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{132:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),a=n(4),i=n(32),s=n(64),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(d,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!s){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,s,u,l,d,b,f,m,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,a);case 3:return s=e.sent,u=new i.a(s,o,a),l={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),m=b-f,p=d.data.goLiveDate.toNumber(),p=new Date(1e3*p),console.log({itemsAvailable:b,itemsRedeemed:f,itemsRemaining:m,goLiveDate:p}),e.abrupt("return",{candyMachine:l,itemsAvailable:b,itemsRedeemed:f,itemsRemaining:m,goLiveDate:p});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var o,u,d,f,x,O,g;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,j(r,o.publicKey);case 3:return u=e.sent,d=t.connection,f=t.program,e.next=7,p(o.publicKey);case 7:return x=e.sent,e.next=10,m(o.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return g=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:o.publicKey,metadata:x,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:o.publicKey,space:s.a.span,lamports:g,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,r,r),b(u,r,r,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},352:function(e,t,n){},353:function(e,t,n){},356:function(e,t){},358:function(e,t){},374:function(e,t){},375:function(e,t){},406:function(e,t){},462:function(e,t){},464:function(e,t){},478:function(e,t){},482:function(e,t){},484:function(e,t){},494:function(e,t){},496:function(e,t){},523:function(e,t){},525:function(e,t){},530:function(e,t){},532:function(e,t){},538:function(e,t){},540:function(e,t){},552:function(e,t){},555:function(e,t){},567:function(e,t){},568:function(e,t,n){"use strict";n.r(t);var r,c=n(2),a=n.n(c),i=n(29),s=n.n(i),o=(n(352),n(353),n(12)),u=n(1),l=n.n(u),d=n(4),b=n(13),f=n(311),m=n(324),p=n(312),j=n(603),x=n(602),O=n(15),g=n(52),h=n(173),y=n(132),v=n(20),w=function(e){var t=e.width||40,n=e.fillColor||"white";return Object(v.jsxs)("svg",{className:"mx-auto block",style:{width:"".concat(t,"px")},viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:n,children:[Object(v.jsxs)("circle",{cx:"15",cy:"15",r:"15",children:[Object(v.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(v.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),Object(v.jsxs)("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3",children:[Object(v.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Object(v.jsx)("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),Object(v.jsxs)("circle",{cx:"105",cy:"15",r:"15",children:[Object(v.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(v.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})},S=m.a.span(r||(r=Object(f.a)([""]))),k=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(v.jsxs)(S,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},N=function(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),s=Object(b.a)(i,2),u=s[0],f=s[1],m=Object(c.useState)(!1),S=Object(b.a)(m,2),N=S[0],P=S[1],K=Object(c.useState)(!1),M=Object(b.a)(K,2),R=M[0],T=M[1],C=Object(c.useState)(0),A=Object(b.a)(C,2),B=(A[0],A[1]),L=Object(c.useState)(0),E=Object(b.a)(L,2),I=(E[0],E[1]),D=Object(c.useState)(0),W=Object(b.a)(D,2),F=W[0],_=W[1],U=Object(c.useState)({open:!1,message:"",severity:void 0}),q=Object(b.a)(U,2),H=q[0],Y=q[1],J=Object(c.useState)(new Date(e.startDate)),z=Object(b.a)(J,2),G=z[0],V=z[1],Z=Object(h.b)().setOpen,Q=Object(g.c)(),X=Object(c.useState)(),$=Object(b.a)(X,2),ee=$[0],te=$[1],ne=function(){Object(d.a)(l.a.mark((function t(){var n,r,c,a,i,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(y.b)(Q,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,B(a),_(i),I(s),P(0===i),V(c),te(r);case 16:case"end":return t.stop()}}),t)})))()},re=function(){var t=Object(d.a)(l.a.mark((function t(){var n,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,T(!0),!Q||!(null===ee||void 0===ee?void 0:ee.program)){t.next=10;break}return t.next=5,Object(y.c)(ee,e.config,Q.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(y.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?Y({open:!0,message:"Mint failed! Please try again!",severity:"error"}):Y({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",P(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),Y({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!Q){t.next=23;break}return t.next=21,e.connection.getBalance(Q.publicKey);case 21:i=t.sent,a(i/O.LAMPORTS_PER_SOL);case 23:return T(!1),ne(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q){t.next=5;break}return t.next=3,e.connection.getBalance(Q.publicKey);case 3:n=t.sent,a(n/O.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Q,e.connection]),Object(c.useEffect)(ne,[Q,e.candyMachineId,e.connection]),Object(v.jsxs)("div",{className:"background min-h-screen",children:[Object(v.jsxs)("div",{className:" min-h-screen flex flex-col items-center justify-center max-w-sm mx-auto z-20 space-y-6 ",children:[Object(v.jsxs)("div",{className:"text-center space-y-2",children:[Object(v.jsx)("h1",{className:"text-5xl text-white font-bold",children:"Football NFTS"}),Object(v.jsx)("p",{className:"text-lg font-bold text-white uppercase",children:"125 randomly-generated NFTs"}),Q&&!N&&u&&Object(v.jsx)("p",{className:"text-white",children:Object(v.jsxs)("span",{className:"border-b-2 border-gray-200",children:["Only ",F," left!"]})}),Q&&N&&u&&Object(v.jsx)("p",{className:"text-white",children:Object(v.jsx)("span",{className:"border-b-2 border-gray-200",children:"SOLD OUT!"})}),!Q&&!N&&u&&Object(v.jsx)("p",{className:"text-white",children:"Now live!"}),!u&&Object(v.jsx)("p",{className:"text-white",children:Object(v.jsx)(p.a,{date:G,onMount:function(e){e.completed&&f(!0)},onComplete:function(){return f(!0)},renderer:k})})]}),Object(v.jsxs)("div",{className:"bg-gold-200 rounded-xl shadow-lg w-full overflow-hidden",children:[Object(v.jsx)("img",{className:"w-full",alt:"NFTs",src:"static/media/loop.gif"}),Object(v.jsxs)("div",{className:"text-center py-8 px-4",children:[Q?Object(v.jsx)("button",{className:" inline-flex items-center justify-center font-bold px-8 h-12 border-2 border-white text-white tracking-wide uppercase",disabled:N||R||!u,onClick:re,children:N?"Sold Out!":u?R?Object(v.jsx)(w,{}):Object(v.jsx)("span",{children:"Mint for 0.5 SOL"}):Object(v.jsx)("span",{children:"Connected"})}):Object(v.jsx)("button",{onClick:function(){return Z(!0)},className:" inline-flex items-center justify-center font-bold px-8 h-12 border-2 border-white text-white tracking-wide uppercase",disabled:N||R,children:"Connect Wallet"}),Q&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{className:"text-white mt-6",children:["Address: ",Object(y.d)(Q.publicKey.toBase58()||"")]}),Object(v.jsxs)("p",{className:"text-white mt-3",children:["Balance: ",(r||0).toLocaleString()," SOL"]})]})]})]})]}),Object(v.jsx)(j.a,{open:H.open,autoHideDuration:6e3,onClose:function(){return Y(Object(o.a)(Object(o.a)({},H),{},{open:!1}))},children:Object(v.jsx)(x.a,{onClose:function(){return Y(Object(o.a)(Object(o.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})},P=n(32),K=n(116),M=n(340),R=n(600),T=new P.d.PublicKey("7qfasNkMSouHFHJKZmcPjqgN5UCzWyJc4qEGf3Tzb2tJ"),C=new P.d.PublicKey("7gAp5WwPGKc81aPnw1AiK8TaspCg4G7JSfs43cYt92mn"),A=new P.d.PublicKey("8Htz97qmkxpk1SkDR5mnwrQaHuoKdaHr3UchrNBdbt6j"),B="mainnet-beta",L=new P.d.Connection("https://explorer-api.mainnet-beta.solana.com"),E=parseInt("1635455869",10),I=Object(M.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),D=function(){var e=Object(c.useMemo)((function(){return Object(O.clusterApiUrl)(B)}),[]),t=Object(c.useMemo)((function(){return[Object(K.a)(),Object(K.b)(),Object(K.c)(),Object(K.e)({network:B}),Object(K.d)({network:B})]}),[]);return Object(v.jsx)(R.a,{theme:I,children:Object(v.jsx)(g.a,{endpoint:e,children:Object(v.jsx)(g.b,{wallets:t,autoConnect:!0,children:Object(v.jsx)(h.a,{children:Object(v.jsx)(N,{candyMachineId:A,config:C,connection:L,startDate:E,treasury:T,txTimeout:3e4})})})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,604)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),W()}},[[568,1,2]]]);
//# sourceMappingURL=main.de096166.chunk.js.map