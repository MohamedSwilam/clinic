<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="650px"
                              :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView="currentView"
                              :actionBegin="onActionBegin" :actionComplete="onActionComplete">
                    <e-resources>
                        <e-resource field='LabelId' title='Label' :dataSource='resourceDataSource' :allowMultiple='allowMultipleLables' name='Label'
                                    textField='LabelText' idField='LabelId' colorField='LabelColor'>
                        </e-resource>
                    </e-resources>

                    <!--<e-views>-->
                    <!--<e-view option="Agenda" :allowVirtualScrolling="virtualscroll"></e-view>-->
                    <!--</e-views>-->
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    // import { zooEventsData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, View, Resize, DragAndDrop, ExcelExport, MonthAgenda, Agenda } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    var labelCollections = [
        { LabelText: 'My Calendar', LabelId: 1, LabelColor: '#c43081' },
        { LabelText: 'Company', LabelId: 2, LabelColor: '#ff7f50' },
        { LabelText: 'Birthday', LabelId: 3, LabelColor: '#AF27CD' },
        { LabelText: 'Holiday', LabelId: 4, LabelColor: '#808000' }
    ];

    export default Vue.extend({
        data: function () {
            return {
                cssClass: 'excel-export',
                eventSettings: {
                    dataSource: [{
                        Id: 1,
                        Subject: 'Meeting',
                        StartTime: new Date(2018, 1, 15, 10, 0),
                        EndTime: new Date(2018, 1, 15, 12, 30)
                    }]
                },
                resourceDataSource: [
                    labelCollections[0],
                    labelCollections[1],
                ],
                labelCollection: labelCollections,
                selectedDate: new Date(2018, 1, 15),
                datas: ['Day', 'Week', 'WorkWeek', 'Month', 'MonthAgenda', 'Agenda'],
                scheduleView: 'Month',
                currentView: 'Month',
                allowMultipleLables: true,
                virtualscroll: false,
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, MonthAgenda, Resize, DragAndDrop, ExcelExport]
        },
        methods: {
            oneventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            },
            changevalue: function (args) {
                let cotainerObj = this.$refs.ScheduleObj;
                cotainerObj.currentView = args.value;
                cotainerObj.dataBind();
            },
            onActionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    let exportItem = {
                        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                        text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
                    };
                    args.items.push(exportItem);
                }
            },

            onExportClick: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.exportToExcel();
            },
            onActionComplete: function (args) {
                args.cancel = true;
                if(args.requestType == "eventCreated"){
                    alert("Event Created")
                } else if(args.requestType == "eventChanged"){
                    alert("Event Changed")
                } else if(args.requestType == "eventRemoved"){
                    alert("Event Removed")
                }
                console.log(args);
            }
        }
    });

</script>

<style>
    @import "../../../../../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import '../../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../../../../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
    @import '../../../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
    @import '../../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../../../../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
    @import '../../../../../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../../../../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

    .excel-export.e-schedule .e-schedule-toolbar .e-icon-schedule-excel-export::before {
        content: '\e242';
    }

    .excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today{
        display: none !important;
    }

</style>
