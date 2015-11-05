﻿/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../models/eventStreamModel.ts" />

"use strict";

module app.angular.Factories {
    import EventStreamResponseModel = angular.Models.EventStreamResponseModel;

    export class EventStreamFactory {
        private _baseUrl: string = "/api/events/stream";

        constructor(private $http: ng.IHttpService) {
        }

        getResponse(): ng.IHttpPromise<EventStreamResponseModel> {
            return this.$http.get<EventStreamResponseModel>(this._baseUrl);
        }
}
}

angular.module("app")
    .factory("eventStreamFactory", [
        "$http",
        ($http) => new app.angular.Factories.EventStreamFactory($http)
    ]);
