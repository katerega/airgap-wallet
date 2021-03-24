(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{awK3:function(e,t,n){"use strict";n.r(t),n.d(t,"LedgerSignPageModule",function(){return _});var r=n("138U"),i=n("ofXK"),a=n("tyNb"),o=n("TEn/"),s=n("sYmb"),c=n("j1ZV"),g=n("iTUp"),l=n("mrSG"),b=n("RKiA"),d=n("kB5k"),u=n.n(d),p=n("1y+R"),h=n("z26V"),f=n("hPkG"),m=n("fXoL"),_c0=function(e){return{protocol:e,maxDigits:void 0}},_c1=function(e){return{protocol:e}};function LedgerSignPage_ng_container_14_Template(e,t){if(1&e&&(m.Mb(0),m.Ob(1,"ion-row",9),m.Ob(2,"ion-col",10),m.Ob(3,"h5"),m.vc(4),m.Zb(5,"async"),m.Zb(6,"amountConverter"),m.Nb(),m.Nb(),m.Ob(7,"ion-col",10),m.Ob(8,"h5"),m.vc(9),m.Nb(),m.Nb(),m.Ob(10,"ion-col",10),m.Ob(11,"h5"),m.vc(12),m.Zb(13,"async"),m.Zb(14,"feeConverter"),m.Nb(),m.Nb(),m.Ob(15,"ion-col",11),m.Ob(16,"small"),m.vc(17,"Amount"),m.Nb(),m.Nb(),m.Ob(18,"ion-col",11),m.Ob(19,"small"),m.vc(20,"Operations"),m.Nb(),m.Nb(),m.Ob(21,"ion-col",11),m.Ob(22,"small"),m.vc(23,"Fee"),m.Nb(),m.Nb(),m.Nb(),m.Lb()),2&e){var n=m.Yb();m.yb(4),m.xc(" ",m.ac(5,3,m.bc(6,5,n.aggregatedInfo.totalAmount.toFixed(),m.ic(13,_c0,n.airGapTxs[0].protocolIdentifier)))," "),m.yb(5),m.wc(n.aggregatedInfo.numberOfTxs),m.yb(3),m.wc(m.ac(13,8,m.bc(14,10,n.aggregatedInfo.totalFees.toFixed(),m.ic(15,_c1,n.airGapTxs[0].protocolIdentifier))))}}function LedgerSignPage_ng_container_15_airgap_from_to_1_Template(e,t){if(1&e&&m.Kb(0,"airgap-from-to",13),2&e){var n=t.$implicit;m.ec("transaction",n)}}function LedgerSignPage_ng_container_15_Template(e,t){if(1&e&&(m.Mb(0),m.tc(1,LedgerSignPage_ng_container_15_airgap_from_to_1_Template,1,1,"airgap-from-to",12),m.Lb()),2&e){var n=m.Yb();m.yb(1),m.ec("ngForOf",n.airGapTxs)}}var _c2=function(e){return{title:e}},O=function(){function LedgerSignPage(e,t,n,r,i,a,o){var s=this;if(this.router=e,this.route=t,this.dataService=n,this.alertCtrl=r,this.loadingController=i,this.translateService=a,this.ledgerService=o,this.wallet=null,this.airGapTxs=null,this.route.snapshot.data.special){var c=this.route.snapshot.data.special;this.wallet=c.wallet,this.airGapTxs=c.airGapTxs,this.unsignedTx=c.data,this.airGapTxs.length>1&&this.airGapTxs.every(function(e){return e.protocolIdentifier===s.airGapTxs[0].protocolIdentifier})&&(this.aggregatedInfo={numberOfTxs:this.airGapTxs.length,totalAmount:this.airGapTxs.map(function(e){return new u.a(e.amount)}).filter(function(e){return!e.isNaN()}).reduce(function(e,t){return e.plus(t)},new u.a(0)),totalFees:this.airGapTxs.reduce(function(e,t){return e.plus(t.fee)},new u.a(0))},console.log("aggregatedInfo",this.aggregatedInfo))}this.connectWithLedger()}return LedgerSignPage.prototype.connectWithLedger=function(){return Object(l.b)(this,void 0,void 0,function(){var e;return Object(l.e)(this,function(t){switch(t.label){case 0:return[4,this.showLoader("Connecting device...")];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,4,5,6]),[4,this.ledgerService.openConnection(this.wallet.protocol.identifier)];case 3:return t.sent(),[3,6];case 4:return e=t.sent(),console.warn(e),this.promptError(e),[3,6];case 5:return this.dismissLoader(),[7];case 6:return[2]}})})},LedgerSignPage.prototype.signTx=function(){return Object(l.b)(this,void 0,void 0,function(){var e,t,n,r;return Object(l.e)(this,function(i){switch(i.label){case 0:return[4,this.showLoader("Signing transaction...")];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,5,6]),[4,this.ledgerService.signTransaction(this.wallet.protocol.identifier,this.unsignedTx)];case 3:return e=i.sent(),t={id:Object(b.generateId)(10),type:b.IACMessageType.MessageSignResponse,protocol:this.wallet.protocol.identifier,payload:{transaction:e,accountIdentifier:this.wallet.publicKey.substr(-6)}},n={messageDefinitionObjects:[t]},this.dataService.setData(p.b.TRANSACTION,n),this.router.navigateByUrl("/transaction-confirm/"+p.b.TRANSACTION).catch(Object(f.b)(f.a.NAVIGATION)),[3,6];case 4:return r=i.sent(),console.warn(r),this.promptError(r),[3,6];case 5:return this.dismissLoader(),[7];case 6:return[2]}})})},LedgerSignPage.prototype.promptError=function(e){return Object(l.b)(this,void 0,void 0,function(){var t;return Object(l.e)(this,function(n){switch(n.label){case 0:if("string"==typeof e){if("Rejected"===e)return[2];t=e}else t=e instanceof Error?e.message:this.translateService.instant("ledger-sign.error-alert.unknown");return[4,this.alertCtrl.create({header:this.translateService.instant("ledger-sign.error-alert.header"),message:t,buttons:[{text:this.translateService.instant("ledger-sign.error-alert.confirm")}]})];case 1:return n.sent().present().catch(Object(f.b)(f.a.IONIC_ALERT)),[2]}})})},LedgerSignPage.prototype.showLoader=function(e){return Object(l.b)(this,void 0,void 0,function(){var t;return Object(l.e)(this,function(n){switch(n.label){case 0:return this.dismissLoader(),t=this,[4,this.loadingController.create({message:e})];case 1:return t.loader=n.sent(),[4,this.loader.present().catch(Object(f.b)(f.a.IONIC_LOADER))];case 2:return n.sent(),[2]}})})},LedgerSignPage.prototype.dismissLoader=function(){this.loader&&(this.loader.dismiss().catch(Object(f.b)(f.a.IONIC_LOADER)),this.loader=null)},LedgerSignPage.\u0275fac=function LedgerSignPage_Factory(e){return new(e||LedgerSignPage)(m.Jb(a.g),m.Jb(a.a),m.Jb(p.a),m.Jb(o.a),m.Jb(o.kb),m.Jb(s.d),m.Jb(h.a))},LedgerSignPage.\u0275cmp=m.Db({type:LedgerSignPage,selectors:[["page-ledger-sign"]],decls:20,vars:16,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[1,"ion-padding","ion-margin-bottom"],[3,"innerHTML"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["id","confirm","size","default","color","primary","shape","round",3,"click"],[1,"ion-padding-bottom","ion-text-center"],["size","4",1,"content--align__center-center"],["size","4"],["class","ion-padding-horizontal",3,"transaction",4,"ngFor","ngForOf"],[1,"ion-padding-horizontal",3,"transaction"]],template:function LedgerSignPage_Template(e,t){1&e&&(m.Ob(0,"ion-header",0),m.Ob(1,"ion-grid",1),m.Ob(2,"ion-toolbar"),m.Ob(3,"ion-buttons",2),m.Kb(4,"ion-back-button",3),m.Nb(),m.Ob(5,"ion-title"),m.vc(6),m.Zb(7,"translate"),m.Zb(8,"uppercase"),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(9,"ion-content",4),m.Ob(10,"ion-grid",1),m.Ob(11,"ion-row"),m.Kb(12,"h5",5),m.Zb(13,"translate"),m.Nb(),m.tc(14,LedgerSignPage_ng_container_14_Template,24,17,"ng-container",6),m.tc(15,LedgerSignPage_ng_container_15_Template,2,1,"ng-container",6),m.Nb(),m.Ob(16,"ion-fab",7),m.Ob(17,"ion-button",8),m.Wb("click",function LedgerSignPage_Template_ion_button_click_17_listener(){return t.signTx()}),m.vc(18),m.Zb(19,"translate"),m.Nb(),m.Nb(),m.Nb()),2&e&&(m.yb(6),m.wc(m.bc(7,5,"ledger-sign.title",m.ic(14,_c2,m.ac(8,8,t.wallet.protocol.identifier)))),m.yb(6),m.ec("innerHTML",m.ac(13,10,"ledger-sign.text"),m.nc),m.yb(2),m.ec("ngIf",t.airGapTxs&&t.airGapTxs.length>1),m.yb(1),m.ec("ngIf",t.airGapTxs),m.yb(3),m.xc(" ",m.ac(19,12,"ledger-sign.confirm_label")," "))},directives:[o.v,o.u,o.hb,o.j,o.f,o.g,o.fb,o.q,o.R,i.n,o.r,o.i,o.p,i.m,r.n],pipes:[s.c,i.r,i.b,r.f,r.m],styles:[""]}),LedgerSignPage}(),_=function(){function LedgerSignPageModule(){}return LedgerSignPageModule.\u0275mod=m.Hb({type:LedgerSignPageModule}),LedgerSignPageModule.\u0275inj=m.Gb({factory:function LedgerSignPageModule_Factory(e){return new(e||LedgerSignPageModule)},imports:[[o.ib,i.c,c.a,s.b,g.a,r.d,a.j.forChild([{path:"",component:O}])]]}),LedgerSignPageModule}()}}]);