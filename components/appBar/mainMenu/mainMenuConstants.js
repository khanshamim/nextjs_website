
export const ROUTE_CONSTANTS = {
    ANY: "*",
    ROOT: "/",
    ABOUT:"about",
    CONTACT:"contact",
    PRODUCT_CENTER: "product-center",
    PRODUCT_LIST: "product-list",
    MUTUAL_FUND_COMPARISON: "mutual-fund-comparison",
    OFSHORE_FUND_COMPARISON: "ofshore-fund-comparison",
    INSTITUTIONAL_COMPARISON: "institutional-comparison",
    COMPOSITE_COMPARISON: "composite-comparison",
    PERFORMANCE_DAILY_REPORT: "performance-daily-report",
    PRODUCT_NEWS: "product-news",
    DAILY_MUTUAL_FUND_FLOW: "daily-mutual-fund-flow",
    ASSETS_UNDER_MANAGEMENT: "assets-under-management",
    OVERVIEW: "overview",
    REPORT_BUILDER: "report-builder",
    DEFINATIONS: "definations",
    MANAGED_ACCOUNTS: "managed-accounts",
};

export const MAIN_MENUS = [
  {
    key: "home",
    label: "Home",
    path: ROUTE_CONSTANTS.ROOT,
  },
  {
    key: "about",
    label: "About",
    path: ROUTE_CONSTANTS.ABOUT,
  },
  {
    key: "contact",
    label: "Contact",
    path: ROUTE_CONSTANTS.CONTACT,
  },
  {
    key: "productCenter",
    label: "Product Center",
    subMenus: [
      {
        key: "productList",
        label: "Product List",
        path: ROUTE_CONSTANTS.PRODUCT_LIST,
      },
      {
        key: "mutualFundComparison",
        label: "Mutual Fund Comparison",
        path: ROUTE_CONSTANTS.MUTUAL_FUND_COMPARISON,
      },
      {
        key: "ofshoreFundComparison",
        label: "Ofshore Fund Comparison",
        path: ROUTE_CONSTANTS.OFSHORE_FUND_COMPARISON,
      },
      {
        key: "institutionalComparison",
        label: "Institutional Comparison",
        path: ROUTE_CONSTANTS.INSTITUTIONAL_COMPARISON,
      },
      {
        key: "compositeComparison",
        label: "Composite Comparison",
        path: ROUTE_CONSTANTS.COMPOSITE_COMPARISON,
      },
      {
        key: "performanceDailyReport",
        label: "Performance Daily Report",
        path: ROUTE_CONSTANTS.PERFORMANCE_DAILY_REPORT,
      },
      {
        key: "productNews",
        label: "Product News",
        path: ROUTE_CONSTANTS.PRODUCT_NEWS,
      },
    ],
  },
];
