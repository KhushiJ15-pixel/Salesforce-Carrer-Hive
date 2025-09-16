public with sharing class ApplicationDataController {
    @AuraEnabled(cacheable=true)
    public static Application__c getApplicationDetails(Id appId) {
        return [
            SELECT Id, Match_Score__c,
                   Job__r.Required_Skills__c,
                   Student__r.Skills__c
            FROM Application__c
            WHERE Id = :appId
            LIMIT 1
        ];
    }
}
