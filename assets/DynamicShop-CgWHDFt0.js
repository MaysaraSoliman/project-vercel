import{E as p,r as t,g as I,x as R,j as r,I as q,G as D,J as L,K as Z,h as G,C as M,P as U}from"./vendor-CjS1k59k.js";import{L as B}from"./Loading-BbUvL5k8.js";import{P as Q}from"./ProductCard-DRqRh2AD.js";const y=p`
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
`,V=p`
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
`,k=p`
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
`;function Y({Gender:N}){var $;const[o,S]=t.useState("All"),[A,i]=t.useState(""),[f,n]=t.useState("ASC"),[d,c]=t.useState(1),[h]=t.useState(12),[x,m]=t.useState(!0),[a,_]=t.useState("6"),v=I({query:"(min-width: 768px)"}),[s,b]=t.useState(""),[w,g]=t.useState(!1),[T,u]=t.useState(y),C=e=>{e=="Name,A-Z"||e=="Name,Z-A"||e=="Price,low-high"||e=="Price,high-low"?(S("All"),e=="Name,Z-A"||e=="Price,high-low"?n("DES"):n("ASC"),e=="Name,Z-A"||e=="Name,A-Z"?i("productTitle"):i("productNewPrice")):(S(e),i(""),n("ASC")),c(1)};t.useEffect(()=>{s!==""?(u(V),g(!0)):o==="All"?(u(y),g(!1)):(u(k),g(!1)),c(1)},[s,o]);const{loading:P,error:j,data:l}=R(T,{variables:{gender:N,q:s,category:o,page:d-1,perPage:h,sortField:A,sortOrder:f}});if(t.useEffect(()=>{let e;return m(!0),P||(e=setTimeout(()=>{m(!1)},500)),()=>clearTimeout(e)},[P]),j)return r.jsx("p",{children:"Error"});const E=e=>{b(e)},F=e=>{_(e)},O=e=>{c(e)};return r.jsx("section",{id:"shop",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"shop_container",children:[r.jsxs("div",{className:"select_menu",children:[r.jsx("div",{className:"search_input",children:r.jsx(q,{addonBefore:r.jsx(D,{}),allowClear:!0,placeholder:"search",value:s,onChange:e=>E(e.target.value)})}),v&&r.jsx(L,{options:[{label:r.jsx("div",{className:"cat_view"}),value:"12"},{label:r.jsx("div",{className:"cat_view"}),value:"8"},{label:r.jsx("div",{className:"cat_view"}),value:"6"},{label:r.jsx("div",{className:"cat_view"}),value:"4"}],value:a,onChange:F}),r.jsx(Z,{defaultValue:"All",disabled:w,style:{width:160},onChange:C,options:[{value:"All",label:"ALL"},{value:"Featured",label:"FEATURED"},{value:"Best Selling",label:"BEST SELLING"},{value:"Top Rated",label:"TOP RATED"},{value:"Name,A-Z",label:"Alphabetically, A-Z"},{value:"Name,Z-A",label:"Alphabetically, Z-A"},{value:"Price,low-high",label:"Price, low to high"},{value:"Price,high-low",label:"Price, high to low"}]})]}),x?r.jsx(B,{}):r.jsx(G,{gutter:16,className:"products_container",children:l==null?void 0:l.allTrendyProducts.map(e=>r.jsx(M,{xs:Number(a),sm:Number(a),md:Number(a),lg:Number(a),xl:Number(a),className:"productCard_container",children:r.jsx(Q,{trendyProduct:e},e.id)},e.id))},d),r.jsx("div",{className:"pagination",children:r.jsx(U,{hideOnSinglePage:!0,current:d,total:($=l==null?void 0:l._allTrendyProductsMeta)==null?void 0:$.count,pageSize:h,onChange:O})})]})})})}export{Y as default};
