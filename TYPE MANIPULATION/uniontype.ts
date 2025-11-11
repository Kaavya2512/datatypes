type status = 'success' | 'failure'
function logMessage(msg:string,statusMsg:status){
    console.log(msg,statusMsg)
}
logMessage("User is in sign up screen","success");
logMessage("User has clicked the submit button","success")
logMessage("Issue with db - db error - cant connect","failure")
//logMessage("Issue with db - db error - cant connect", "progressing"); //error since progressing status is not there in status type


