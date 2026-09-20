const zones=["z1","z2","z3","z4"];
const normal={flow:120,pressure:4.8,vibration:0.18,acoustic:12};
const leak={flow:78,pressure:2.7,vibration:0.92,acoustic:71};

function setBar(id,val,max){document.getElementById(id).style.width=Math.min(100,Math.max(5,val/max*100))+"%"}
function updateDashboard(isLeak){
  const d=isLeak?leak:normal;
  const probability=isLeak?86+Math.floor(Math.random()*10):5+Math.floor(Math.random()*8);
  const health=100-probability;
  document.getElementById("flow").textContent=(d.flow+Math.round((Math.random()-.5)*6));
  document.getElementById("pressure").textContent=(d.pressure+(Math.random()-.5)*.2).toFixed(1);
  document.getElementById("vibration").textContent=(d.vibration+(Math.random()-.5)*.08).toFixed(2);
  document.getElementById("probability").textContent=probability+"%";
  document.getElementById("score").textContent=health;
  document.getElementById("scoreRing").style.borderColor=isLeak?(probability>90?"#df4b4b":"#e3a529"):"#35b77b";
  setBar("flowBar",d.flow,150); setBar("pressureBar",d.pressure,6);
  setBar("vibrationBar",d.vibration,1.2); setBar("acousticBar",d.acoustic,100);

  zones.forEach(z=>document.getElementById(z).className="node healthy");
  const list=document.getElementById("alertList");
  if(isLeak){
    const z=zones[Math.floor(Math.random()*zones.length)];
    document.getElementById(z).className="node danger";
    const zoneName=document.getElementById(z).querySelector("b").textContent;
    document.getElementById("zone").textContent=zoneName;
    const loss=42+Math.floor(Math.random()*28);
    document.getElementById("loss").textContent=loss+" L/min";
    document.getElementById("networkState").textContent="Leak detected";
    document.getElementById("networkState").style.color="#c53a3a";
    document.getElementById("severity").textContent=probability>90?"HIGH":"MEDIUM";
    document.getElementById("severity").className="pill "+(probability>90?"danger-pill":"warn");
    document.getElementById("diagnosisTitle").textContent="Possible Pipeline Leakage";
    document.getElementById("diagnosisText").textContent=`AI detected an abnormal sensor pattern near ${zoneName}. Pressure drop and vibration/acoustic changes indicate a probable leak.`;
    document.getElementById("action").textContent="Inspect the affected zone, isolate the section if necessary, and schedule maintenance.";
    list.innerHTML=`<li>🚨 Leak probability ${probability}% detected in ${zoneName}.</li><li>💧 Estimated loss: ${loss} L/min.</li><li>🔧 Maintenance inspection recommended.</li>`;
    document.getElementById("alertCount").textContent="3 active";
  }else{
    document.getElementById("zone").textContent="None detected";
    document.getElementById("loss").textContent="0 L/min";
    document.getElementById("networkState").textContent="Healthy";
    document.getElementById("networkState").style.color="";
    document.getElementById("severity").textContent="LOW";
    document.getElementById("severity").className="pill safe";
    document.getElementById("diagnosisTitle").textContent="Pipeline Normal";
    document.getElementById("diagnosisText").textContent="Sensor readings are within expected limits. No significant anomaly detected.";
    document.getElementById("action").textContent="Continue routine monitoring.";
    list.innerHTML='<li class="empty">No active alerts.</li>';
    document.getElementById("alertCount").textContent="0 active";
  }
}

document.getElementById("simulateBtn").addEventListener("click",()=>{
  const leakDetected=Math.random()>.35;
  updateDashboard(leakDetected);
});
updateDashboard(false);
setInterval(()=>updateDashboard(Math.random()>.72),6000);