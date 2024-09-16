import{r,j as e,L as T,S as A,F as N,T as te,R as ie,a as ne,b as ke,c as y,d as qe,B as P,D as b,e as me,u as ve,M as fe,f as Me,g as W,h as Y,C as q,i as re,I as le,k as Be,H as Ue,l as Ge,O as Qe,m as Ve,n as Se,o as Ze,p as C,q as ze,s as We,t as D,v as ye,A as Ye,w as He,P as ae,x as Ne,y as Te,z as Pe,E as Ce,G as Ke,J as Je,K as Xe,N as es,Q as ss,U as rs,V as ts}from"./vendor-B6VQf29Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=l(n);fetch(n.href,c)}})();const _e=r.createContext(void 0),H=()=>{const s=r.useContext(_e);if(!s)throw new Error("useShoppingCart must be used within a ShoppingCartProvider");return s},{Text:ce,Title:is}=y;function we(){const{cart:s,updateCartItemQuantity:t,removeItemFromCart:l}=H(),[o,n]=r.useState(s);r.useEffect(()=>{n(s)},[s]);const c=(i,a)=>{t(i,Number(a))};return e.jsx("div",{id:"shoppingCartDrawer",children:e.jsx("div",{children:o.length<=0?e.jsx("p",{className:"cart_empty",children:"Cart is empty"}):e.jsx("div",{className:"shoppingCartDrawr_container",children:o.map(i=>e.jsxs("div",{className:"item_container",children:[e.jsx("div",{className:"image_box",children:e.jsx(T,{to:`/shop/${i.id}`,children:e.jsx("img",{src:i.productImage,alt:""})})}),e.jsx("div",{className:"item_info",children:e.jsxs(A,{direction:"vertical",size:"small",children:[e.jsx(is,{level:5,children:i.productTitle}),e.jsxs(ce,{children:["$",i.productNewPrice,".00"]}),e.jsxs(N,{align:"center",justify:"space-between",gap:10,children:[e.jsx("div",{className:"cartNumber_input",children:e.jsx("div",{className:"input_number",children:e.jsx("div",{onClick:a=>a.stopPropagation(),children:e.jsx(te,{min:1,value:i.quantity,onChange:a=>c(i.id,a),addonAfter:e.jsxs("div",{className:"inc_dec_btns",children:[e.jsx(ie,{onClick:()=>{t(i.id,i.quantity+1)}}),e.jsx(ne,{onClick:()=>{i.quantity<=1?l(i.id):t(i.id,i.quantity-1)}})]})})})})}),e.jsx("div",{className:"trash",onClick:a=>a.stopPropagation(),children:e.jsx(ke,{onClick:()=>{l(i.id)}})})]}),e.jsx(N,{children:e.jsxs(ce,{children:["Total: $",i.productNewPrice*i.quantity,".00"]})})]})})]},i.id))})})})}const be=r.createContext(void 0),ns=({children:s})=>{const[t,l]=r.useState(!1);return e.jsx(be.Provider,{value:{isCartOpen:t,setIsCartOpen:l},children:s})},Ie=()=>{const s=r.useContext(be);if(s===void 0)throw new Error("useCart must be used within a CartProvider");return s},$e=r.createContext(void 0),ls=({children:s})=>{const[t,l]=r.useState(!1);return e.jsx($e.Provider,{value:{isAnimationTrue:t,setAnimation:l},children:s})},Ae=()=>{const s=r.useContext($e);if(s===void 0)throw new Error("useCart must be used within a CartProvider");return s};function as(){const{isAnimationTrue:s,setAnimation:t}=Ae();return r.useEffect(()=>{const l=setTimeout(()=>{t(!1)},7e3);return()=>clearTimeout(l)},[s,t]),s?e.jsx("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100vh"},children:e.jsx(qe,{numberOfPieces:150,colors:["#ff0000","#00ff00","#0000ff"],tweenDuration:2e3})}):null}const{Title:oe}=y;function cs(){const{cart:s}=H(),[t,l]=r.useState(!1),[o,n]=r.useState(!1),[c,i]=r.useState(!1),{isCartOpen:a,setIsCartOpen:u}=Ie(),d=()=>{l(!t)},x=()=>{n(!o)},g=()=>{i(!c)},j=()=>{u(!a)};return e.jsx("div",{className:"top_navBar",children:e.jsx("div",{className:"container",children:e.jsxs(N,{gap:"middle",justify:"space-between",align:"center",children:[e.jsxs("div",{className:"social_links",children:[e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/facebook-alt-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/twitter-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/instagram-outline-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/pinterest-svgrepo-com.svg",alt:""})]})]}),e.jsx("div",{className:"logo",children:e.jsx(T,{to:"/",children:e.jsx("img",{src:"/src/assets/main/logo-retina_140x.png",alt:""})})}),e.jsxs("div",{className:"actions_icons",children:[e.jsxs(P,{onClick:d,children:[e.jsx("img",{src:"/src/assets/icons/search-svgrepo-com.svg",alt:""}),e.jsxs(b,{title:"SEARCH OUR SITE",onClose:d,open:t,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(P,{onClick:x,children:[e.jsx("img",{src:"/src/assets/icons/user-2-svgrepo-com.svg",alt:""}),e.jsxs(b,{title:"LOGIN",onClose:x,open:o,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(P,{onClick:g,children:[e.jsx("img",{src:"/src/assets/icons/favourite-svgrepo-com.svg",alt:""}),e.jsxs(b,{title:"FAVOURITE",onClose:g,open:c,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsx(me,{count:s.length,children:e.jsxs(P,{onClick:j,children:[e.jsx("img",{src:"/src/assets/icons/cart-1-svgrepo-com.svg",alt:""}),e.jsxs(b,{className:"shopping_cart",title:"SHOPPING CART",onClose:j,open:a,footer:e.jsxs(N,{align:"center",justify:"space-between",children:[e.jsx("div",{children:e.jsx(oe,{level:5,children:"Subtotal:"})}),e.jsx("div",{children:e.jsxs(oe,{level:5,children:["$"," ",s.reduce((_,S)=>_+S.productNewPrice*S.quantity,0),".00"]})})]}),children:[e.jsx(as,{}),e.jsx(we,{})]})]})})]})]})})})}function os(){const[s,t]=r.useState(""),l=ve();return r.useEffect(()=>{t(l.pathname.split("/")[1])},[l]),e.jsx("div",{className:"bottom_navBar",children:e.jsx("div",{className:"container",children:e.jsx("nav",{children:e.jsx(fe,{mode:"horizontal",selectedKeys:[s],items:[{label:e.jsx(T,{to:"/",children:"Home"}),key:""},{label:e.jsx(T,{to:"/Shop",children:"Shop"}),key:"Shop"},{label:e.jsx(T,{to:"/Men",children:"Men"}),key:"Men"},{label:e.jsx(T,{to:"/Women",children:"Women"}),key:"Women"},{label:e.jsx(T,{to:"/Kids",children:"Kids"}),key:"Kids"}]})})})})}const{Title:de}=y;function ds(){const{cart:s}=H(),[t,l]=r.useState(!1),[o,n]=r.useState(!1),[c,i]=r.useState(!1),[a,u]=r.useState(!1),[d,x]=r.useState(!1),g=()=>{l(!t)},j=()=>{n(!o)},_=()=>{i(!c)},S=()=>{u(!a)},p=()=>{x(!d)};return e.jsx("div",{className:"top_navBar",children:e.jsx("div",{className:"container",children:e.jsxs(N,{gap:"middle",justify:"space-between",align:"center",children:[e.jsxs("div",{className:"mobile_barMenu",children:[e.jsx(Me,{style:{fontSize:"20px"},onClick:g}),e.jsxs(b,{title:"MENU",onClose:g,open:t,placement:"left",children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsx("div",{className:"logo",children:e.jsx(T,{to:"/",children:e.jsx("img",{src:"/src/assets/main/logo-retina_140x.png",alt:""})})}),e.jsxs("div",{className:"actions_icons",children:[e.jsxs(P,{onClick:j,children:[e.jsx("img",{src:"/src/assets/icons/search-svgrepo-com.svg",alt:""}),e.jsxs(b,{title:"SEARCH OUR SITE",onClose:j,open:o,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(P,{onClick:_,children:[e.jsx("img",{src:"/src/assets/icons/user-2-svgrepo-com.svg",alt:""}),e.jsxs(b,{title:"LOGIN",onClose:_,open:c,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsxs(P,{onClick:S,children:[e.jsx("img",{src:"/src/assets/icons/favourite-svgrepo-com.svg",alt:""}),e.jsxs(b,{title:"FAVOURITE",onClose:S,open:a,children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]}),e.jsx(me,{count:s.length,children:e.jsxs(P,{onClick:p,children:[e.jsx("img",{src:"/src/assets/icons/cart-1-svgrepo-com.svg",alt:""}),e.jsx(b,{title:"SHOPPING CART",onClose:p,open:d,footer:e.jsxs(N,{align:"center",justify:"space-between",children:[e.jsx("div",{children:e.jsx(de,{level:5,children:"Subtotal:"})}),e.jsx("div",{children:e.jsxs(de,{level:5,children:["$ ",s.reduce((L,f)=>L+f.productNewPrice*f.quantity,0),".00"]})})]}),children:e.jsx(we,{})})]})})]})]})})})}function us(){const s=W({query:"(min-width: 600px)"});return e.jsx("div",{className:"main_header",children:s?e.jsxs(e.Fragment,{children:[e.jsx(cs,{}),e.jsx(os,{})]}):e.jsx(ds,{})})}const{Title:U,Paragraph:h}=y,{Panel:ue}=re;function hs(){const s=W({query:"(max-width: 575px)"});return e.jsx("section",{id:"footer",children:e.jsx("div",{className:"footer_container",children:e.jsxs(Y,{gutter:16,children:[e.jsx(q,{xs:24,sm:12,md:8,lg:6,xl:6,children:e.jsxs(A,{direction:"vertical",size:"middle",children:[e.jsx("div",{className:"logo",children:e.jsx(T,{to:"/",children:e.jsx("img",{src:"/src/assets/main/logo-retina_140x.png",alt:""})})}),e.jsx("div",{className:"address",children:e.jsx(h,{children:"Calista Wise 7292 Dictum Av. Antonio, Italy."})}),e.jsx("div",{className:"phone_number",children:e.jsx(h,{children:"(+01)-800-3456-88"})}),e.jsx("div",{className:"mail",children:e.jsx(h,{children:e.jsx("a",{href:"mailto:contact@company.com",target:"_blank",children:"contact@company.com"})})}),e.jsxs("div",{className:"social_links",children:[e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/facebook-alt-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/twitter-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/instagram-outline-svgrepo-com.svg",alt:""})]}),e.jsxs("a",{href:"#",children:[" ",e.jsx("img",{src:"/src/assets/icons/pinterest-svgrepo-com.svg",alt:""})]})]})]})}),e.jsx(q,{xs:24,sm:12,md:8,lg:6,xl:6,children:s?e.jsx(re,{children:e.jsx(ue,{header:"Useful links",children:e.jsxs(A,{direction:"vertical",size:"middle",children:[e.jsx(U,{level:3,children:"Useful links"}),e.jsx(h,{children:"Delivery Information"}),e.jsx(h,{children:"Terms & Condition"}),e.jsx(h,{children:"Customer Service"}),e.jsx(h,{children:"Privacy Policy"}),e.jsx(h,{children:"Search Terms"})]})},"1")}):e.jsxs(A,{direction:"vertical",size:"middle",children:[e.jsx(U,{level:3,children:"Useful links"}),e.jsx(h,{children:"Delivery Information"}),e.jsx(h,{children:"Terms & Condition"}),e.jsx(h,{children:"Customer Service"}),e.jsx(h,{children:"Privacy Policy"}),e.jsx(h,{children:"Search Terms"})]})}),e.jsx(q,{xs:24,sm:12,md:8,lg:6,xl:6,children:s?e.jsx(re,{children:e.jsx(ue,{header:"Get in touch",children:e.jsxs(A,{direction:"vertical",size:"middle",children:[e.jsx(U,{level:3,children:"Get in touch"}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Whatsapp"}),e.jsx("a",{href:"https://wa.me/1556177338",target:"_blank",children:"+01556177338"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Real Live Support"}),e.jsx(h,{children:"Calista Antonio, Italy"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Monday - Friday"}),e.jsx(h,{children:"08:00 - 20:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Saturday"}),e.jsx(h,{children:"09:00 - 21:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Sunday"}),e.jsx(h,{children:"13:00 - 22:00"})]})]})},"2")}):e.jsxs(A,{direction:"vertical",size:"middle",children:[e.jsx(U,{level:3,children:"Get in touch"}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Whatsapp"}),e.jsx("a",{href:"https://wa.me/1556177338",target:"_blank",children:"+01556177338"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Real Live Support"}),e.jsx(h,{children:"Calista Antonio, Italy"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Monday - Friday"}),e.jsx(h,{children:"08:00 - 20:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Saturday"}),e.jsx(h,{children:"09:00 - 21:00"})]}),e.jsxs("div",{className:"getInTouch_box",children:[e.jsx(h,{children:"Sunday"}),e.jsx(h,{children:"13:00 - 22:00"})]})]})}),e.jsx(q,{xs:24,sm:12,md:8,lg:6,xl:6,children:e.jsxs(A,{direction:"vertical",size:"middle",children:[e.jsx(U,{level:3,children:"Newsletter signup"}),e.jsx(h,{children:"Subscribe to our newsletters now and stay up-to-date with new collections"}),e.jsxs(A.Compact,{style:{width:"100%"},children:[e.jsx(le,{placeholder:"Your email address"}),e.jsx(P,{type:"primary",children:"Subscribe"})]}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/visa/payment-icons_180x.png",alt:""})})]})})]})})})}function xs(){return e.jsx("div",{className:"App",children:e.jsxs(Be,{children:[e.jsx(Ue,{children:e.jsx(us,{})}),e.jsx(Ge,{children:e.jsx(Qe,{})}),e.jsx(Ve,{children:e.jsx(hs,{})})]})})}function gs(){return e.jsx("div",{children:"ErrorPage"})}const{Title:js}=y;function Ee(){const s={dots:!0,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:0,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0,arrows:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2,arrows:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,arrows:!0}}]};return e.jsxs("section",{id:"followus_instagram",children:[e.jsx(js,{children:"Follow us on Instagram"}),e.jsx("div",{className:"slider-container",children:e.jsxs(Se,{...s,children:[e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/1.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/2.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/3.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/4.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/5.jpg",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"/src/assets/instagram photos/6.jpg",alt:""})})]})})]})}const{Title:X}=y;function ps(){return e.jsx("div",{id:"freshOutfits",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"info",children:[e.jsx(X,{level:3,children:"The fresh"}),e.jsx(X,{level:3,children:"outfits summer"}),e.jsx(X,{level:4,children:"everything you love!"}),e.jsx("div",{className:"button",children:e.jsx(T,{to:"/Shop",children:e.jsx(P,{children:"Shop Now"})})})]})})})}const{Title:$}=y;function ms(){return e.jsx("section",{id:"hero",children:e.jsxs(Ze,{autoplay:!0,speed:1200,effect:"fade",children:[e.jsx("div",{className:"carousel carousel1",children:e.jsxs("div",{className:"info container",children:[e.jsx($,{level:4,children:"NEW FASHION"}),e.jsx($,{children:"Spring Summer"}),e.jsx($,{children:"Collection"}),e.jsx("div",{className:"button",children:e.jsx(T,{to:"/Shop",children:e.jsx(P,{children:"SHOP NOW"})})})]})}),e.jsx("div",{className:"carousel carousel2",children:e.jsxs("div",{className:"info container",children:[e.jsx($,{level:4,children:"ELESSI STORE"}),e.jsx($,{children:"Looking for"}),e.jsx($,{children:"the best price"}),e.jsx("div",{className:"button",children:e.jsx(T,{to:"/Shop",children:e.jsx(P,{children:"SHOP NOW"})})})]})}),e.jsx("div",{className:"carousel carousel3",children:e.jsxs("div",{className:"info container",children:[e.jsx($,{level:4,children:"ELESSI STORE"}),e.jsx($,{children:"Autumn"}),e.jsx($,{children:"& Winter 2024"}),e.jsx("div",{className:"button",children:e.jsx(T,{to:"/Shop",children:e.jsx(P,{children:"SHOP NOW"})})})]})})]})})}C`
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
`;C`
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
`;const Oe=C`
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
`,vs=C`
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
`,fs=C`
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
`,Ss=C`
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
`,Fe=C`
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
`,ys=C`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount( $category: String!) {
    _allTrendyProductsMeta(filter: { category: $category }) {
      count
    }
  }
`,Ns=C`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount ( $q: String) {
    _allTrendyProductsMeta(filter: { q: $q }){
      count
    }
  }
`;C`
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
`;const{Title:he}=y;function G({trendyProduct:s}){return e.jsx("div",{className:"product_card",children:e.jsx(T,{to:`/Shop/${s.id}`,children:e.jsxs(ze,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.productImage}),children:[e.jsx(he,{level:4,children:s.productTitle}),e.jsxs(he,{level:5,children:["$",s.productNewPrice,".00"]})]})})})}function M(){return e.jsx(N,{align:"center",justify:"center",id:"loadingSpin",children:e.jsx(We,{tip:"Loading",size:"large",children:e.jsx("p",{children:"This is some content that might take time to load."})})})}const{Title:Ts}=y;function Ps(){const[s,t]=r.useState(!0),{loading:l,error:o,data:n}=D(fs,{variables:{newArrivals:!0}});if(r.useEffect(()=>{let i;return l||(i=setTimeout(()=>{t(!1)},500)),()=>clearTimeout(i)},[l]),s)return e.jsx(M,{});if(o)return e.jsx("p",{children:"Error"});const c={speed:500,slidesToShow:4,slidesToScroll:4,initialSlide:0,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]};return e.jsx("section",{id:"new_arrivals",children:e.jsxs("div",{className:"container",children:[e.jsx(Ts,{children:"New Arrivals"}),e.jsx("div",{className:"new_arrivals_container",children:e.jsx(Se,{...c,children:n.allTrendyProducts.map(i=>e.jsx("div",{className:"product_card_slider_container",children:e.jsx(G,{trendyProduct:i},i.id)},i.id))})})]})})}const{Title:B}=y;function Cs(){return e.jsx("section",{id:"pakery",children:e.jsx("div",{className:"container",children:e.jsxs(N,{className:"pakery_container",align:"center",justify:"space-between",children:[e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:"/src/assets/pakery/banner1.jpg",alt:""})}),e.jsxs("div",{className:"info",children:[e.jsx(B,{"data-testid":"mini",level:3,children:"Mini backpack"}),e.jsx(B,{level:4,children:"Bags & Accessories"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:"/src/assets/pakery/banner2.jpg",alt:""})}),e.jsxs("div",{className:"info",children:[e.jsx(B,{level:3,children:"New handbag"}),e.jsx(B,{level:4,children:"Enjoy this fall trend"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:"/src/assets/pakery/banner3.jpg",alt:""})}),e.jsxs("div",{className:"info",children:[e.jsx(B,{level:3,children:"Big sale"}),e.jsx(B,{level:4,children:"Sale off 50%"})]})]})]})})})}function Re({product:s,currentCartInputValue:t}){const{cart:l,addItemToCart:o,updateCartItemQuantity:n}=H(),{setIsCartOpen:c}=Ie(),{setAnimation:i}=Ae(),a=u=>{const d=l.find(g=>g.id===u.id),x=l.findIndex(g=>g.id===u.id);if(d){const g=l[x].quantity+t;n(u.id,g),c(!0)}else o(u,t),c(!0);i(!0)};return e.jsx("div",{children:e.jsx(P,{onClick:()=>a(s),children:"ADD TO CART"})})}const{Title:Z}=y;function _s({productID:s}){const[t,l]=r.useState(1),{loading:o,error:n,data:c}=D(Oe,{variables:{id:s}}),i=a=>{l(Number(a))};return o?e.jsx("p",{children:"loading"}):n?e.jsx("p",{children:"Error"}):e.jsx("div",{className:"drawer",children:c.allTrendyProducts.map(a=>e.jsxs("div",{children:[e.jsx("div",{className:"image",children:e.jsx(T,{to:`/Shop/${a.id}`,children:e.jsx("img",{src:a.productImage,alt:""})})}),e.jsxs("div",{className:"info",children:[e.jsx(T,{to:`/Shop/${a.id}`,children:e.jsx(Z,{level:4,children:a.productTitle})}),e.jsxs(Z,{level:5,children:["$",a.productNewPrice,".00"]}),e.jsxs("div",{className:"rate",children:[e.jsx(ye,{allowHalf:!0,defaultValue:a.reviews,disabled:!0}),e.jsxs(Z,{level:5,children:["(",a.reviews,")"]})]}),e.jsx("div",{className:"describtion",children:e.jsx(Z,{level:5,children:"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"})}),e.jsxs("div",{className:"button",children:[e.jsxs("div",{className:"addToCart_btns",children:[e.jsx("div",{className:"cartNumber_input",children:e.jsx("div",{className:"input_number",children:e.jsx(te,{min:1,defaultValue:t,value:t,controls:!1,onChange:i,addonAfter:e.jsxs("div",{className:"inc_dec_btns",children:[e.jsx(ie,{onClick:()=>{l(t+1)}}),e.jsx(ne,{onClick:()=>{t>1&&l(t-1)}})]})})})}),e.jsx(Re,{product:a,currentCartInputValue:t})]}),e.jsx(P,{className:"buy_it_now",children:"BUY IT NOW"})]})]})]},a.id))})}const{Title:ee}=y;function se({title:s}){const[t,l]=r.useState(101),[o,n]=r.useState(!1),[c,i]=r.useState(!0),a=()=>{n(!o)},u=j=>{a(),l(j.id)},{loading:d,error:x,data:g}=D(Fe,{variables:{category:s,page:0,perPage:3}});return r.useEffect(()=>{let j;return i(!0),d||(j=setTimeout(()=>{i(!1)},500)),()=>clearTimeout(j)},[d]),x?e.jsx("p",{children:"Error"}):e.jsxs("div",{className:"product_list",children:[e.jsx("div",{className:"title",children:e.jsx(ee,{level:3,children:s})}),c?e.jsx(M,{}):e.jsx("div",{className:"list",children:g.allTrendyProducts.map(j=>e.jsxs("div",{className:"product_box",children:[e.jsx("div",{className:"image",onClick:()=>u(j),children:e.jsx("img",{src:j.productImage,alt:""})},j.id),e.jsxs("div",{className:"info",children:[e.jsx(ee,{level:4,children:j.productTitle}),e.jsxs(ee,{level:5,children:["$",j.productNewPrice,".00"]})]})]},j.id))}),e.jsx(b,{onClose:a,open:o,width:470,children:e.jsx(_s,{productID:t})})]})}function ws(){return e.jsx("section",{id:"products_categories",children:e.jsx("div",{className:"container",children:e.jsxs(N,{className:"categories",align:"center",justify:"center",wrap:"wrap",children:[e.jsx(se,{title:"Top Rated"}),e.jsx(se,{title:"Best Selling"}),e.jsx(se,{title:"On Sale"})]})})})}const{Title:xe,Text:bs}=y;function Is(){return e.jsx("section",{id:"saleBanner",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"info",children:[e.jsxs(xe,{level:3,children:["Sale ",e.jsx(bs,{type:"danger",children:"25%"})," off"]}),e.jsx(xe,{level:4,children:"Applyng for all product Accessories & Shoes"})]})})})}const{Title:w}=y;function $s(){return e.jsx("section",{id:"shipping",children:e.jsx("div",{className:"container",children:e.jsxs(N,{className:"shipping_container",align:"center",justify:"center",wrap:"wrap",gap:"middle",children:[e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"icon_image",children:e.jsx("img",{src:"/src/assets/shipping/plane-svgrepo-com.svg",alt:""})}),e.jsxs(N,{className:"info",align:"center",justify:"center",vertical:!0,children:[e.jsx(w,{level:3,children:"Free Shipping"}),e.jsx(w,{level:4,children:"Free Shipping for all US order"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"icon_image",children:e.jsx("img",{src:"/src/assets/shipping/headphones-svgrepo-com.svg",alt:""})}),e.jsxs(N,{className:"info",align:"center",justify:"center",vertical:!0,children:[e.jsx(w,{level:3,children:"Support 24/7"}),e.jsx(w,{level:4,children:"We support 24h a day"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"icon_image",children:e.jsx("img",{src:"/src/assets/shipping/refresh-2-svgrepo-com.svg",alt:""})}),e.jsxs(N,{className:"info",align:"center",justify:"center",vertical:!0,children:[e.jsx(w,{level:3,children:"100% Money Back"}),e.jsx(w,{level:4,children:"You have 30 days to Return"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"icon_image",children:e.jsx("img",{src:"/src/assets/shipping/door-lock-svgrepo-com.svg",alt:""})}),e.jsxs(N,{className:"info",align:"center",justify:"center",vertical:!0,children:[e.jsx(w,{level:3,children:"Payment Secure"}),e.jsx(w,{level:4,children:"We ensure secure payment"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"icon_image",children:e.jsx("img",{src:"/src/assets/shipping/piggy-svgrepo-com.svg",alt:""})}),e.jsxs(N,{className:"info",align:"center",justify:"center",vertical:!0,children:[e.jsx(w,{level:3,children:"Discount"}),e.jsx(w,{level:4,children:"Up to 40% for member"})]})]})]})})})}const De=new Ye({uri:"http://localhost:3000/graphql",cache:new He}),{Title:As}=y;function Es(){const[s,t]=r.useState("All"),[l,o]=r.useState("All"),[n,c]=r.useState(1),[i]=r.useState(8),[a,u]=r.useState(),[d,x]=r.useState(!0),g=f=>{o(f.key),t(f.key),c(1)};r.useEffect(()=>{let f=!0;async function k(){let I,E={};s==="All"?I=Ns:(I=ys,E={q:"",category:s});try{const O=await De.query({query:I,variables:E});f&&u(O.data._allTrendyProductsMeta.count)}catch(O){console.error("Failed to fetch data:",O)}}return k(),()=>{f=!1}},[s]);const j=s==="All"?Ss:Fe,{loading:_,error:S,data:p}=D(j,{variables:{category:l,page:n-1,perPage:i}});if(r.useEffect(()=>{let f;return x(!0),_||(f=setTimeout(()=>{x(!1)},500)),()=>clearTimeout(f)},[_]),S)return e.jsx("p",{children:"Error"});const L=f=>{c(f)};return e.jsx("section",{id:"trendyItems",children:e.jsxs("div",{className:"container",children:[e.jsx(As,{children:"Trendy item"}),e.jsx("div",{className:"tab_categories",children:e.jsx(fe,{mode:"horizontal",selectedKeys:[l],onClick:g,items:[{label:"ALL",key:"All"},{label:"FEATURED",key:"Featured"},{label:"BEST SELLING",key:"Best Selling"},{label:"TOP RATED",key:"Top Rated"},{label:"TRENDS",key:"Trends"}]})}),d?e.jsx(M,{}):e.jsx("div",{className:"trendy_container",children:p==null?void 0:p.allTrendyProducts.map(f=>e.jsx("div",{className:"productCard_container",children:e.jsx(G,{trendyProduct:f},f.id)},f.id))},n),e.jsx("div",{className:"pagination",children:e.jsx(ae,{hideOnSinglePage:!0,current:n,total:a,pageSize:i,onChange:L})})]})})}function Os(){return e.jsxs("div",{children:[e.jsx(ms,{}),e.jsx(Cs,{}),e.jsx($s,{}),e.jsx(Ps,{}),e.jsx(Is,{}),e.jsx(Es,{}),e.jsx(ps,{}),e.jsx(ws,{}),e.jsx(Ee,{})]})}const ge=C`
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
`,Fs=C`
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
`,Rs=C`
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
`;function Ds(){var V;const[s,t]=r.useState("All"),[l,o]=r.useState(""),[n,c]=r.useState("ASC"),[i,a]=r.useState(1),[u]=r.useState(12),[d,x]=r.useState(!0),[g,j]=r.useState("6"),_=W({query:"(min-width: 768px)"}),[S,p]=r.useState(""),[L,f]=r.useState(!1),[k,I]=r.useState(ge),E=m=>{m=="Name,A-Z"||m=="Name,Z-A"||m=="Price,low-high"||m=="Price,high-low"?(t("All"),m=="Name,Z-A"||m=="Price,high-low"?c("DES"):c("ASC"),m=="Name,Z-A"||m=="Name,A-Z"?o("productTitle"):o("productNewPrice")):(t(m),o(""),c("ASC")),a(1)};r.useEffect(()=>{S!==""?(I(Rs),f(!0)):s==="All"?(I(ge),f(!1)):(I(Fs),f(!1)),a(1)},[S,s]);const{loading:O,error:Q,data:F}=D(k,{variables:{q:S,category:s,page:i-1,perPage:u,sortField:l,sortOrder:n}});if(r.useEffect(()=>{let m;return x(!0),O||(m=setTimeout(()=>{x(!1)},500)),()=>clearTimeout(m)},[O]),Q)return e.jsx("p",{children:"Error"});const R=m=>{p(m)},K=m=>{j(m)},J=m=>{a(m)};return e.jsx("section",{id:"shop",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"shop_container",children:[e.jsxs("div",{className:"select_menu",children:[e.jsx("div",{className:"search_input",children:e.jsx(le,{addonBefore:e.jsx(Ne,{}),allowClear:!0,placeholder:"search",value:S,onChange:m=>R(m.target.value)})}),_&&e.jsx(Te,{options:[{label:e.jsx("div",{className:"cat_view"}),value:"12"},{label:e.jsx("div",{className:"cat_view"}),value:"8"},{label:e.jsx("div",{className:"cat_view"}),value:"6"},{label:e.jsx("div",{className:"cat_view"}),value:"4"}],value:g,onChange:K}),e.jsx(Pe,{defaultValue:"All",disabled:L,style:{width:160},onChange:E,options:[{value:"All",label:"ALL"},{value:"Featured",label:"FEATURED"},{value:"Best Selling",label:"BEST SELLING"},{value:"Top Rated",label:"TOP RATED"},{value:"Name,A-Z",label:"Alphabetically, A-Z"},{value:"Name,Z-A",label:"Alphabetically, Z-A"},{value:"Price,low-high",label:"Price, low to high"},{value:"Price,high-low",label:"Price, high to low"}]})]}),d?e.jsx(M,{}):e.jsx(Y,{gutter:16,className:"products_container",children:F==null?void 0:F.allTrendyProducts.map(m=>e.jsx(q,{xs:Number(g),sm:Number(g),md:Number(g),lg:Number(g),xl:Number(g),className:"productCard_container",children:e.jsx(G,{trendyProduct:m},m.id)},m.id))},i),e.jsx("div",{className:"pagination",children:e.jsx(ae,{hideOnSinglePage:!0,current:i,total:(V=F==null?void 0:F._allTrendyProductsMeta)==null?void 0:V.count,pageSize:u,onChange:J})})]})})})}function Ls(){return e.jsxs("div",{children:[e.jsx(Ee,{}),e.jsx(Ds,{})]})}const je=C`
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
`,ks=C`
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
`,qs=C`
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
`;function Le({Gender:s}){var m;const[t,l]=r.useState("All"),[o,n]=r.useState(""),[c,i]=r.useState("ASC"),[a,u]=r.useState(1),[d]=r.useState(12),[x,g]=r.useState(!0),[j,_]=r.useState("6"),S=W({query:"(min-width: 768px)"}),[p,L]=r.useState(""),[f,k]=r.useState(!1),[I,E]=r.useState(je),O=v=>{v=="Name,A-Z"||v=="Name,Z-A"||v=="Price,low-high"||v=="Price,high-low"?(l("All"),v=="Name,Z-A"||v=="Price,high-low"?i("DES"):i("ASC"),v=="Name,Z-A"||v=="Name,A-Z"?n("productTitle"):n("productNewPrice")):(l(v),n(""),i("ASC")),u(1)};r.useEffect(()=>{p!==""?(E(ks),k(!0)):t==="All"?(E(je),k(!1)):(E(qs),k(!1)),u(1)},[p,t]);const{loading:Q,error:F,data:R}=D(I,{variables:{gender:s,q:p,category:t,page:a-1,perPage:d,sortField:o,sortOrder:c}});if(r.useEffect(()=>{let v;return g(!0),Q||(v=setTimeout(()=>{g(!1)},500)),()=>clearTimeout(v)},[Q]),F)return e.jsx("p",{children:"Error"});const K=v=>{L(v)},J=v=>{_(v)},V=v=>{u(v)};return e.jsx("section",{id:"shop",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"shop_container",children:[e.jsxs("div",{className:"select_menu",children:[e.jsx("div",{className:"search_input",children:e.jsx(le,{addonBefore:e.jsx(Ne,{}),allowClear:!0,placeholder:"search",value:p,onChange:v=>K(v.target.value)})}),S&&e.jsx(Te,{options:[{label:e.jsx("div",{className:"cat_view"}),value:"12"},{label:e.jsx("div",{className:"cat_view"}),value:"8"},{label:e.jsx("div",{className:"cat_view"}),value:"6"},{label:e.jsx("div",{className:"cat_view"}),value:"4"}],value:j,onChange:J}),e.jsx(Pe,{defaultValue:"All",disabled:f,style:{width:160},onChange:O,options:[{value:"All",label:"ALL"},{value:"Featured",label:"FEATURED"},{value:"Best Selling",label:"BEST SELLING"},{value:"Top Rated",label:"TOP RATED"},{value:"Name,A-Z",label:"Alphabetically, A-Z"},{value:"Name,Z-A",label:"Alphabetically, Z-A"},{value:"Price,low-high",label:"Price, low to high"},{value:"Price,high-low",label:"Price, high to low"}]})]}),x?e.jsx(M,{}):e.jsx(Y,{gutter:16,className:"products_container",children:R==null?void 0:R.allTrendyProducts.map(v=>e.jsx(q,{xs:Number(j),sm:Number(j),md:Number(j),lg:Number(j),xl:Number(j),className:"productCard_container",children:e.jsx(G,{trendyProduct:v},v.id)},v.id))},a),e.jsx("div",{className:"pagination",children:e.jsx(ae,{hideOnSinglePage:!0,current:a,total:(m=R==null?void 0:R._allTrendyProductsMeta)==null?void 0:m.count,pageSize:d,onChange:V})})]})})})}function Ms(){return e.jsx("div",{children:e.jsx(Le,{Gender:"Male"})})}function Bs(){return e.jsx("div",{children:"Kids"})}function Us(){return e.jsx("div",{children:e.jsx(Le,{Gender:"Female"})})}const{Title:z}=y,{Group:Gs}=Je;function Qs(){var j,_,S;const{productId:s}=Ce(),[t,l]=r.useState(""),[o,n]=r.useState(1),[c,i]=r.useState(!0),{loading:a,error:u,data:d}=D(Oe,{variables:{id:s}});r.useEffect(()=>{d&&d.allTrendyProducts.length>0&&(l(d.allTrendyProducts[0].productImage),n(1))},[d]),r.useEffect(()=>{let p;return i(!0),a||(p=setTimeout(()=>{i(!1)},500)),()=>clearTimeout(p)},[a]);const x=p=>{typeof p.target.value=="string"&&l(p.target.value)},g=p=>{n(Number(p))};return u?e.jsx("p",{children:"Error"}):e.jsx("div",{id:"productPreview",children:e.jsx("div",{className:"container",children:c?e.jsx(M,{}):e.jsxs(N,{className:"singleProduct_container",gap:"large",children:[e.jsxs("div",{className:"product_images",children:[e.jsx("div",{className:"images_category",children:e.jsx(Gs,{value:t,onChange:x,options:(_=(j=d==null?void 0:d.allTrendyProducts[0])==null?void 0:j.thumbinals)==null?void 0:_.map(p=>({label:e.jsxs("div",{className:"image_box",children:[e.jsx("img",{src:p})," "]}),value:p}))})}),e.jsx("div",{className:"main_image",children:e.jsx(Ke,{className:"main_singleProduct_img",src:t})})]}),e.jsx("div",{className:"product_info",children:e.jsx(A,{direction:"vertical",size:"middle",children:(S=d==null?void 0:d.allTrendyProducts)==null?void 0:S.map(p=>e.jsxs("div",{className:"info",children:[e.jsx(z,{level:4,children:p.productTitle}),e.jsxs(z,{level:5,children:["$",p.productNewPrice,".00"]}),e.jsxs("div",{className:"rate",children:[e.jsx(ye,{allowHalf:!0,defaultValue:p.reviews,disabled:!0}),e.jsxs(z,{level:5,children:["(",p.reviews,")"]})]}),e.jsx("div",{className:"describtion",children:e.jsx(z,{level:5,children:"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"})}),e.jsxs("div",{className:"buttons",children:[e.jsxs("div",{className:"addToCart_btns",children:[e.jsx("div",{className:"cartNumber_input",children:e.jsx("div",{className:"input_number",children:e.jsx(te,{min:1,defaultValue:o,value:o,controls:!1,onChange:g,addonAfter:e.jsxs("div",{className:"inc_dec_btns",children:[e.jsx(ie,{onClick:()=>{n(o+1)}}),e.jsx(ne,{onClick:()=>{o>1&&n(o-1)}})]})})})}),e.jsx(Re,{product:p,currentCartInputValue:o})]}),e.jsx(P,{className:"buy_it_now",children:"BUY IT NOW"})]})]},p.id))})})]},d==null?void 0:d.allTrendyProducts[0].id)})})}const{Title:Vs}=y;function pe({id_neq:s,page:t,perPage:l,title:o}){var d;const[n,c]=r.useState(!0),{loading:i,error:a,data:u}=D(vs,{variables:{id_neq:s,page:t,perPage:l}});return r.useEffect(()=>{let x;return c(!0),i||(x=setTimeout(()=>{c(!1)},500)),()=>clearTimeout(x)},[i]),a?e.jsx("p",{children:"Error"}):e.jsx("section",{id:"recommended",children:e.jsx("div",{className:"container",children:n?e.jsx(M,{}):e.jsxs("div",{className:"recommended_container",children:[e.jsx("div",{className:"title",children:e.jsx(Vs,{level:2,children:o})}),e.jsx(Y,{gutter:16,className:"products_container",children:(d=u==null?void 0:u.allTrendyProducts)==null?void 0:d.map(x=>e.jsx(q,{xs:24,sm:8,md:6,lg:6,xl:6,className:"productCard_container",children:e.jsx(G,{trendyProduct:x},x.id)},x.id))})]})})})}function Zs(){const{productId:s}=Ce(),[t,l]=r.useState(""),[o,n]=r.useState(0),c=Math.floor(Math.random()*5)+1;return r.useEffect(()=>{s&&(l(s),n(c))},[c,s]),e.jsxs("div",{children:[e.jsx(Qs,{}),e.jsx(pe,{id_neq:t,page:o,perPage:4,title:"You may also like"}),e.jsx(pe,{id_neq:t,page:o+1,perPage:4,title:"Recommended products"})]})}const zs=({children:s})=>{const{pathname:t}=ve();return r.useEffect(()=>{window.scrollTo(0,0)},[t]),s||null},Ws=({children:s})=>{const[t,l]=r.useState([]);r.useEffect(()=>{const u=localStorage.getItem("cart");u&&l(JSON.parse(u))},[]);const o=u=>{l(u),localStorage.setItem("cart",JSON.stringify(u))},a={cart:t,addItemToCart:(u,d)=>{const x=[...t,{...u,quantity:d}];o(x)},removeItemFromCart:u=>{const d=t.filter(x=>x.id!==u);o(d)},updateCartItemQuantity:(u,d)=>{const x=t.map(g=>g.id===u?{...g,quantity:d}:g);o(x)}};return e.jsx(_e.Provider,{value:a,children:s})};function Ys(){const s=Xe([{path:"/",element:e.jsx(xs,{}),errorElement:e.jsx(gs,{}),children:[{path:"/",element:e.jsx(Os,{})},{path:"/Shop",element:e.jsx(Ls,{})},{path:"/Men",element:e.jsx(Ms,{})},{path:"/Women",element:e.jsx(Us,{})},{path:"/Kids",element:e.jsx(Bs,{})},{path:"/Shop/:productId",element:e.jsxs(zs,{children:[" ",e.jsx(Zs,{})," "]})}]}]);return e.jsx(e.Fragment,{children:e.jsx(es,{client:De,children:e.jsx(ls,{children:e.jsx(Ws,{children:e.jsx(ns,{children:e.jsx(ss,{router:s})})})})})})}rs.createRoot(document.getElementById("root")).render(e.jsx(ts.StrictMode,{children:e.jsx(Ys,{})}));
