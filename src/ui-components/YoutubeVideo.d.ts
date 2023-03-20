/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Video } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YoutubeVideoOverridesProps = {
    YoutubeVideo?: PrimitiveOverrideProps<FlexProps>;
    "Video Area"?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type YoutubeVideoProps = React.PropsWithChildren<Partial<FlexProps> & {
    videoArea?: React.ReactNode;
    video?: Video;
} & {
    overrides?: YoutubeVideoOverridesProps | undefined | null;
}>;
export default function YoutubeVideo(props: YoutubeVideoProps): React.ReactElement;
