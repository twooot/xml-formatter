type FormatOptions = {
    indentation?: string;
    filter?: (node: any) => boolean;
    stripComments?: boolean;
    collapseContent?: (node: any) => boolean;
    lineSeparator?: string;
    whiteSpaceAtEndOfSelfclosingTag?: boolean;
}

declare function format(xml: string, options?: FormatOptions): string;

export = format;
