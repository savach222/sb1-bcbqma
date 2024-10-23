import * as React from "react";
import { SearchBar } from "@nativescript/core";

export function CustomersScreen() {
    return (
        <flexboxLayout flexDirection="column" class="p-4">
            <searchBar hint="Search" class="mb-4" />
            <gridLayout rows="auto" columns="*, *, *, *, *" class="font-bold mb-2">
                <label col="0" text="ID" />
                <label col="1" text="Name" />
                <label col="2" text="Address" />
                <label col="3" text="Telephone" />
                <label col="4" text="Occupation" />
            </gridLayout>
            <scrollView>
                <stackLayout>
                    {/* Sample customer data */}
                    <gridLayout rows="auto" columns="*, *, *, *, *" class="mb-1">
                        <label col="0" text="C_6788" />
                        <label col="1" text="salah kichene" />
                        <label col="2" text="ghardaia" />
                        <label col="3" text="0776179660" />
                        <label col="4" text="teacher" />
                    </gridLayout>
                    {/* Add more customer rows here */}
                </stackLayout>
            </scrollView>
            <flexboxLayout justifyContent="flex-end" class="mt-4">
                <button text="Edit Customer" class="mr-2" />
                <button text="Add Customer" />
            </flexboxLayout>
        </flexboxLayout>
    );
}