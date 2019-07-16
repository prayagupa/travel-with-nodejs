function getAd(){
  return new Promise((resolve, reject)  => {
    console.log("please check our new TV")
    resolve({"adId": 1, "message": "checkout our new TV"})
  })
}

function asyncSendAd(){
  console.log("sending async ad")
  var ad = getAd()
  return ad
}

async function syncSendAd(){
  var ad = await asyncSendAd()
  console.log("sending sync ad: " + JSON.stringify(ad))
  return ad
}

//asyncSendAd()
syncSendAd()

