function doPost(e) {
  try {
    var p = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    var eventName = String(p.event || "unknown").slice(0, 80);
    var d = p.data || {};
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName("FlowOps Events") || ss.insertSheet("FlowOps Events");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Timestamp", "Event", "Title / Campaign", "Owner", "Priority", "Status", "Payload JSON"]);
      sh.setFrozenRows(1);
    }
    var title = d.title || d.campaign || d.message || "";
    sh.appendRow([new Date(), eventName, String(title).slice(0,500), String(d.owner||"").slice(0,120), String(d.priority||"").slice(0,40), String(d.status||"").slice(0,40), JSON.stringify(d).slice(0,45000)]);
    var slack = PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");
    if (slack && eventName !== "test.ping") {
      var message = "*FlowOps event:* " + eventName + "\n*Item:* " + String(title || "Workflow event").slice(0,500) +
        (d.owner ? "\n*Owner:* " + String(d.owner).slice(0,120) : "") +
        (d.status ? "\n*Status:* " + String(d.status).slice(0,40) : "");
      UrlFetchApp.fetch(slack, {method:"post", contentType:"application/json", payload:JSON.stringify({text:message}), muteHttpExceptions:true});
    }
    return out({ok:true,event:eventName});
  } catch (err) { return out({ok:false,error:String(err && err.message || err)}); }
}
function doGet() { return out({ok:true,service:"FlowOps bridge",message:"POST events to this URL."}); }
function out(v) { return ContentService.createTextOutput(JSON.stringify(v)).setMimeType(ContentService.MimeType.JSON); }

/*
SETUP
1. Create a Google Sheet, then Extensions > Apps Script.
2. Replace Code.gs with this file and save.
3. Project Settings > Script properties: add SLACK_WEBHOOK_URL with your Slack Incoming Webhook URL.
4. Deploy > New deployment > Web app; Execute as: Me; Who has access: Anyone.
5. Copy the /exec URL into FlowOps > Integrations.
Keep the Slack webhook secret in Script Properties, never in the public site.
*/