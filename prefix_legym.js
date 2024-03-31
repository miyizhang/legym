var obj = JSON.parse($response.body);

obj.data.averageSpeedStart = "0";
obj.data.averageSpeedEnd = "8100000000";
obj.data.averageCadenceEnd = 90000;
obj.data.effectiveMileageStart = 0;
obj.data.effectiveMileageEnd = 50.0;
obj.data.dailyMileage = 50;
obj.data.weeklyMileage = 50;
obj.data.runningTimeLimit.openTimes[0].dayEndTime = "86300000"; 
obj.data.runningTimeLimit.weekOpenTimes[0].dayEndTime = "86300000"; 

$done({
  body: JSON.stringify(obj),
});

