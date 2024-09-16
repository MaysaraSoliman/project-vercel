const __vite__fileDeps=["assets/Hero-DJVVNLO4.js","assets/vendor-BQlkOAEj.js","assets/vendor-BI0lDMpP.css","assets/Hero-xo_nOjpP.css","assets/Pakery-DPHKExYQ.js","assets/Pakery-zTuG-p-n.css","assets/Shipping-CI_nuFCo.js","assets/Shipping-B4rw37Ld.css","assets/NewArrivals-CJGahkw5.js","assets/NewArrivals-BNovgzGN.css","assets/SaleBanner-C03Y5qSK.js","assets/SaleBanner-CpSIf8i0.css","assets/TrendyItems-BfoU_qsh.js","assets/TrendyItems-PG6KLTRc.css","assets/FreshOutfits-BIqLM8M-.js","assets/FreshOutfits-CINnPdUZ.css","assets/ProductsCategories-DF9YSCim.js","assets/ProductsCategories-ogaZVePY.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as s,j as e,L as P,S as C,F as A,T as oe,R as ce,a as de,b as Ne,c as E,d as be,B as _,D as N,e as ue,u as he,M as we,f as Ie,g as G,h as z,C as O,i as K,I as W,k as $e,H as Ae,l as Ee,O as Oe,m as Le,n as T,A as Re,o as Fe,p as De,q as S,s as qe,t as ke,v as V,w as ge,x as pe,y as xe,P as me,z as je,E as Me,G as Ue,J as Be,K as Ge,N as ze,Q as Ve,U as Qe}from"./vendor-BQlkOAEj.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}})();const ve=s.createContext(void 0),Q=()=>{const t=s.useContext(ve);if(!t)throw new Error("useShoppingCart must be used within a ShoppingCartProvider");return t},{Text:X,Title:Ze}=E;function Se(){const{cart:t,updateCartItemQuantity:n,removeItemFromCart:l}=Q(),[u,a]=s.useState(t);s.useEffect(()=>{a(t)},[t]);const i=(r,o)=>{n(r,Number(o))};return e.jsx("div",{id:"shoppingCartDrawer",children:e.jsx("div",{children:u.length<=0?e.jsx("p",{className:"cart_empty",children:"Cart is empty"}):e.jsx("div",{className:"shoppingCartDrawr_container",children:u.map(r=>e.jsxs("div",{className:"item_container",children:[e.jsx("div",{className:"image_box",children:e.jsx(P,{to:`/shop/${r.id}`,children:e.jsx("img",{src:r.productImage,alt:""})})}),e.jsx("div",{className:"item_info",children:e.jsxs(C,{direction:"vertical",size:"small",children:[e.jsx(Ze,{level:5,children:r.productTitle}),e.jsxs(X,{children:["$",r.productNewPrice,".00"]}),e.jsxs(A,{align:"center",justify:"space-between",gap:10,children:[e.jsx("div",{className:"cartNumber_input",children:e.jsx("div",{className:"input_number",children:e.jsx("div",{onClick:o=>o.stopPropagation(),children:e.jsx(oe,{min:1,value:r.quantity,onChange:o=>i(r.id,o),addonAfter:e.jsxs("div",{className:"inc_dec_btns",children:[e.jsx(ce,{onClick:()=>{n(r.id,r.quantity+1)}}),e.jsx(de,{onClick:()=>{r.quantity<=1?l(r.id):n(r.id,r.quantity-1)}})]})})})})}),e.jsx("div",{className:"trash",onClick:o=>o.stopPropagation(),children:e.jsx(Ne,{onClick:()=>{l(r.id)}})})]}),e.jsx(A,{children:e.jsxs(X,{children:["Total: $",r.productNewPrice*r.quantity,".00"]})})]})})]},r.id))})})})}const fe=s.createContext(void 0),Ye=({children:t})=>{const[n,l]=s.useState(!1);return e.jsx(fe.Provider,{value:{isCartOpen:n,setIsCartOpen:l},children:t})},ye=()=>{const t=s.useContext(fe);if(t===void 0)throw new Error("useCart must be used within a CartProvider");return t},_e=s.createContext(void 0),He=({children:t})=>{const[n,l]=s.useState(!1);return e.jsx(_e.Provider,{value:{isAnimationTrue:n,setAnimation:l},children:t})},Pe=()=>{const t=s.useContext(_e);if(t===void 0)throw new Error("useCart must be used within a CartProvider");return t};function Ke(){const{isAnimationTrue:t,setAnimation:n}=Pe();return s.useEffect(()=>{const l=setTimeout(()=>{n(!1)},7e3);return()=>clearTimeout(l)},[t,n]),t?e.jsx("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100vh"},children:e.jsx(be,{numberOfPieces:150,colors:["#ff0000","#00ff00","#0000ff"],tweenDuration:2e3})}):null}const{Title:ee}=E;function We(){const{cart:t}=Q(),[n,l]=s.useState(!1),[u,a]=s.useState(!1),[i,r]=s.useState(!1),{isCartOpen:o,setIsCartOpen:c}=ye(),d=()=>{l(!n)},h=()=>{a(!u)},p=()=>{r(!i)},v=()=>{c(!o)};return e.jsx("div",{className:"top_navBar",children:e.jsx("div",{className:"container",children:e.jsxs(A,{gap:"middle",justify:"space-between",align:"center",children:[e.jsxs("div",{className:"social_links",children:[e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/facebook-alt-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/twitter-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/instagram-outline-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/pinterest-svgrepo-com.svg",alt:""})]})]}),e.jsx("div",{className:"logo",children:e.jsx(P,{to:"/",children:e.jsx("img",{src:"/src/assets/main/logo-retina_140x.png",alt:""})})}),e.jsxs("div",{className:"actions_icons",children:[e.jsxs(_,{onClick:d,children:[e.jsx("img",{src:"/src/assets/icons/search-svgrepo-com.svg",alt:""}),e.jsxs(N,{title:"SEARCH OUR SITE",onClose:d,open:n,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(_,{onClick:h,children:[e.jsx("img",{src:"/src/assets/icons/user-2-svgrepo-com.svg",alt:""}),e.jsxs(N,{title:"LOGIN",onClose:h,open:u,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(_,{onClick:p,children:[e.jsx("img",{src:"/src/assets/icons/favourite-svgrepo-com.svg",alt:""}),e.jsxs(N,{title:"FAVOURITE",onClose:p,open:i,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsx(ue,{count:t.length,children:e.jsxs(_,{onClick:v,children:[e.jsx("img",{src:"/src/assets/icons/cart-1-svgrepo-com.svg",alt:""}),e.jsxs(N,{className:"shopping_cart",title:"SHOPPING CART",onClose:v,open:o,footer:e.jsxs(A,{align:"center",justify:"space-between",children:[e.jsx("div",{children:e.jsx(ee,{level:5,children:"Subtotal:"})}),e.jsx("div",{children:e.jsxs(ee,{level:5,children:["$"," ",t.reduce((y,f)=>y+f.productNewPrice*f.quantity,0),".00"]})})]}),children:[e.jsx(Ke,{}),e.jsx(Se,{})]})]})})]})]})})})}function Je(){const[t,n]=s.useState(""),l=he();return s.useEffect(()=>{n(l.pathname.split("/")[1])},[l]),e.jsx("div",{className:"bottom_navBar",children:e.jsx("div",{className:"container",children:e.jsx("nav",{children:e.jsx(we,{mode:"horizontal",selectedKeys:[t],items:[{label:e.jsx(P,{to:"/",children:"Home"}),key:""},{label:e.jsx(P,{to:"/Shop",children:"Shop"}),key:"Shop"},{label:e.jsx(P,{to:"/Men",children:"Men"}),key:"Men"},{label:e.jsx(P,{to:"/Women",children:"Women"}),key:"Women"},{label:e.jsx(P,{to:"/Kids",children:"Kids"}),key:"Kids"}]})})})})}const{Title:se}=E;function Xe(){const{cart:t}=Q(),[n,l]=s.useState(!1),[u,a]=s.useState(!1),[i,r]=s.useState(!1),[o,c]=s.useState(!1),[d,h]=s.useState(!1),p=()=>{l(!n)},v=()=>{a(!u)},y=()=>{r(!i)},f=()=>{c(!o)},x=()=>{h(!d)};return e.jsx("div",{className:"top_navBar",children:e.jsx("div",{className:"container",children:e.jsxs(A,{gap:"middle",justify:"space-between",align:"center",children:[e.jsxs("div",{className:"mobile_barMenu",children:[e.jsx(Ie,{style:{fontSize:"20px"},onClick:p}),e.jsxs(N,{title:"MENU",onClose:p,open:n,placement:"left",children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsx("div",{className:"logo",children:e.jsx(P,{to:"/",children:e.jsx("img",{src:"/src/assets/main/logo-retina_140x.png",alt:""})})}),e.jsxs("div",{className:"actions_icons",children:[e.jsxs(_,{onClick:v,children:[e.jsx("img",{src:"/src/assets/icons/search-svgrepo-com.svg",alt:""}),e.jsxs(N,{title:"SEARCH OUR SITE",onClose:v,open:u,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(_,{onClick:y,children:[e.jsx("img",{src:"/src/assets/icons/user-2-svgrepo-com.svg",alt:""}),e.jsxs(N,{title:"LOGIN",onClose:y,open:i,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(_,{onClick:f,children:[e.jsx("img",{src:"/src/assets/icons/favourite-svgrepo-com.svg",alt:""}),e.jsxs(N,{title:"FAVOURITE",onClose:f,open:o,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsx(ue,{count:t.length,children:e.jsxs(_,{onClick:x,children:[e.jsx("img",{src:"/src/assets/icons/cart-1-svgrepo-com.svg",alt:""}),e.jsx(N,{title:"SHOPPING CART",onClose:x,open:d,footer:e.jsxs(A,{align:"center",justify:"space-between",children:[e.jsx("div",{children:e.jsx(se,{level:5,children:"Subtotal:"})}),e.jsx("div",{children:e.jsxs(se,{level:5,children:["$ ",t.reduce((L,w)=>L+w.productNewPrice*w.quantity,0),".00"]})})]}),children:e.jsx(Se,{})})]})})]})]})})})}function es(){const t=G({query:"(min-width: 600px)"});return e.jsx("div",{className:"main_header",children:t?e.jsxs(e.Fragment,{children:[e.jsx(We,{}),e.jsx(Je,{})]}):e.jsx(Xe,{})})}const{Title:q,Paragraph:g}=E,{Panel:te}=K;function ss(){const t=G({query:"(max-width: 575px)"});return e.jsx("section",{id:"footer",children:e.jsx("div",{className:"footer_container",children:e.jsxs(z,{gutter:16,children:[e.jsx(O,{xs:24,sm:12,md:8,lg:6,xl:6,children:e.jsxs(C,{direction:"vertical",size:"middle",children:[e.jsx("div",{className:"logo",children:e.jsx(P,{to:"/",children:e.jsx("img",{src:"/src/assets/main/logo-retina_140x.png",alt:""})})}),e.jsx("div",{className:"address",children:e.jsx(g,{children:"Calista Wise 7292 Dictum Av. Antonio, Italy."})}),e.jsx("div",{className:"phone_number",children:e.jsx(g,{children:"(+01)-800-3456-88"})}),e.jsx("div",{className:"mail",children:e.jsx(g,{children:e.jsx("a",{href:"mailto:contact@company.com",target:"_blank",children:"contact@company.com"})})}),e.jsxs("div",{className:"social_links",children:[e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/facebook-alt-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/twitter-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/instagram-outline-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/pinterest-svgrepo-com.svg",alt:""})]})]})]})}),e.jsx(O,{xs:24,sm:12,md:8,lg:6,xl:6,children:t?e.jsx(K,{children:e.jsx(te,{header:"Useful links",children:e.jsxs(C,{direction:"vertical",size:"middle",children:[e.jsx(q,{level:3,children:"Useful links"}),e.jsx(g,{children:"Delivery Information"}),e.jsx(g,{children:"Terms & Condition"}),e.jsx(g,{children:"Customer Service"}),e.jsx(g,{children:"Privacy Policy"}),e.jsx(g,{children:"Search Terms"})]})},"1")}):e.jsxs(C,{direction:"vertical",size:"middle",children:[e.jsx(q,{level:3,children:"Useful links"}),e.jsx(g,{children:"Delivery Information"}),e.jsx(g,{children:"Terms & Condition"}),e.jsx(g,{children:"Customer Service"}),e.jsx(g,{children:"Privacy Policy"}),e.jsx(g,{children:"Search Terms"})]})}),e.jsx(O,{xs:24,sm:12,md:8,lg:6,xl:6,children:t?e.jsx(K,{children:e.jsx(te,{header:"Get in touch",children:e.jsxs(C,{direction:"vertical",size:"middle",children:[e.jsx(q,{level:3,children:"Get in touch"}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Whatsapp"}),e.jsx("a",{href:"https://wa.me/1556177338",target:"_blank",children:"+01556177338"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Real Live Support"}),e.jsx(g,{children:"Calista Antonio, Italy"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Monday - Friday"}),e.jsx(g,{children:"08:00 - 20:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Saturday"}),e.jsx(g,{children:"09:00 - 21:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Sunday"}),e.jsx(g,{children:"13:00 - 22:00"})]})]})},"2")}):e.jsxs(C,{direction:"vertical",size:"middle",children:[e.jsx(q,{level:3,children:"Get in touch"}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Whatsapp"}),e.jsx("a",{href:"https://wa.me/1556177338",target:"_blank",children:"+01556177338"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Real Live Support"}),e.jsx(g,{children:"Calista Antonio, Italy"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Monday - Friday"}),e.jsx(g,{children:"08:00 - 20:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Saturday"}),e.jsx(g,{children:"09:00 - 21:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(g,{children:"Sunday"}),e.jsx(g,{children:"13:00 - 22:00"})]})]})}),e.jsx(O,{xs:24,sm:12,md:8,lg:6,xl:6,children:e.jsxs(C,{direction:"vertical",size:"middle",children:[e.jsx(q,{level:3,children:"Newsletter signup"}),e.jsx(g,{children:"Subscribe to our newsletters now and stay up-to-date with new collections"}),e.jsxs(C.Compact,{style:{width:"100%"},children:[e.jsx(W,{placeholder:"Your email address"}),e.jsx(_,{type:"primary",children:"Subscribe"})]}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/visa/payment-icons_180x.png",alt:""})})]})})]})})})}function ts(){return e.jsx("div",{className:"App",children:e.jsxs($e,{children:[e.jsx(Ae,{children:e.jsx(es,{})}),e.jsx(Ee,{children:e.jsx(Oe,{})}),e.jsx(Le,{children:e.jsx(ss,{})})]})})}function rs(){return e.jsx("div",{children:"ErrorPage"})}const ns="modulepreload",is=function(t){return"/project-vercel/"+t},re={},b=function(n,l,u){let a=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(l.map(o=>{if(o=is(o),o in re)return;re[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ns,c||(h.as="script",h.crossOrigin=""),h.href=o,r&&h.setAttribute("nonce",r),document.head.appendChild(h),c)return new Promise((p,v)=>{h.addEventListener("load",p),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return a.then(()=>n()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})},as=T.lazy(()=>b(()=>import("./Hero-DJVVNLO4.js"),__vite__mapDeps([0,1,2,3]))),ls=T.lazy(()=>b(()=>import("./Pakery-DPHKExYQ.js"),__vite__mapDeps([4,1,2,5]))),os=T.lazy(()=>b(()=>import("./Shipping-CI_nuFCo.js"),__vite__mapDeps([6,1,2,7]))),cs=T.lazy(()=>b(()=>import("./NewArrivals-CJGahkw5.js"),__vite__mapDeps([8,1,2,9]))),ds=T.lazy(()=>b(()=>import("./SaleBanner-C03Y5qSK.js"),__vite__mapDeps([10,1,2,11]))),us=T.lazy(()=>b(()=>import("./TrendyItems-BfoU_qsh.js"),__vite__mapDeps([12,1,2,13]))),hs=T.lazy(()=>b(()=>import("./FreshOutfits-BIqLM8M-.js"),__vite__mapDeps([14,1,2,15]))),gs=T.lazy(()=>b(()=>import("./ProductsCategories-DF9YSCim.js"),__vite__mapDeps([16,1,2,17]))),ps=T.lazy(()=>b(()=>Promise.resolve().then(()=>vs),void 0));function xs(){return e.jsxs("div",{children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(as,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ls,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(os,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(cs,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ds,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(us,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(hs,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(gs,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ps,{})})]})}const ms=new Re({uri:"http://localhost:3000/graphql",cache:new Fe}),{Title:js}=E;function Te(){const t={dots:!0,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:0,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0,arrows:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2,arrows:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,arrows:!0}}]};return e.jsxs("section",{id:"followus_instagram",children:[e.jsx(js,{children:"Follow us on Instagram"}),e.jsx("div",{className:"slider-container",children:e.jsxs(De,{...t,children:[e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/1.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/2.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/3.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/4.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/5.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/6.jpg",alt:""})})]})})]})}const vs=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),ne=S`
  query getAllProducts_Sorted( $page: Int!, $perPage: Int!, $sortField: String!, $sortOrder: String!) {
    allTrendyProducts( page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta{
      count
    }
  }
`,Ss=S`
  query getAllProducts_CategoryFiltered_Sorted($category: String!, $page: Int!, $perPage: Int!, $sortField: String!, $sortOrder: String!) {
    allTrendyProducts(filter: { category: $category }, page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter:{category : $category}) {
      count
    }
  }
`,fs=S`
  query get_ALLPRODUCTS_QUERY_FilterBySearch(
    $q: String!,
    $sortField: String,
    $sortOrder: String,
    $page: Int!,
    $perPage: Int!
  ) {
    allTrendyProducts(
      filter: { q: $q },
      sortField: $sortField,
      sortOrder: $sortOrder,
      page: $page,
      perPage: $perPage
    ) {
      id
      productImage
      productTitle
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter:{q : $q}) {
      count
    }
  }
`;function Z(){return e.jsx(A,{align:"center",justify:"center",id:"loadingSpin",children:e.jsx(qe,{tip:"Loading",size:"large",children:e.jsx("p",{children:"This is some content that might take time to load."})})})}const{Title:ie}=E;function J({trendyProduct:t}){return e.jsx("div",{className:"product_card",children:e.jsx(P,{to:`/Shop/${t.id}`,children:e.jsxs(ke,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:t.productImage}),children:[e.jsx(ie,{level:4,children:t.productTitle}),e.jsxs(ie,{level:5,children:["$",t.productNewPrice,".00"]})]})})})}function ys(){var U;const[t,n]=s.useState("All"),[l,u]=s.useState(""),[a,i]=s.useState("ASC"),[r,o]=s.useState(1),[c]=s.useState(12),[d,h]=s.useState(!0),[p,v]=s.useState("6"),y=G({query:"(min-width: 768px)"}),[f,x]=s.useState(""),[L,w]=s.useState(!1),[R,F]=s.useState(ne),D=m=>{m=="Name,A-Z"||m=="Name,Z-A"||m=="Price,low-high"||m=="Price,high-low"?(n("All"),m=="Name,Z-A"||m=="Price,high-low"?i("DES"):i("ASC"),m=="Name,Z-A"||m=="Name,A-Z"?u("productTitle"):u("productNewPrice")):(n(m),u(""),i("ASC")),o(1)};s.useEffect(()=>{f!==""?(F(fs),w(!0)):t==="All"?(F(ne),w(!1)):(F(Ss),w(!1)),o(1)},[f,t]);const{loading:k,error:M,data:I}=V(R,{variables:{q:f,category:t,page:r-1,perPage:c,sortField:l,sortOrder:a}});if(s.useEffect(()=>{let m;return h(!0),k||(m=setTimeout(()=>{h(!1)},500)),()=>clearTimeout(m)},[k]),M)return e.jsx("p",{children:"Error"});const $=m=>{x(m)},Y=m=>{v(m)},H=m=>{o(m)};return e.jsx("section",{id:"shop",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"shop_container",children:[e.jsxs("div",{className:"select_menu",children:[e.jsx("div",{className:"search_input",children:e.jsx(W,{addonBefore:e.jsx(ge,{}),allowClear:!0,placeholder:"search",value:f,onChange:m=>$(m.target.value)})}),y&&e.jsx(pe,{options:[{label:e.jsx("div",{className:"cat_view"}),value:"12"},{label:e.jsx("div",{className:"cat_view"}),value:"8"},{label:e.jsx("div",{className:"cat_view"}),value:"6"},{label:e.jsx("div",{className:"cat_view"}),value:"4"}],value:p,onChange:Y}),e.jsx(xe,{defaultValue:"All",disabled:L,style:{width:160},onChange:D,options:[{value:"All",label:"ALL"},{value:"Featured",label:"FEATURED"},{value:"Best Selling",label:"BEST SELLING"},{value:"Top Rated",label:"TOP RATED"},{value:"Name,A-Z",label:"Alphabetically, A-Z"},{value:"Name,Z-A",label:"Alphabetically, Z-A"},{value:"Price,low-high",label:"Price, low to high"},{value:"Price,high-low",label:"Price, high to low"}]})]}),d?e.jsx(Z,{}):e.jsx(z,{gutter:16,className:"products_container",children:I==null?void 0:I.allTrendyProducts.map(m=>e.jsx(O,{xs:Number(p),sm:Number(p),md:Number(p),lg:Number(p),xl:Number(p),className:"productCard_container",children:e.jsx(J,{trendyProduct:m},m.id)},m.id))},r),e.jsx("div",{className:"pagination",children:e.jsx(me,{hideOnSinglePage:!0,current:r,total:(U=I==null?void 0:I._allTrendyProductsMeta)==null?void 0:U.count,pageSize:c,onChange:H})})]})})})}function _s(){return e.jsxs("div",{children:[e.jsx(Te,{}),e.jsx(ys,{})]})}const ae=S`
  query getAllProducts_Sorted(
    $gender: String!
    $page: Int!
    $perPage: Int!
    $sortField: String!
    $sortOrder: String!
  ) {
    allTrendyProducts(
      filter: { gender: $gender }
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter: { gender: $gender }) {
      count
    }
  }
`,Ps=S`
  query get_ALLPRODUCTS_QUERY_FilterBySearch(
    $q: String!
    $sortField: String
    $sortOrder: String
    $page: Int!
    $perPage: Int!
    $gender: String
  ) {
    allTrendyProducts(
      filter: { q: $q, gender: $gender }
      sortField: $sortField
      sortOrder: $sortOrder
      page: $page
      perPage: $perPage
    ) {
      id
      productImage
      productTitle
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter: { q: $q, gender: $gender }) {
      count
    }
  }
`,Ts=S`
  query getAllProducts_CategoryFiltered_Sorted(
    $gender: String!
    $category: String!
    $page: Int!
    $perPage: Int!
    $sortField: String!
    $sortOrder: String!
  ) {
    allTrendyProducts(
      filter: { gender: $gender, category: $category }
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter: { gender: $gender, category: $category }) {
      count
    }
  }
`;function Ce({Gender:t}){var m;const[n,l]=s.useState("All"),[u,a]=s.useState(""),[i,r]=s.useState("ASC"),[o,c]=s.useState(1),[d]=s.useState(12),[h,p]=s.useState(!0),[v,y]=s.useState("6"),f=G({query:"(min-width: 768px)"}),[x,L]=s.useState(""),[w,R]=s.useState(!1),[F,D]=s.useState(ae),k=j=>{j=="Name,A-Z"||j=="Name,Z-A"||j=="Price,low-high"||j=="Price,high-low"?(l("All"),j=="Name,Z-A"||j=="Price,high-low"?r("DES"):r("ASC"),j=="Name,Z-A"||j=="Name,A-Z"?a("productTitle"):a("productNewPrice")):(l(j),a(""),r("ASC")),c(1)};s.useEffect(()=>{x!==""?(D(Ps),R(!0)):n==="All"?(D(ae),R(!1)):(D(Ts),R(!1)),c(1)},[x,n]);const{loading:M,error:I,data:$}=V(F,{variables:{gender:t,q:x,category:n,page:o-1,perPage:d,sortField:u,sortOrder:i}});if(s.useEffect(()=>{let j;return p(!0),M||(j=setTimeout(()=>{p(!1)},500)),()=>clearTimeout(j)},[M]),I)return e.jsx("p",{children:"Error"});const Y=j=>{L(j)},H=j=>{y(j)},U=j=>{c(j)};return e.jsx("section",{id:"shop",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"shop_container",children:[e.jsxs("div",{className:"select_menu",children:[e.jsx("div",{className:"search_input",children:e.jsx(W,{addonBefore:e.jsx(ge,{}),allowClear:!0,placeholder:"search",value:x,onChange:j=>Y(j.target.value)})}),f&&e.jsx(pe,{options:[{label:e.jsx("div",{className:"cat_view"}),value:"12"},{label:e.jsx("div",{className:"cat_view"}),value:"8"},{label:e.jsx("div",{className:"cat_view"}),value:"6"},{label:e.jsx("div",{className:"cat_view"}),value:"4"}],value:v,onChange:H}),e.jsx(xe,{defaultValue:"All",disabled:w,style:{width:160},onChange:k,options:[{value:"All",label:"ALL"},{value:"Featured",label:"FEATURED"},{value:"Best Selling",label:"BEST SELLING"},{value:"Top Rated",label:"TOP RATED"},{value:"Name,A-Z",label:"Alphabetically, A-Z"},{value:"Name,Z-A",label:"Alphabetically, Z-A"},{value:"Price,low-high",label:"Price, low to high"},{value:"Price,high-low",label:"Price, high to low"}]})]}),h?e.jsx(Z,{}):e.jsx(z,{gutter:16,className:"products_container",children:$==null?void 0:$.allTrendyProducts.map(j=>e.jsx(O,{xs:Number(v),sm:Number(v),md:Number(v),lg:Number(v),xl:Number(v),className:"productCard_container",children:e.jsx(J,{trendyProduct:j},j.id)},j.id))},o),e.jsx("div",{className:"pagination",children:e.jsx(me,{hideOnSinglePage:!0,current:o,total:(m=$==null?void 0:$._allTrendyProductsMeta)==null?void 0:m.count,pageSize:d,onChange:U})})]})})})}function Cs(){return e.jsx("div",{children:e.jsx(Ce,{Gender:"Male"})})}function Ns(){return e.jsx("div",{children:"Kids"})}function bs(){return e.jsx("div",{children:e.jsx(Ce,{Gender:"Female"})})}S`
  query get_TrendyProducts {
    allTrendyProducts {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;S`
  query get_TrendyProductsFilteredByCategory($category: String!) {
    allTrendyProducts(filter: { category: $category }) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;const ws=S`
  query get_TrendyProductsFilteredByID($id: ID!) {
    allTrendyProducts(filter: { id: $id }) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`,Is=S`
  query get_TrendyProductsExcept_FilteredID($id_neq: ID! , $page: Int, $perPage: Int) {
    allTrendyProducts(filter: { id_neq: $id_neq } , page: $page, perPage: $perPage) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`,ks=S`
  query get_TrendyProductsFilteredByNewArrivals($newArrivals:  Boolean) {
    allTrendyProducts(filter: { newArrivals: $newArrivals }) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
  }
`,Ms=S`
  query GetTrendyProducts($page: Int, $perPage: Int) {
    allTrendyProducts(page: $page, perPage: $perPage) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`,Us=S`
  query GetTrendyProducts($category: String!, $page: Int, $perPage: Int) {
    allTrendyProducts(
      filter: { category: $category }
      page: $page
      perPage: $perPage
    ) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`,Bs=S`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount( $category: String!) {
    _allTrendyProductsMeta(filter: { category: $category }) {
      count
    }
  }
`,Gs=S`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount ( $q: String) {
    _allTrendyProductsMeta(filter: { q: $q }){
      count
    }
  }
`;S`
  query AllTrendy($page: Int, $perPage: Int, $category: String) {
    allTrendyProducts(page: $page, perPage: $perPage) {
      id
      productImage
      productTitle
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter:{category : $category}) {
      count
    }
  }
`;function $s({product:t,currentCartInputValue:n}){const{cart:l,addItemToCart:u,updateCartItemQuantity:a}=Q(),{setIsCartOpen:i}=ye(),{setAnimation:r}=Pe(),o=c=>{const d=l.find(p=>p.id===c.id),h=l.findIndex(p=>p.id===c.id);if(d){const p=l[h].quantity+n;a(c.id,p),i(!0)}else u(c,n),i(!0);r(!0)};return e.jsx("div",{children:e.jsx(_,{onClick:()=>o(t),children:"ADD TO CART"})})}const{Title:B}=E,{Group:As}=Be;function Es(){var v,y,f;const{productId:t}=je(),[n,l]=s.useState(""),[u,a]=s.useState(1),[i,r]=s.useState(!0),{loading:o,error:c,data:d}=V(ws,{variables:{id:t}});s.useEffect(()=>{d&&d.allTrendyProducts.length>0&&(l(d.allTrendyProducts[0].productImage),a(1))},[d]),s.useEffect(()=>{let x;return r(!0),o||(x=setTimeout(()=>{r(!1)},500)),()=>clearTimeout(x)},[o]);const h=x=>{typeof x.target.value=="string"&&l(x.target.value)},p=x=>{a(Number(x))};return c?e.jsx("p",{children:"Error"}):e.jsx("div",{id:"productPreview",children:e.jsx("div",{className:"container",children:i?e.jsx(Z,{}):e.jsxs(A,{className:"singleProduct_container",gap:"large",children:[e.jsxs("div",{className:"product_images",children:[e.jsx("div",{className:"images_category",children:e.jsx(As,{value:n,onChange:h,options:(y=(v=d==null?void 0:d.allTrendyProducts[0])==null?void 0:v.thumbinals)==null?void 0:y.map(x=>({label:e.jsxs("div",{className:"image_box",children:[e.jsx("img",{src:x})," "]}),value:x}))})}),e.jsx("div",{className:"main_image",children:e.jsx(Me,{className:"main_singleProduct_img",src:n})})]}),e.jsx("div",{className:"product_info",children:e.jsx(C,{direction:"vertical",size:"middle",children:(f=d==null?void 0:d.allTrendyProducts)==null?void 0:f.map(x=>e.jsxs("div",{className:"info",children:[e.jsx(B,{level:4,children:x.productTitle}),e.jsxs(B,{level:5,children:["$",x.productNewPrice,".00"]}),e.jsxs("div",{className:"rate",children:[e.jsx(Ue,{allowHalf:!0,defaultValue:x.reviews,disabled:!0}),e.jsxs(B,{level:5,children:["(",x.reviews,")"]})]}),e.jsx("div",{className:"describtion",children:e.jsx(B,{level:5,children:"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"})}),e.jsxs("div",{className:"buttons",children:[e.jsxs("div",{className:"addToCart_btns",children:[e.jsx("div",{className:"cartNumber_input",children:e.jsx("div",{className:"input_number",children:e.jsx(oe,{min:1,defaultValue:u,value:u,controls:!1,onChange:p,addonAfter:e.jsxs("div",{className:"inc_dec_btns",children:[e.jsx(ce,{onClick:()=>{a(u+1)}}),e.jsx(de,{onClick:()=>{u>1&&a(u-1)}})]})})})}),e.jsx($s,{product:x,currentCartInputValue:u})]}),e.jsx(_,{className:"buy_it_now",children:"BUY IT NOW"})]})]},x.id))})})]},d==null?void 0:d.allTrendyProducts[0].id)})})}const{Title:Os}=E;function le({id_neq:t,page:n,perPage:l,title:u}){var d;const[a,i]=s.useState(!0),{loading:r,error:o,data:c}=V(Is,{variables:{id_neq:t,page:n,perPage:l}});return s.useEffect(()=>{let h;return i(!0),r||(h=setTimeout(()=>{i(!1)},500)),()=>clearTimeout(h)},[r]),o?e.jsx("p",{children:"Error"}):e.jsx("section",{id:"recommended",children:e.jsx("div",{className:"container",children:a?e.jsx(Z,{}):e.jsxs("div",{className:"recommended_container",children:[e.jsx("div",{className:"title",children:e.jsx(Os,{level:2,children:u})}),e.jsx(z,{gutter:16,className:"products_container",children:(d=c==null?void 0:c.allTrendyProducts)==null?void 0:d.map(h=>e.jsx(O,{xs:24,sm:8,md:6,lg:6,xl:6,className:"productCard_container",children:e.jsx(J,{trendyProduct:h},h.id)},h.id))})]})})})}function Ls(){const{productId:t}=je(),[n,l]=s.useState(""),[u,a]=s.useState(0),i=Math.floor(Math.random()*5)+1;return s.useEffect(()=>{t&&(l(t),a(i))},[i,t]),e.jsxs("div",{children:[e.jsx(Es,{}),e.jsx(le,{id_neq:n,page:u,perPage:4,title:"You may also like"}),e.jsx(le,{id_neq:n,page:u+1,perPage:4,title:"Recommended products"})]})}const Rs=({children:t})=>{const{pathname:n}=he();return s.useEffect(()=>{window.scrollTo(0,0)},[n]),t||null},Fs=({children:t})=>{const[n,l]=s.useState([]);s.useEffect(()=>{const c=localStorage.getItem("cart");c&&l(JSON.parse(c))},[]);const u=c=>{l(c),localStorage.setItem("cart",JSON.stringify(c))},o={cart:n,addItemToCart:(c,d)=>{const h=[...n,{...c,quantity:d}];u(h)},removeItemFromCart:c=>{const d=n.filter(h=>h.id!==c);u(d)},updateCartItemQuantity:(c,d)=>{const h=n.map(p=>p.id===c?{...p,quantity:d}:p);u(h)}};return e.jsx(ve.Provider,{value:o,children:t})};function Ds(){const t=Ge([{path:"/",element:e.jsx(ts,{}),errorElement:e.jsx(rs,{}),children:[{path:"/",element:e.jsx(xs,{})},{path:"/Shop",element:e.jsx(_s,{})},{path:"/Men",element:e.jsx(Cs,{})},{path:"/Women",element:e.jsx(bs,{})},{path:"/Kids",element:e.jsx(Ns,{})},{path:"/Shop/:productId",element:e.jsxs(Rs,{children:[" ",e.jsx(Ls,{})," "]})}]}]);return e.jsx(e.Fragment,{children:e.jsx(ze,{client:ms,children:e.jsx(He,{children:e.jsx(Fs,{children:e.jsx(Ye,{children:e.jsx(Ve,{router:t})})})})})})}Qe.createRoot(document.getElementById("root")).render(e.jsx(T.StrictMode,{children:e.jsx(Ds,{})}));export{$s as A,ks as G,Z as L,J as P,Gs as a,Bs as b,ms as c,Ms as d,Us as e,ws as f};
