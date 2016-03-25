export declare class X2JS {
    constructor(options?: X2JSOptions);
    parseXmlString(xmlDocStr: string): XMLDocument;
    asArray(prop: any): any[];
    toXmlDateTime(datetime: Date | number): string;
    asDateTime(prop: string): Date;
    xml2json(xmlDoc: XMLDocument): any;
    xml_str2json(xmlDocStr: string): any;
    json2xml_str(jsonObj: any): string;
    json2xml(jsonObj: any): XMLDocument;
    getVersion(): string;
}

export declare interface X2JSOptions {
    escapeMode?: boolean;
    attributePrefix?: string;
    arrayAccessForm?: string;
    emptyNodeForm?: string;
    enableToStringFunc?: boolean;
    arrayAccessFormPaths?: any[];
    skipEmptyTextNodesForObj?: boolean;
    stripWhitespaces?: boolean;
    datetimeAccessFormPaths?: any[];
    useDoubleQuotes?: boolean;
    xmlElementsFilter?: any[];
    jsonPropertiesFilter?: any[];
    keepCData?: boolean;
} 