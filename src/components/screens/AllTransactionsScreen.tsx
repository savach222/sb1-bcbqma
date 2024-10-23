import * as React from "react";

export function AllTransactionsScreen() {
    return (
        <flexboxLayout flexDirection="column" class="p-4">
            <searchBar hint="Search" class="mb-4" />
            <gridLayout rows="auto" columns="*, *, *, *, *, *" class="font-bold mb-2">
                <label col="0" text="Name" />
                <label col="1" text="t ID" />
                <label col="2" text="Amount" />
                <label col="3" text="Type" />
                <label col="4" text="Date" />
                <label col="5" text="Note" />
            </gridLayout>
            <scrollView>
                <stackLayout>
                    <gridLayout rows="auto" columns="*, *, *, *, *, *" class="mb-1">
                        <label col="0" text="Amin Fadil" class="text-green-600" />
                        <label col="1" text="t_527720" />
                        <label col="2" text="8,500 DZD" class="text-green-600" />
                        <label col="3" text="Payment" class="text-green-600" />
                        <label col="4" text="2024/10/19 22:19" />
                        <label col="5" text="de" />
                    </gridLayout>
                </stackLayout>
            </scrollView>
            <gridLayout rows="auto" columns="*" class="mt-4 p-4 border-width-1">
                <stackLayout>
                    <label text="Total Outstanding: 14,000 DZD" class="font-bold" />
                    <label text="Total Loans: 74,000 DZD" />
                    <label text="Total Payments: 60,000 DZD" />
                </stackLayout>
            </gridLayout>
        </flexboxLayout>
    );
}