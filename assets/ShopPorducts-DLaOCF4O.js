import{E as p,r,g as O,x as I,j as t,I as q,G as L,J as R,K as Z,h as M,C as D,P as U}from"./vendor-CjS1k59k.js";import{L as Q}from"./Loading-BbUvL5k8.js";import{P as B}from"./ProductCard-DRqRh2AD.js";const A=p`
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
`,G=p`
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
`,V=p`
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
`;function J(){var y;const[o,S]=r.useState("All"),[N,i]=r.useState(""),[$,c]=r.useState("ASC"),[n,d]=r.useState(1),[h]=r.useState(12),[x,m]=r.useState(!0),[a,f]=r.useState("6"),v=O({query:"(min-width: 768px)"}),[l,_]=r.useState(""),[b,u]=r.useState(!1),[w,g]=r.useState(A),T=e=>{e=="Name,A-Z"||e=="Name,Z-A"||e=="Price,low-high"||e=="Price,high-low"?(S("All"),e=="Name,Z-A"||e=="Price,high-low"?c("DES"):c("ASC"),e=="Name,Z-A"||e=="Name,A-Z"?i("productTitle"):i("productNewPrice")):(S(e),i(""),c("ASC")),d(1)};r.useEffect(()=>{l!==""?(g(V),u(!0)):o==="All"?(g(A),u(!1)):(g(G),u(!1)),d(1)},[l,o]);const{loading:P,error:C,data:s}=I(w,{variables:{q:l,category:o,page:n-1,perPage:h,sortField:N,sortOrder:$}});if(r.useEffect(()=>{let e;return m(!0),P||(e=setTimeout(()=>{m(!1)},500)),()=>clearTimeout(e)},[P]),C)return t.jsx("p",{children:"Error"});const j=e=>{_(e)},F=e=>{f(e)},E=e=>{d(e)};return t.jsx("section",{id:"shop",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"shop_container",children:[t.jsxs("div",{className:"select_menu",children:[t.jsx("div",{className:"search_input",children:t.jsx(q,{addonBefore:t.jsx(L,{}),allowClear:!0,placeholder:"search",value:l,onChange:e=>j(e.target.value)})}),v&&t.jsx(R,{options:[{label:t.jsx("div",{className:"cat_view"}),value:"12"},{label:t.jsx("div",{className:"cat_view"}),value:"8"},{label:t.jsx("div",{className:"cat_view"}),value:"6"},{label:t.jsx("div",{className:"cat_view"}),value:"4"}],value:a,onChange:F}),t.jsx(Z,{defaultValue:"All",disabled:b,style:{width:160},onChange:T,options:[{value:"All",label:"ALL"},{value:"Featured",label:"FEATURED"},{value:"Best Selling",label:"BEST SELLING"},{value:"Top Rated",label:"TOP RATED"},{value:"Name,A-Z",label:"Alphabetically, A-Z"},{value:"Name,Z-A",label:"Alphabetically, Z-A"},{value:"Price,low-high",label:"Price, low to high"},{value:"Price,high-low",label:"Price, high to low"}]})]}),x?t.jsx(Q,{}):t.jsx(M,{gutter:16,className:"products_container",children:s==null?void 0:s.allTrendyProducts.map(e=>t.jsx(D,{xs:Number(a),sm:Number(a),md:Number(a),lg:Number(a),xl:Number(a),className:"productCard_container",children:t.jsx(B,{trendyProduct:e},e.id)},e.id))},n),t.jsx("div",{className:"pagination",children:t.jsx(U,{hideOnSinglePage:!0,current:n,total:(y=s==null?void 0:s._allTrendyProductsMeta)==null?void 0:y.count,pageSize:h,onChange:E})})]})})})}export{J as default};
