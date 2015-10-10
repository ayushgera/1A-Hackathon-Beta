/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
		this.onDeviceReady();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
	
	$("#ext-link").on("click", function() {
    if (typeof navigator !== "undefined" && navigator.app) {
        // Mobile device.
        navigator.app.loadUrl('http://tinyurl.com/automate-rebook', {openExternal: true});
    } else {
        // Possible web browser
        window.open("http://tinyurl.com/automate-rebook", "_blank");
    }
});
       $('.automate-checkbox').click(function() {
			//alert($(this).attr('class'));  //-->this will alert id of checked checkbox.
			   if($('.automate-checkbox:checked').length>0){
					$.ajax({
						type: "POST",
						url: 'https://wav.eu1.amadeus.com/plnext/icelandairFPC/Override.action?REC_LOC=5UPALW&DIRECT_RETRIEVE_LASTNAME=Lastname&TRIP_FLOW=YES&EMBEDDED_TRANSACTION=RetrievePNR&DIRECT_RETRIEVE=TRUE&SO_SITE_ALLOW_DIRECT_RT=TRUE&SO_SITE_PNR_SERV_REQ_LOGIN=NO&SO_SITE_DISPL_SPECIAL_REQS=TRUE&SO_SITE_ALLOW_PNR_SERV=YES&SO_SITE_ALLOW_PNR_MODIF=Y&SO_SITE_ALLOW_TKT_PNR_MODIF=Y&SO_SITE_RT_SHOW_PRICES=TRUE&SO_SITE_ETKT_VIEW_ENABLED=TRUE&SO_SITE_RT_PRICE_FROM_TST=TRUE&SO_GL=&SO_SITE_OFFICE_ID=KEFFI08AA&SO_SITE_QUEUE_OFFICE_ID=KEFFI08AA&SO_SITE_QUEUE_CATEGORY=0C0&SO_SITE_ALLOW_CH_SERV_MODIF=FALSE&SO_SITE_FORCE_CSSR=FALSE&SO_SITE_INFOPRICE_INITCSSR=FALSE&SO_SITE_MOP_EXT=TRUE&SO_SITE_MOP_CREDIT_CARD=TRUE&SO_SITE_ENABLE_MINI_RULES=FALSE&SO_SITE_USE_NEW_TICKET_ASS=TRUE&SO_SITE_FOP_MODE=SITE&EXTERNAL_ID=BOOKING&SITE=5APD5APD&LANGUAGE=GB&SO_SITE_APIV2_SERVER_USER_ID=GUEST&SO_SITE_APIV2_SERVER=194.156.170.78&SO_SITE_APIV2_SERVER_PWD=TAZ&SO_SITE_CORPORATE_ID=OCGPDT&SO_SITE_SI_SAP=1ASIXJCP&SO_SITE_SI_SERVER_PORT=18033&SO_SITE_SI_SERVER_IP=193.23.185.67&SO_SITE_SI_USER=UNSET&SO_SITE_SI_PASSWORD=UNSET&SO_SITE_SI_1AXML_FROM=SEP_JCP&SO_SITE_FQ_INTERFACE_ACTIVE=FALSE&SO_SITE_HOST_TRACE_ACTIVE=TRUE&SO_SITE_FP_TRACES_ON=FALSE&SO_SITE_RUI_ENABLE_DXCUSTOM=TRUE&SO_SITE_RUI_CUSTOM_ON=TRUE&SO_SITE_RUI_APP_LIGHT_LOAD=TRUE',
						data: "", //--> send id of checked checkbox on other page
						success: function(data) {
							//alert('it worked');
							alert(data);
							//$('#container').html(data);
						},
						 error: function() {
							alert('it broke');
						},
						complete: function() {
							//alert('it completed');
						}
					});

					}
			});
    }
	

};

