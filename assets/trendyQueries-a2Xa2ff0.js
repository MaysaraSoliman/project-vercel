import{E as e}from"./vendor-CjS1k59k.js";e`
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
`;e`
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
`;const t=e`
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
`,a=e`
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
`,d=e`
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
`,c=e`
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
`,o=e`
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
`,i=e`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount( $category: String!) {
    _allTrendyProductsMeta(filter: { category: $category }) {
      count
    }
  }
`,u=e`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount ( $q: String) {
    _allTrendyProductsMeta(filter: { q: $q }){
      count
    }
  }
`;e`
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
`;export{d as G,u as a,i as b,c,o as d,t as e,a as f};
