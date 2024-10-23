import * as React from "react";

export function AboutScreen() {
    return (
        <scrollView>
            <flexboxLayout flexDirection="column" class="p-4 items-center">
                <image src="~/assets/logo.png" class="w-32 h-32 mb-4" />
                <label text="Creidy Net" class="text-2xl font-bold mb-4" />
                
                <label text="About:" class="text-xl font-bold mb-2" />
                <label textWrap="true" class="mb-4">
                    Creidy Net is a tool that helps shop owners easily manage their loans and lending money. It simplifies the process of tracking customers, loans, and payments, allowing you to see how your shop is performing financially at a glance.
                </label>
                <label textWrap="true" class="mb-4">
                    Creidy Net provides a straightforward and powerful way to keep your shop's finances in check, helping you to make smart decisions that will improve your bottom line.
                </label>
                
                <label text="Creator:" class="text-xl font-bold mb-2" />
                <label text="@salahkichene" class="mb-4" />
                
                <label text="Special Thanks:" class="text-xl font-bold mb-2" />
                <label text="Sakhri Amar & CasaV" class="mb-4" />
            </flexboxLayout>
        </scrollView>
    );
}