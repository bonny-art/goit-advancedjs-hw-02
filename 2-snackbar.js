import"./assets/styles-Br6qHTMe.js";import"./assets/iziToast-CMby2yto.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const l="fulfilled",c={form:document.querySelector(".form")},n={resolved:{iconUrl:"/goit-advancedjs-hw-02/img/resolved.svg",progressBarColor:"#326101",backgroundColor:"#59A10D"},rejected:{iconUrl:"/goit-advancedjs-hw-02/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#E00000"}},m=(e,o)=>new Promise((r,s)=>{setTimeout(()=>{o?r(`✅ Fulfilled promise in ${e}ms`):s(`❌ Rejected promise in ${e}ms`)},e)}),a=e=>{e.preventDefault();const o=e.currentTarget,r=o.elements.delay.value,s=o.elements.state.value===l;m(r,s).then(t=>{i.show({...n.resolved,message:t})}).catch(t=>{i.show({...n.rejected,message:t})}),o.reset()};c.form.addEventListener("submit",a);
//# sourceMappingURL=2-snackbar.js.map
