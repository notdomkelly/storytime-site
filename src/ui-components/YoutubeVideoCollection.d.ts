/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { YoutubeVideoProps } from "./YoutubeVideo";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YoutubeVideoCollectionOverridesProps = {
    YoutubeVideoCollection?: PrimitiveOverrideProps<CollectionProps>;
    YoutubeVideo?: YoutubeVideoProps;
} & EscapeHatchProps;
export declare type YoutubeVideoCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => YoutubeVideoProps;
} & {
    overrides?: YoutubeVideoCollectionOverridesProps | undefined | null;
}>;
export default function YoutubeVideoCollection(props: YoutubeVideoCollectionProps): React.ReactElement;
