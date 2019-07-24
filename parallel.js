function asyncGetAd(){
  return new Promise((resolve, reject)  => {
    console.log("please check our new TV")
    resolve({"adId": 1, "message": "checkout our new TV"})
  })
}

function asyncSendAd(){
  console.log("preparing to send async ad")
  var ad = asyncGetAd()
  return ad
}

async function syncSendAd(){
  var ad = await asyncSendAd()
  console.log("sending sync ad: " + JSON.stringify(ad))
  return ad
}

function syncSendAd1(){
  var ad = {}
  Promise.all([asyncSendAd()]).then(r => {
    console.log("[syncSend11] " + JSON.stringify(r))
    ad = r
  })
  console.log("[syncSend12] " + JSON.stringify(ad))
  return ad
}



//syncSendAd()
syncSendAd1()

