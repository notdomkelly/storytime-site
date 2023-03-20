/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LinkedVideos } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LinkedVideosUpdateFormInputValues = {
    video_code?: string;
    title?: string;
};
export declare type LinkedVideosUpdateFormValidationValues = {
    video_code?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinkedVideosUpdateFormOverridesProps = {
    LinkedVideosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    video_code?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinkedVideosUpdateFormProps = React.PropsWithChildren<{
    overrides?: LinkedVideosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    linkedVideos?: LinkedVideos;
    onSubmit?: (fields: LinkedVideosUpdateFormInputValues) => LinkedVideosUpdateFormInputValues;
    onSuccess?: (fields: LinkedVideosUpdateFormInputValues) => void;
    onError?: (fields: LinkedVideosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LinkedVideosUpdateFormInputValues) => LinkedVideosUpdateFormInputValues;
    onValidate?: LinkedVideosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LinkedVideosUpdateForm(props: LinkedVideosUpdateFormProps): React.ReactElement;
