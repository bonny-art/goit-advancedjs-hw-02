import"./assets/styles-a7WDopVs.js";import"./assets/iziToast-CMby2yto.js";import{i as l}from"./assets/vendor-BbbuE1sJ.js";const n="fulfilled",m={form:document.querySelector(".form")},i={resolved:{iconUrl:"/img/resolved.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},rejected:{iconUrl:"/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#E00000"}},c=(e,o)=>new Promise((r,s)=>{setTimeout(()=>{o?r(`✅ Fulfilled promise in ${e}ms`):s(`❌ Rejected promise in ${e}ms`)},e)}),a=e=>{e.preventDefault();const o=e.currentTarget,r=o.elements.delay.value,s=o.elements.state.value===n;c(r,s).then(t=>{l.show({...i.resolved,message:t})}).catch(t=>{l.show({...i.rejected,message:t})}),o.reset()};m.form.addEventListener("submit",a);
//# sourceMappingURL=2-snackbar.js.map
