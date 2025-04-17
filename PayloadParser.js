function parseUplink(device, payload)
{
	var info = payload.asJsonObject

    var temper = info.temperatura
    var dim = info.dimmer
    var dicol = info.color
    var light = info.light
    var lock = info.cerradura


    var tempe = device.endpoints.byAddress("Ts_001")
        if (tempe != null)
                {
                    tempe.updateTemperatureSensorStatus(25)
                }
    var dimm = device.endpoints.byAddress("Ts_002")
        if (dim != null)
            {
                dim.updateDimmerStatus(True, 22)
            }
                
    var dicol = device.endpoints.byAddress("Ts_003")
        if (dicol != null)
                {
                    dicol.updateDimmerColorStatus(3312)
                }
    var lihgt = device.endpoints.byAddress("Ts_004")
        if (light != null)
        {
            light.updateLightSensorStatus(29)
        }
    var lock = device.endpoints.byAddress("Ts_005")
        if (lock != null)
                {
                    lock.updateLockSensor(true)
                }
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}