(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{455:function(e){e.exports=JSON.parse('{"openapi":"3.0.2","info":{"title":"OpenGate North API","description":"The OpenGate Applications API is a Web REST based Interface that allows integration of external applications to the services provided by the OpenGate platform","version":"v9.2"},"servers":[{"url":"http://172.19.18.132:8082"}],"security":[{"ApiKeyAuth":[]}],"components":{"securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-ApiKey"}}},"paths":{"/north/v80/provision/organizations/{org_name}/devices/{id}":{"get":{"operationId":"getDevice","summary":"Get an existing Device Info","parameters":[{"name":"org_name","in":"path","description":"Name of organization","required":true,"schema":{"type":"string"}},{"name":"id","in":"path","description":"ID of device to return","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"200 response","content":{"application/json":{"examples":{"device":{"value":{"resourceType":{"_current":{"value":"entity.device"}},"provision":{"administration":{"identifier":{"_current":{"value":"device_battery","provType":"MONITORING","date":"2017-09-25T09:34:32.219Z"}},"organization":{"_current":{"value":"battery_organization","provType":"MONITORING","date":"2017-09-25T09:34:32.216Z"}},"channel":{"_current":{"value":"battery_channel","provType":"MONITORING","date":"2017-09-25T09:34:32.208Z"}},"serviceGroup":{"_current":{"value":"emptyServiceGroup","provType":"MONITORING","date":"2017-09-25T09:34:32.211Z"}},"plan":{"_current":{"value":"FLOW_RATE_100","provType":"MONITORING","date":"2017-10-04T12:18:18.402Z"}}},"device":{"identifier":{"_current":{"value":"device_battery_id","provType":"MONITORING","date":"2017-09-25T09:34:32.173Z"}},"name":{"_current":{"value":"device_battery_name","provType":"MONITORING","date":"2017-09-25T09:34:31.879Z"}},"description":{"_current":{"value":"device_battery_description","provType":"MONITORING","date":"2017-09-25T09:34:31.976Z"}},"administrativeState":{"_current":{"value":"ACTIVE","provType":"MONITORING","date":"2017-09-25T09:34:31.966Z"}},"operationalStatus":{"_current":{"value":"NORMAL","provType":"MONITORING","date":"2017-09-25T09:34:32.189Z"}},"model":{"_current":{"value":{"name":"OpenGate","version":"1.0","manufacturer":"OpenGate"},"provType":"MONITORING","date":"2017-09-25T09:34:31.915Z"}},"specificType":{"_current":{"value":"MODEM","provType":"MONITORING","date":"2017-09-25T09:34:31.865Z"}},"serialNumber":{"_current":{"value":"device_battery_sn","provType":"IDENTIFIER","date":"2017-09-25T09:34:31.845Z"}},"location":{"_current":{"value":{"position":{"type":"Point","coordinates":[-3.7028,40.41675]},"postal":"28013"},"provType":"MONITORING","date":"2017-09-25T09:34:31.954Z"}},"communicationModules":[{"identifier":{"_current":{"value":"commsMod_battery_id","provType":"MONITORING","date":"2017-09-25T09:34:32.119Z"}},"name":{"_current":{"value":"commsMod_battery_name","provType":"MONITORING","date":"2017-09-25T09:34:32.169Z"}},"description":{"_current":{"value":"commsMod_battery_description","provType":"MONITORING","date":"2017-09-25T09:34:32Z"}},"model":{"_current":{"value":{"name":"OpenGate","manufacturer":"OpenGate","version":"1.0"},"provType":"MONITORING","date":"2017-09-25T09:34:32.097Z"}},"specificType":{"_current":{"value":"UMTS","provType":"MONITORING","date":"2017-09-25T09:34:32.115Z"}},"mobile":{"imei":{"_current":{"value":"commsMod_battery_imei","provType":"MONITORING","date":"2017-09-25T09:34:32.103Z"}}},"subscription":{"identifier":{"_current":{"value":"subscription_battery_id","provType":"MONITORING","date":"2017-09-25T09:34:32.083Z"}},"name":{"_current":{"value":"subscription_battery_name","provType":"MONITORING","date":"2017-09-25T09:34:32.079Z"}},"description":{"_current":{"value":"subscription_battery_description","provType":"MONITORING","date":"2017-09-25T09:34:32.073Z"}},"administrativeState":{"_current":{"value":"ACTIVE","provType":"MONITORING","date":"2017-09-25T09:34:32.031Z"}},"specificType":{"_current":{"value":"MOBILE","provType":"MONITORING","date":"2017-09-25T09:34:32.013Z"}},"address":{"_current":{"value":{"type":"IPV4","value":"99.1.1.71","apn":"movistar.es"},"provType":"REFERENCE","date":"2017-09-25T09:34:32.041Z"}},"mobile":{"imsi":{"_current":{"value":"subscription_battery_imsi","provType":"IDENTIFIER","date":"2017-09-25T09:34:32.059Z"}},"msisdn":{"_current":{"value":"34969220026","provType":"MONITORING","date":"2017-09-25T09:34:32.049Z"}},"homeOperator":{"_current":{"value":"Telefónica Móviles España, SAU","provType":"MONITORING","date":"2017-09-25T09:34:32.055Z"}},"registeredOperator":{"_current":{"value":"Telefónica Móviles España, SAU","provType":"MONITORING","date":"2017-09-25T09:34:32.052Z"}}}},"subscriber":{"identifier":{"_current":{"value":"subscriber_battery_id","provType":"MONITORING","date":"2017-09-25T09:34:32.151Z"}},"name":{"_current":{"value":"subscriber_battery_name","provType":"MONITORING","date":"2017-09-25T09:34:32.158Z"}},"description":{"_current":{"value":"subscriber_battery_description","provType":"MONITORING","date":"2017-09-25T09:34:32.162Z"}},"administrativeState":{"_current":{"value":"ACTIVE","provType":"MONITORING","date":"2017-09-25T09:34:32.131Z"}},"specificType":{"_current":{"value":"SIM","provType":"MONITORING","date":"2017-09-25T09:34:32.143Z"}},"mobile":{"icc":{"_current":{"value":"subscriber_battery_icc","provType":"MONITORING","date":"2017-09-25T09:34:32.148Z"}}}}}]}}}}}}}}}}}}}')}}]);