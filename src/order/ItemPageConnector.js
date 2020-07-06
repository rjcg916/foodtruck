import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => ({
    ...dataStore, ...router, ...actionCreators,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil((dataStore.items_total 
        | dataStore.pageSize || 5)/(dataStore.pageSize || 5)),
    navigateToPage: (page) => router.history
        .push(`/order/items/${router.match.params.category}/${page}`),    
})

export const ItemPageConnector = (PageComponent) => 
    withRouter(connect(mapStateToProps, mapDispatchToProps, 
        mergeProps)(PageComponent))
