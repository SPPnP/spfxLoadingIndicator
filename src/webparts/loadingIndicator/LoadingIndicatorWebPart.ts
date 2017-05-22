import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './LoadingIndicator.module.scss';
import * as strings from 'loadingIndicatorStrings';
import { ILoadingIndicatorWebPartProps } from './ILoadingIndicatorWebPartProps';

export default class LoadingIndicatorWebPart extends BaseClientSideWebPart<ILoadingIndicatorWebPartProps> {

  public render(): void {
    this.context.statusRenderer.clearLoadingIndicator(this.domElement);

    if(this.properties.ShowLoading){
      //Show the loading indicator for the entire webpart
      this.context.statusRenderer.displayLoadingIndicator(this.domElement,this.properties.LoadingText);

      //This is just a sample, so we're just using properties,
      // but normally you would kick off an operation here (like loading list items)
      // Then you would put the clearLoadingIndicator call in the then function for the promise
    } else {
      //this.context.statusRenderer.clearLoadingIndicator(this.domElement);
      this.domElement.innerHTML = `
      <div class="${styles.loadingIndicator}">
        <div class="${styles.row}">
          <div class="${styles.container}">
            <span class="ms-font-xl">Critical Information:</span>
            <div class="${styles.specialbox}" id="myspecialbox">
              Just a block of content, wow!
            </div>
            <span class="ms-font-xl">Static text, wowee!</span>
          </div>
        </div>
      </div>`;

      //Show the loading indicator inside an element
      this.context.statusRenderer.displayLoadingIndicator(document.getElementById("myspecialbox"),this.properties.LoadingText);
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneToggle('ShowLoading', {
                  label: strings.ShowLoadingFieldLabel
                }),
                PropertyPaneTextField('LoadingText', {
                  label: strings.LoadingTextFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
