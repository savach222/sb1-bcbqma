import * as React from "react";

export function TransactionsScreen() {
    return (
        <flexboxLayout flexDirection="column" class="p-4">
            <dropDown items={["C_6788 - salah kichene"]} class="mb-4" hint="Select Customer" />
            <searchBar hint="Search" class="mb-4" />
            <gridLayout rows="auto" columns="*, *, *, *" class="font-bold mb-2">
                <label col="0" text="Amount" />
                <label col="1" text="Type" />
                <label col="2" text="Date" />
                <label col="3" text="Note" />
            </gridLayout>
            <scrollView>
                <stackLayout>
                    <gridLayout rows="auto" columns="*, *, *, *" class="mb-1">
                        <label col="0" text="500 DZD" class="text-green-600" />
                        <label col="1" text="Payment" class="text-green-600" />
                        <label col="2" text="2024/10/19 22:14" />
                        <label col="3" text="ui" />
                    </gridLayout>
                </stackLayout>
            </scrollView>
            <gridLayout rows="auto" columns="*, *" class="mt-4 p-4 border-width-1">
                <stackLayout col="0">
                    <label text="Total Outstanding: 500 DZD" class="font-bold" />
                    <label text="Total Loans: 1,000 DZD" />
                    <label text="Total Payments: 500 DZD" />
                </stackLayout>
                <flexboxLayout col="1" justifyContent="flex-end">
                    <button text="Add Payment" class="mr-2" />
                    <button text="Add Loan" />
                </flexboxLayout>
            </gridLayout>
        </flexboxLayout>
    );
}