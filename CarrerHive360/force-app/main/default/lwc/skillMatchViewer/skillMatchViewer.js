import { LightningElement, api, wire } from 'lwc';
import getApplicationDetails from '@salesforce/apex/ApplicationDataController.getApplicationDetails';

export default class SkillMatchViewer extends LightningElement {
    @api recordId; // Lightning auto-passes the record page ID
    application;
    error;

    @wire(getApplicationDetails, { appId: '$recordId' })
    wiredApp({ error, data }) {
        if (data) {
            this.application = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.application = undefined;
        }
    }

    get hasData() {
        return this.application !== undefined;
    }
}
