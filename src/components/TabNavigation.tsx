import * as React from "react";
import { TabView, TabViewItem } from "@nativescript/core";
import { CustomersScreen } from "./screens/CustomersScreen";
import { TransactionsScreen } from "./screens/TransactionsScreen";
import { AllTransactionsScreen } from "./screens/AllTransactionsScreen";
import { AboutScreen } from "./screens/AboutScreen";

export function TabNavigation() {
    return (
        <tabView selectedTabTextColor="#65adf1">
            <tabViewItem title="Customers">
                <CustomersScreen />
            </tabViewItem>
            <tabViewItem title="Transactions">
                <TransactionsScreen />
            </tabViewItem>
            <tabViewItem title="All Transactions">
                <AllTransactionsScreen />
            </tabViewItem>
            <tabViewItem title="About">
                <AboutScreen />
            </tabViewItem>
        </tabView>
    );
}