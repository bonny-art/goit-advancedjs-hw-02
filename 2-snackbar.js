import"./assets/styles-Br6qHTMe.js";import"./assets/iziToast-CnDE2cK9.js";import{i as n}from"./assets/vendor-BbbuE1sJ.js";const i="fulfilled",c={form:document.querySelector(".form")},s={resolved:{iconUrl:"/img/resolved.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},rejected:{iconUrl:"/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#E00000"}},m=(e,o)=>new Promise((r,t)=>{setTimeout(()=>{o?r(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)}),a=e=>{e.preventDefault();const o=e.currentTarget,r=o.elements.delay.value,t=o.elements.state.value===i;console.log("Resolved toast options:",{...s.resolved,message}),console.log("Rejected toast options:",{...s.rejected,message}),m(r,t).then(l=>{n.show({...s.resolved,message:l})}).catch(l=>{n.show({...s.rejected,message:l})}),o.reset()};c.form.addEventListener("submit",a);
//# sourceMappingURL=2-snackbar.js.map
