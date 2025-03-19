import { ChangeEvent } from "react";

export type SearchProps = {
    placeholder?: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any
}