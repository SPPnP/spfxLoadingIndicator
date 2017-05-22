declare interface ILoadingIndicatorStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  ShowLoadingFieldLabel: string;
  LoadingTextFieldLabel: string;
}

declare module 'loadingIndicatorStrings' {
  const strings: ILoadingIndicatorStrings;
  export = strings;
}
